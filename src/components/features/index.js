import React from "react";
import {
  Container,
  Item,
  Pane
} from "./styles/features";

export default function Features({children,...restProps}) {
  return (
    <Item {...restProps}>{children}</Item>
  );
}

Features.Container = function FeaturesContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Features.Pane = function FeaturesPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

