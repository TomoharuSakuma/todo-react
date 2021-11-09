import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = { color: color, fontSize: "18px" };

  // タグの中身を参照するには props.children
  return <p style={contentStyle}>{children}</p>;
};

// export default ColorfulMessage;
