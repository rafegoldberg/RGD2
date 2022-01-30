import React from "react";
import PropTypes from "prop-types";

const User = (props) => (
  <pre>
    <code>{JSON.stringify(props, null, 2)}</code>
  </pre>
);

export default User;
