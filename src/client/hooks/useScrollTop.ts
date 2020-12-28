import * as React from "react";
import { useHistory } from "react-router-dom";

export const useScrollTop = () => {
  const history = useHistory();

  React.useEffect(() => {
    if (history.action === "PUSH") {
      window.scrollTo(0, 0);
    }
  }, [history]);
};
