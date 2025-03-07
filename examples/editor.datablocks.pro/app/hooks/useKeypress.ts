function useKeypress(keys, callback, options = {}) {
    const { event = "keydown", target, preventDefault = true } = options;
    
    const handler = useCallback((event) => {
      if (keys.includes(event.key)) {
        if (preventDefault) {
          event.preventDefault();
        }
        callback(event);
      }
    }, [keys, callback, preventDefault]);
  
    useKeyboardEventListener(event, handler, target);
  }