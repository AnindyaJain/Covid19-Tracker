import React from 'react';
// import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import  Title  from '../../components/title';

describe('<Title />', ()=> {
    it('renders the <Title /> with populated data', ()=>{
        const {container, getByText } = render(
            <Title>
                <Title.Heading>Covid19Tracker</Title.Heading>
            </Title>
        );
        expect(getByText('Covid19Tracker')).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    });
});
