import { Wrapper } from "./styles";

import PropTypes from "prop-types";

const Label = ({ children }) => <Wrapper>{children}</Wrapper>;

Label.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Label };
