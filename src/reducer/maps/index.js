import { bindActionCreators } from "redux";
import * as actions from "reducer/actions";

export const mapStateToProps = (state) => ({ state: state });

export const mapDispatchToProps = (dispatch) =>
  bindActionCreators(actions, dispatch);
