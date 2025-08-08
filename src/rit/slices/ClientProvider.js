"use client";
import { Provider } from "react-redux";
import store from "@/rit/store"; // تأكد من أن المسار صحيح
import ThemeInitializer from "./ThemeInitializer";
const ClientProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeInitializer />
      {children}
    </Provider>
  );
};

export default ClientProvider;

