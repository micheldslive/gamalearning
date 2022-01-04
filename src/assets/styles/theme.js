import React from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "redux/maps";
import { ThemeProvider } from "styled-components";

const Theme = ({ children, state }) => {
  return <ThemeProvider theme={state}>{children}</ThemeProvider>;
};

export default connect(mapStateToProps, null)(Theme);
