import { useEffect, type FC, useState, ReactNode } from "react";

const ClientRender = ({ children }: { children: ReactNode }) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return isClient ? children : null;
};

export default ClientRender;
