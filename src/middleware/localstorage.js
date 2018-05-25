let cashedState = null;

const getField = (field, defaultValue) => {
  const content = localStorage.getItem(field);
  if (!content) {
    return defaultValue;
  }
  try {
    return JSON.parse(content);
  } catch (e) {
    const value = parseFloat(content, 10);
    return content;
  }
};

export default (selector = state => state, onCatch) => {
  return ({ getState, dispatch }) => next => action => {
    next(action);
    const newState = selector(getState());

    Object.keys(newState)
      .filter(key => cashedState[key] !== newState[key])
      .forEach(key => {
        let data = newState[key];
        try {
          if (typeof data === "object") {
            // cyclic erros handling
            data = JSON.stringify(data);
          }
          // ls erros handling
          localStorage.setItem(key, data);
        } catch (e) {
          if (onCatch) {
            onCatch(e);
            return;
          }
          // No error handling :(
          throw e;
        }
      });

    cashedState = newState;
  };
};

export const getInitialStateFromLocalStorage = fields => {
  const state = Object.keys(fields).reduce(
    (store, field) => ({ ...store, [field]: getField(field, fields[field]) }),
    {}
  );

  cashedState = state;

  return state;
};
