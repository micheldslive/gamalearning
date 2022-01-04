import { bindActionCreators } from "redux";
import * as action from "redux/actions";

export const mapStateToProps = (state) => ({ state: state });

export const mapDispatchToProps = (dispatch) =>
  bindActionCreators(action, dispatch);
