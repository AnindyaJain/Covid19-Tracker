import React from "react";
import {
  Container,
  Frame,
  Heading,
  Image,
} from "./styles/title";

export default function Title({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Title.Image = function TitleImage({ ...restProps }) {
  return <Image {...restProps} />;
};

Title.Heading = function TitleHeading({ children, ...restProps }) {
  return <Heading {...restProps}>{children}</Heading>;
};
