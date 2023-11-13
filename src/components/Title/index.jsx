import { Wrapper } from "./styles";

import PropTypes from "prop-types";

const Title = ({ children }) => <Wrapper>{children}</Wrapper>;

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Title };
