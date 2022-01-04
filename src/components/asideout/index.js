import React, { useRef, useEffect } from "react";
import { AsideOpen } from "assets/styles/aside"
import { connect } from "react-redux";
import { mapDispatchToProps } from "redux/maps";

const AsideOut = ({ toggleAside }) => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.click();
  }, []);

  return (
    <>
      <AsideOpen ref={ref} onClick={() => toggleAside(false)}></AsideOpen>
    </>
  );
};

export default (connect(null, mapDispatchToProps))(AsideOut);