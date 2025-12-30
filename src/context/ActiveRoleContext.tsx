import { createContext, useContext } from "react";

export const ActiveRoleContext = createContext<{
  activeRole: string | null;
  setActiveRole: (role: string | null) => void;
}>({
  activeRole: null,
  setActiveRole: () => {},
});

export const useActiveRole = () => useContext(ActiveRoleContext);

export default ActiveRoleContext;
