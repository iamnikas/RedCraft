import { useState } from "react";
import "./App.css";
import { Canvas } from "./canvas";

export default function App() {
  const [canvasProto, setCanvasProto] = useState<any>(null);

  const handleAddEl = (operator: string) => {
    console.log("[app][handleAddEl] operator:", operator);

    // Если оператор — плюс, вызываем функцию для добавления на канвас
    if (operator === "plus" && canvasProto?.handleAddOperatorPlus) {
      canvasProto.handleAddOperatorPlus();
    }

    if (operator === "variable" && canvasProto?.handleAddVariable) {
      canvasProto.handleAddVariable();
    }

    if (
      operator === "structure_function" &&
      canvasProto?.handleAddStructureFuction
    ) {
      canvasProto.handleAddStructureFuction();
    }
  };

  console.log("[app]");

  return (
    <div className="container">
      <div className="sidebar">
        <div className="header">RedCraft</div>
        <div className="inventory">
          <div className="item" onClick={() => handleAddEl("variable")}>
            Add Variable
          </div>

          <div className="item" onClick={() => handleAddEl("plus")}>
            Add Plus
          </div>

          <div
            className="item"
            onClick={() => handleAddEl("structure_function")}
          >
            Add Function
          </div>
        </div>
      </div>

      <div className="content">
        <Canvas
          setProto={({
            handleAddOperatorPlus,
            handleAddVariable,
            handleAddStructureFuction,
          }) => {
            if (canvasProto) {
              return;
            }
            setCanvasProto({
              handleAddOperatorPlus,
              handleAddVariable,
              handleAddStructureFuction,
            });
          }}
        />
      </div>
    </div>
  );
}
