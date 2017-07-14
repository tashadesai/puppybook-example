import React from 'react';
import {createStore} from 'redux';
import {range, last} from 'lodash';

import {AllPuppies} from '../browser/components/AllPuppies'

import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());
import {shallow} from 'enzyme';
import {spy} from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);
import faker from 'faker';

const createRandomNames = amount => {
    return range(0, amount).map(index => {
        return {
            id: index + 1,
            from: {email: faker.cat.name()},
        };
    });
};

const testUtilities = {
    createRandomNames,
    createOneRandomName: () => createRandomMessages(1)[0]
};

describe('▒▒▒ React tests ▒▒▒', function () {

    describe('Message', () => {

        describe('visual content', () => {

            // Before every `it` spec, we instantiate a new `Message` react component.
            // `Message` comes from the react/components/Message.js file.
            // This component will receive some data in its `fullMessage` prop.
            // We store this component in a testable wrapper, `messageWrapper`.

            let puppyData, puppyWrapper;
            beforeEach('Create <AllPuppies /> wrapper', () => {
                puppyData = [{
                    id: 5,
                    name: "Spot"
                }];
                // creates the testable React component
                puppyWrapper = shallow(<AllPuppies allPuppies={puppyData} />);
            });

            // These specs are relatively promitive — all we are asking you to
            // do is to fill in each JSX tag (h1, h2, etc.) in the `render`
            // method to match the HTML string shown. You can pass these in a
            // "trivial" way, but look five or so specs down for a twist…

            it('displays Puppy name as an h1', () => {
                expect(puppyWrapper.find('h1')).to.have.html('<h1>Spot</h1>');
            });

            it('is not hardcoded', () => {
                const aDifferentPuppy = [{
                    id: 5,
                    name: "Fido"
                }];
                // we make a new component with this different data, and check its contents
                const differentMessageWrapper = shallow(<AllPuppies allPuppies={aDifferentPuppy} />);
                expect(differentMessageWrapper.find('h1')).to.have.html('<h1>Fido</h1>');

            });
        })
    })
})