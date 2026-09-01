import React, { useContext } from "react";
import { userContext } from "../contexts/userContext";

const PageContainer = ({ children }) => {
  const { token } = useContext(userContext);

  return (
    <div className={(token ? "col-xxl-9" : "col-xxl-12") + " row p-3 pb-0"}>
      {children}
    </div>
  );
};

export default PageContainer;
