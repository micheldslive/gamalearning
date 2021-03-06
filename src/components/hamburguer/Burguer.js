import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "reducer/maps";
import { BurgerContent, BurgerStyle, Bullets } from "assets/styles/dashboard";

const Burger = ({ state, toggleAside }) => {
  const { aside } = state.gama
  return (
    <BurgerContent>
      <BurgerStyle onClick={() => toggleAside(!aside)}>
        <Bullets />
        <Bullets />
        <Bullets />
      </BurgerStyle>
    </BurgerContent>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Burger);
