import React from "react";
import { Container, Frame, Content, Title } from "./styles/list";

export default function List({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

List.Title = function ListTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

List.Content = function ListContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

List.Frame = function ListFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};
