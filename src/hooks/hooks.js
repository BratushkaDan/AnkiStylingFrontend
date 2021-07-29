import {useState, useEffect, useLayoutEffect} from "react";

export function useTopWindowOffset(initialState, ref) {
  const [offset, setOffset] = useState(initialState);

  useLayoutEffect(() => {
    console.log(ref.current.getBoundingClientRect().top);
    setOffset(Math.ceil(ref.current.getBoundingClientRect().top) + 'px');
  }, [ref])

  return offset;
}

export function useShortcut(callback, shortcutKeys, deps) {
  let keysSet = new Set();

  let timeout = null;

  function handler(e) {
    clearTimeout(timeout);

    keysSet.add(e.code.toLowerCase().replace('left', '').replace('key', ''));
    shortcutKeys = shortcutKeys.map(key => key.toLowerCase());
    let cond = shortcutKeys.every(key => keysSet.has(key));
    if (cond) {
      callback();
      keysSet.clear();
    }
    timeout = setTimeout(() => keysSet.clear(), 400)
  }

  useEffect(() => {
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, deps);
}