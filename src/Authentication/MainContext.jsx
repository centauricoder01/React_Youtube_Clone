import { createContext } from "react";

export const Data = createContext();

function MainContext({ children }) {
  return <Data.Provider value={{ value: "raju" }}>{children}</Data.Provider>;
}
export default MainContext;
