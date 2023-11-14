import { Wrapper } from "./styles";

import PropTypes from "prop-types";

const Button = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Button };
