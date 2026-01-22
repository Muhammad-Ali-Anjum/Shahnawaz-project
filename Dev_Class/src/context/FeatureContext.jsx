import { createContext, useContext } from "react";
import { featureData } from "../data/featureData";

const FeatureContext = createContext();

export const FeatureProvider = ({ children }) => {
  return (
    <FeatureContext.Provider value={{ features: featureData }}>
      {children}
    </FeatureContext.Provider>
  );
};

export const useFeatures = () => {
  const context = useContext(FeatureContext);
  if (!context) {
    throw new Error("useFeatures must be used inside FeatureProvider");
  }
  return context;
};
