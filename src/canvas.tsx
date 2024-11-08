import React, { useEffect, useRef, useState } from "react";
import { Stage, Layer, Rect, Line, Image, Group } from "react-konva";
import useImage from "use-image"; // Для загрузки изображения

import operatorPlusIcon from "./assets/operator_plus.png";

interface CanvasProps {
  setProto: (proto: {
    handleAddOperatorPlus: () => void;
    handleAddVariable: () => void;
    handleAddStructureFuction: () => void;
  }) => void;
}

const ResizeControlLine = ({
  variant = "vertical",
  x,
  y,
  width = 4,
  height = 20,
}) => {
  return (
    <Rect
      x={x}
      y={y}
      radius={4}
      strokeWidth={1}
      stroke="#ededed"
      fill="#ddd"
      width={width}
      height={height}
      onMouseEnter={(e) => e.target.to({ fill: "#000" })}
      onMouseLeave={(e) => e.target.to({ fill: "#ddd" })}
    />
  );
};

const ResizeControlGrip = ({
  x,
  y,
  width = 10,
  height = 10,
  stroke = "gray",
}) => {
  return (
    <Group x={x} y={y}>
      <Line points={[0, height, width, 0]} stroke={stroke} strokeWidth={2} />
      <Line
        points={[width * 0.33, height, width, height * 0.33]}
        stroke={stroke}
        strokeWidth={2}
      />
      <Line
        points={[width * 0.66, height, width, height * 0.66]}
        stroke={stroke}
        strokeWidth={2}
      />
    </Group>
  );
};

export const Canvas: React.FC<CanvasProps> = ({ setProto }) => {
  const containerRef = useRef(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const [isConnecting, setIsConnecting] = useState<boolean>(false);
  const [line, setLine] = useState<number[]>([]); // Массив точек для линии
  const [startConnector, setStartConnector] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [operatorPlusImage] = useImage(operatorPlusIcon); // Загружаем изображение

  const [shapes, setShapes] = useState<any[]>([]); // Состояние для всех объектов на канвасе
  const gridSize = 50; // Размер одного квадрата сетки
  const connectorEdge = 6;

  const structures = {
    structure_function: {
      size: [300, 200],
    },
  };

  // Общая функция для создания коннектора
  const createConnector = (x: number, y: number, id: string) => {
    const handleMouseDown = (e: any) => {
      e.evt.preventDefault();

      console.log(
        "[handleMouseDown] e:",
        e,
        e.currentTarget.index,
        e.target.parent.index,
      );

      if (e.currentTarget.index === e.target.parent.index) {
        return;
      }

      setIsConnecting(true);

      setStartConnector({ x: e.target.x(), y: e.target.y() });
      setLine([
        e.target.x() + 6,
        e.target.y() + 6,
        e.target.x() + 3,
        e.target.y() + 3,
      ]); // Начинаем линию
    };

    return (
      <Rect
        key={id}
        x={x}
        y={y}
        width={connectorEdge}
        height={connectorEdge}
        fill="#ffffff"
        stroke="blue"
        strokeWidth={1}
        onMouseDown={handleMouseDown}
        onMouseUp={(e) => handleMouseUp(e, id)}
        onMouseOver={(e) => {
          const connector = e.target;
          const stage = e.target.getStage();
          stage.container().style.cursor = "pointer";

          connector.to({
            fill: "blue", // Меняем цвет заливки
            width: connectorEdge * 1.5, // Увеличиваем размер по X
            height: connectorEdge * 1.5, // Увеличиваем размер по Y
            duration: 0,
            x: connector.x() - connectorEdge / 2,
            y: connector.y() - connectorEdge / 2,
          });
        }}
        onMouseOut={(e) => {
          const connector = e.target;
          const stage = e.target.getStage();
          stage.container().style.cursor = "default";

          connector.to({
            fill: "#ffffff", // Меняем цвет заливки
            width: connectorEdge,
            height: connectorEdge, // Увеличиваем размер по Y
            duration: 0,
            x: connector.x() + connectorEdge / 2,
            y: connector.y() + connectorEdge / 2,
          });
        }}
        onContextMenu={(e) => {
          console.log("[onContextMenu] e:", e);

          setIsConnecting(false);
          setStartConnector({ x: 0, y: 0 });
          setLine([]);
        }}
      />
    );
  };

  const handleMouseUp = (e: any, id: string) => {
    setIsConnecting(false);
    setStartConnector(null);
    // Если есть линия, и мышь отпустили на другом коннекторе
    if (line.length > 0 && startConnector) {
      setLine([...line.slice(0, 2), e.target.x() + 3, e.target.y() + 3]);
    }
  };

  // Функция для создания объекта Plus
  const handleAddOperatorPlus = () => {
    console.log("[canvas][handleAddOperatorPlus] shapes:", shapes);
    const newGroup = {
      id: `plus-${shapes.length + 1}`,
      type: "plus",
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      connectors: [
        { id: `conn-${shapes.length + 1}-1`, x: -connectorEdge / 2, y: 15 },
        { id: `conn-${shapes.length + 1}-2`, x: -connectorEdge / 2, y: 35 },
        { id: `conn-${shapes.length + 1}-3`, x: 50, y: 25 },
      ],
    };
    console.log(
      "[canvas][handleAddOperatorPlus] shapes.length:",
      shapes.length,
      "newGroup:",
      newGroup,
    );

    setShapes([...shapes, newGroup]);
  };

  console.log("[canvas] shapes:", shapes);

  // Функция для создания объекта Variable
  const handleAddVariable = () => {
    const newGroup = {
      id: `var-${shapes.length + 1}`,
      type: "variable",
      x: window.innerWidth / 2 - 20,
      y: window.innerHeight / 2 - 10,
      connectors: [{ id: `conn-${shapes.length + 1}-1`, x: 37, y: 7 }],
    };

    setShapes([...shapes, newGroup]);
  };

  // Функция для создания объекта структуры функции
  const handleAddStructureFuction = () => {
    const newGroup = {
      id: `structure_function-${shapes.length + 1}`,
      type: "structure_function",
      x: window.innerWidth / 2 - structures.structure_function.size[0],
      y: window.innerHeight / 2 - structures.structure_function.size[1],
      connectors: [],
    };

    setShapes([...shapes, newGroup]);
  };

  // Функция для обновления коннекторов при перемещении
  const handleDragMove = (e: any, shapeId: string) => {
    const updatedShapes = shapes.map((shape) => {
      if (shape.id === shapeId) {
        return {
          ...shape,
          x: e.target.x(),
          y: e.target.y(),
        };
      }
      return shape;
    });
    setShapes(updatedShapes);
  };

  useEffect(() => {
    setProto({
      handleAddOperatorPlus,
      handleAddVariable,
      handleAddStructureFuction,
    });
  }, [setProto]);

  // Отрисовка сетки
  const drawGrid = () => {
    const lines = [];
    for (let i = 0; i < window.innerWidth / gridSize; i++) {
      lines.push(
        <Line
          key={`v-line-${i}`}
          points={[i * gridSize, 0, i * gridSize, window.innerHeight]}
          stroke="#ccc"
          strokeWidth={1}
          opacity={0.3}
        />,
      );
    }
    for (let j = 0; j < window.innerHeight / gridSize; j++) {
      lines.push(
        <Line
          key={`h-line-${j}`}
          points={[0, j * gridSize, window.innerWidth, j * gridSize]}
          stroke="#ccc"
          strokeWidth={1}
          opacity={0.3}
        />,
      );
    }
    return lines;
  };

  const handleMouseEnter = (e: any) => {
    const stage = e.target.getStage();
    stage.container().style.cursor = "pointer"; // Изменяем курсор на pointer
  };

  const handleMouseLeave = (e: any) => {
    const stage = e.target.getStage();
    stage.container().style.cursor = "default"; // Возвращаем курсор в default
  };

  return (
    <div
      ref={containerRef}
      style={{ border: "1px solid black", width: "100%", height: "100vh" }}
    >
      <Stage
        ref={stageRef}
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseMove={(e) => {
          setMousePosition({
            x: e.evt.layerX,
            y: e.evt.layerY,
          });

          // Если идет соединение, обновляем линию
          if (isConnecting && startConnector) {
            setLine([
              startConnector.x,
              startConnector.y,
              mousePosition.x,
              mousePosition.y,
            ]);
          }
        }}
      >
        <Layer>
          {/* {drawGrid()} */}

          {shapes.map((shape) => (
            <React.Fragment key={shape.id}>
              {shape.type === "plus" && (
                <>
                  <Image
                    image={operatorPlusImage}
                    x={shape.x}
                    y={shape.y}
                    width={50}
                    height={50}
                    onMouseEnter={(e) => {
                      handleMouseEnter(e);
                    }}
                    onMouseLeave={(e) => {
                      handleMouseLeave(e);
                    }}
                    onDragMove={(e) => handleDragMove(e, shape.id)} // Обновляем коннекторы при перемещении
                  />
                  <Image
                    image={operatorPlusImage}
                    x={shape.x}
                    y={shape.y}
                    width={50}
                    height={50}
                    opacity={0.33}
                    draggable
                    onMouseEnter={(e) => {
                      handleMouseEnter(e);
                    }}
                    onMouseLeave={(e) => {
                      handleMouseLeave(e);
                    }}
                    onMouseDown={() => {}}
                    onMouseUp={(e) => {
                      shape.x = mousePosition.x;
                      shape.y = mousePosition.y;

                      handleDragMove(e, shape.id);
                    }}
                  />
                </>
              )}

              {shape.type === "variable" && (
                <Rect
                  x={shape.x}
                  y={shape.y}
                  width={40}
                  height={20}
                  fill="white"
                  stroke="blue"
                  strokeWidth={2}
                  draggable
                  onDragMove={(e) => handleDragMove(e, shape.id)} // Обновляем коннекторы при перемещении
                />
              )}

              {shape.type === "structure_function" && (
                <Group draggable>
                  <Rect
                    x={shape.x}
                    y={shape.y}
                    stroke="#ededed"
                    strokeWidth={10}
                    width={shape.width ?? structures.structure_function.size[0]}
                    height={
                      shape.height ?? structures.structure_function.size[1]
                    }
                  />

                  <ResizeControlLine
                    x={shape.x}
                    y={shape.y + structures.structure_function.size[1] / 2}
                  />
                  <ResizeControlLine
                    x={shape.x + structures.structure_function.size[0]}
                    y={shape.y + structures.structure_function.size[1] / 2}
                  />

                  <ResizeControlGrip
                    x={shape.x + structures.structure_function.size[0] - 20}
                    y={shape.y + structures.structure_function.size[1] - 20}
                  />
                </Group>
              )}

              {shape.connectors.map((conn) =>
                createConnector(shape.x + conn.x, shape.y + conn.y, conn.id),
              )}
            </React.Fragment>
          ))}

          {/* Линия для соединения */}
          {line.length > 0 && (
            <Line points={line} stroke="gray" strokeWidth={2} />
          )}
        </Layer>
      </Stage>
    </div>
  );
};
