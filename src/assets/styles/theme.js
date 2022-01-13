import React from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "reducer/maps";
import { ThemeProvider } from "styled-components";

const Theme = ({ children, state }) => {
  return <ThemeProvider theme={state.gama}>{children}</ThemeProvider>;
};

export default connect(mapStateToProps, null)(Theme);
