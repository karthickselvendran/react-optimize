Notes:

-optimize performance

-memo: if props changes, then only component will render. If function coming in props, component will re-render, to overcome this issue need to use useCallback in function

-useCallback: to memoize function we can use this. Will trigger function if parameter changes only - we using for object reference inequality

-useMemo: to optimize
