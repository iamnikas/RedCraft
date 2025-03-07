function useClickable({
    onClick,
    onKeyDown,
    onKeyUp,
    onMouseDown,
    onMouseUp,
    tabIndex,
    isDisabled,
    isFocusable,
    ...props
  }) {
    const [isPressed, setIsPressed] = useState(false);
    
    // Обработчики событий мыши
    const mouseDownHandler = (event) => {
      // ... логика обработки
    };
    
    const mouseUpHandler = (event) => {
      // ... логика обработки
    };
  
    // Обработчики клавиатуры
    const keyDownHandler = (event) => {
      // ... логика обработки
    };
  
    const keyUpHandler = (event) => {
      // ... логика обработки
    };
  
    return {
      onClick,
      onKeyDown: keyDownHandler,
      onKeyUp: keyUpHandler,
      onMouseDown: mouseDownHandler,
      onMouseUp: mouseUpHandler,
      tabIndex: isDisabled ? undefined : tabIndex ?? 0,
      'aria-disabled': isDisabled ? true : undefined,
      ...props
    };
  }