import React from "react";
import { Container, Frame, Content, Title } from "./styles/summary";

export default function Summary({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Summary.Title = function SummaryTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Summary.Content = function SummaryContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

Summary.Frame = function SummaryFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};
