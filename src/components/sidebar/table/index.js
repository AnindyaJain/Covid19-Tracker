import React from "react";
import { Container, Row, Cell, Title } from "./styles/table";

export default function Table({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Table.Title = function TableTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Table.Row = function TableRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Table.Cell = function TableCell({ children, ...restProps }) {
  return <Cell {...restProps}>{children}</Cell>;
};

