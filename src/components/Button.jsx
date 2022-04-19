import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  color: ${({ primary }) => (primary ? "orange" : "blue")};
  height: ${({ props }) => props.height};
  width: ${({ props }) => props.width};
  font-size: 20px;
  background-color: ${({ background }) => background};
  border: ${({ transparent }) =>
    transparent ? "transparent" : "3px black solid"};
`;

const Button = (prop) => {
  return (
    <Btn primary={true} transparent={false} background={"brown"} props={prop}>
      hello
    </Btn>
  );
};

export default Button;
