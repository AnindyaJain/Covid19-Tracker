import React from 'react';
import { Container, Pane, Heading, Select, Option } from './styles/filter';


export default function Filter({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Filter.Pane = function FilterPane({ children, ...restProps }) {
    return <Pane {...restProps}>{children}</Pane>;
};
Filter.Heading = function FilterHeading({ children, ...restProps }) {
    return <Heading {...restProps}>{children}</Heading>
};
Filter.Select = function FilterSelect({ children, ...restProps }) {
    return <Select {...restProps}>{children}</Select>;
};
Filter.Option = function FilterOption({ children, ...restProps }) {
  return <Option {...restProps}>{children}</Option>;
};