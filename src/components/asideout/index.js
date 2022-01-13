import { useEffect } from "react";
import { connect } from "react-redux";
import { mapDispatchToProps } from "reducer/maps";

const AsideOut = ({ toggleAside }) => {
  useEffect(() => {
    toggleAside(false);
  }, [toggleAside]);

  return null;
};

export default connect(null, mapDispatchToProps)(AsideOut);
