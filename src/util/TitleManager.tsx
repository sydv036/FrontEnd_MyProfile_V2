import React, { useEffect } from "react";
import { useNavigation } from "react-router-dom";
type TChildren = {
  children: React.ReactNode;
};
const titles: Record<string, string> = {
  "/": "Login Page",
  "/register": "Register Page",
  "/profile": "Profile Page",
  "/update-profile": "Update Profile Page",
};
const TitleManager: React.FC<TChildren> = ({ children }) => {
  const navigation = useNavigation();
  useEffect(() => {
    if (navigation.location) {
      document.title = titles[navigation.location.pathname] || "My Profiles";
    }
  }, [navigation.location]);
  return <>{children}</>;
};

export default TitleManager;
