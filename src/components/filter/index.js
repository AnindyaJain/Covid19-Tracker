import React from 'react';
import { Container, Group, Dropdown, Text, Button } from './styles/filter';


export default function Filter({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Filter.Button = function FilterButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>;
};
Filter.Group = function FilterGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>
};
Filter.Text = function FilterText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};
Filter.Dropdown = function FilterDropdown({ children, ...restProps }) {
    return <Dropdown {...restProps}>{children}</Dropdown>;
};
