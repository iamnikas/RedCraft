function useKeyboardEventListener(
    eventName,
    handler,
    element,
    options = {}
  ) {
    const savedHandler = useRef(handler);
  
    useEffect(() => {
      savedHandler.current = handler;
    }, [handler]);
  
    useEffect(() => {
      const targetElement = element ?? window;
      const eventListener = (event) => savedHandler.current(event);
      
      targetElement.addEventListener(eventName, eventListener, options);
      
      return () => {
        targetElement.removeEventListener(eventName, eventListener, options);
      };
    }, [eventName, element, options]);
  }