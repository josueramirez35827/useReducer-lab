
export default function Reducer(state, action) {
  switch (action.type) {
    case "ADD":
      let currentValue = state;
      return currentValue += action.payload;
    case "SUBTRACT":
      let currentValue1 = state;
      return currentValue1 -= action.payload;
    default:
      return state;
  }
};