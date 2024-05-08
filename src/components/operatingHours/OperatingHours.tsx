import React, { useContext, useMemo } from "react";

import { ProductContext } from "src/store/UserContext";
import { SOperatingHours } from "./OperatingHours.styled";

type IOPTION = {
  [key: string]: { label: string; status: "open" | "close" };
};

const OPTIONS: IOPTION = {
  OPEN: {
    label: "영업중",
    status: "open",
  },
  CLOSE: {
    label: "영업종료",
    status: "close",
  },
};

const OperatingHours = () => {
  const { product } = useContext(ProductContext);

  const status = useMemo(() => {
    const currentDate = new Date();
    const currenHours = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();
    const currentTime = `${currenHours}:${currentMinutes}`;

    const startTime = product?.startTime;
    const endTime = product?.endTime;

    if (startTime < currentTime && endTime > currentTime) {
      return OPTIONS["OPEN"];
    }

    return OPTIONS["CLOSE"];
  }, [product]);

  return (
    <SOperatingHours status={status.status}>
      <i className="operating-status-icon" />
      <p className="operating-label">{status.label || ""}</p>
    </SOperatingHours>
  );
};

export default OperatingHours;
