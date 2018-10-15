export default function billing(
  initialState = { dummy: "Shit load." },
  action
) {
  switch (action.type) {
    case "DUMMY":
      console.log("Now i'm gonna fuck with state");
      return { ...initialState, dummy: action.payload };
    default:
      return initialState;
  }
}
