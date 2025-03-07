function clickable(config = {}) {
    const {
      ref,
      isDisabled,
      isFocusable,
      clickOnEnter = true,
      clickOnSpace = true,
      onMouseDown,
      onMouseUp,
      onClick,
      onKeyDown,
      onKeyUp,
      tabIndex,
      onMouseOver,
      onMouseLeave
    } = config;
  
    // Проверка является ли элемент редактируемым
    function isContentEditable(target) {
      const { tagName, isContentEditable } = target;
      return tagName !== "INPUT" && 
             tagName !== "TEXTAREA" && 
             isContentEditable !== true;
    }
  
    // ... остальная логика
  }