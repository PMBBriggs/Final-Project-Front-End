import { User } from "firebase/auth";
import { createContext } from "react";

export interface AuthContextModel {
  user: User | null; // null when not logged in
}
const defaultValue: AuthContextModel = { user: null };
const AuthContext = createContext(defaultValue);
export default AuthContext;
