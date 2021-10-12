import React, { useRef, useEffect } from "react";
import { AsideOpen } from "assets/styles/aside"

export const AsideOut = ({ setOpen }) => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.click();
  }, []);

  return (
    <>
      <AsideOpen ref={ref} onClick={() => setOpen(false)}></AsideOpen>
    </>
  );
};
