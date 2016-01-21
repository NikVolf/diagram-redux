import TestUtils from 'react-addons-test-utils';
import Diagram from '../../src/components/Diagram';
import {expect} from 'chai';
import React from "react";

describe('Diagram', () => {

    it('renders a svg root', () => {
        const component = TestUtils.renderIntoDocument(
            <Diagram />
        );
        const svg = TestUtils.scryRenderedDOMComponentsWithTag(component, 'svg');

        expect(svg.length).to.equal(1);

    });


});