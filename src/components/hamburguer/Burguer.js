import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "redux/maps";
import { BurgerContent, BurgerStyle, Bullets } from "assets/styles/dashboard";

const Burger = ({ modules, toggleAside }) => {
  return (
    <BurgerContent>
      <BurgerStyle onClick={() => toggleAside(!modules.aside)}>
        <Bullets />
        <Bullets />
        <Bullets />
      </BurgerStyle>
    </BurgerContent>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Burger);
