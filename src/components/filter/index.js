import React from 'react';
import {  Select, Option } from './styles/filter';

export default function Filter({ children, ...restProps }) {
    return {children};
};

Filter.Select = function FilterSelect({ children, ...restProps }) {
    return <Select {...restProps}>{children}</Select>;
};
Filter.Option = function FilterOption({ children, ...restProps }) {
  return <Option {...restProps}>{children}</Option>;
};
