import React, { createContext, useContext, useState } from "react";

interface ShortlistContextType {
  shortlisted: boolean;
  setShortlisted: (v: boolean) => void;
  rejected: boolean;
  setRejected: (v: boolean) => void;
}

const ShortlistContext = createContext<ShortlistContextType | undefined>(
  undefined
);

export const ShortlistProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [shortlisted, setShortlisted] = useState(false);
  const [rejected, setRejected] = useState(false);

  return (
    <ShortlistContext.Provider
      value={{ shortlisted, setShortlisted, rejected, setRejected }}
    >
      {children}
    </ShortlistContext.Provider>
  );
};

export const useShortlist = (): ShortlistContextType => {
  const ctx = useContext(ShortlistContext);
  if (!ctx)
    throw new Error("useShortlist must be used within ShortlistProvider");
  return ctx;
};

export default ShortlistContext;
