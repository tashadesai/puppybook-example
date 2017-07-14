import React from 'react';
import {createStore} from 'redux';
import {range, last} from 'lodash';

import {AllPuppies} from '../browser/components/AllPuppies'
import AllPuppiesContainer from '../browser/components/AllPuppies'


import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());
import {shallow} from 'enzyme';
import {spy} from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);
import faker from 'faker';

import rootReducer from '../browser/redux/reducer';
import actualStore from '../browser/store';

import {getAllPuppies} from '../browser/redux/reducer'
import {getPuppies} from '../browser/redux/allPuppies-actions'

const createRandomNames = amount => {
    return range(0, amount).map(index => {
        return {
            id: index + 1,
            name: faker.name.findName(),
        };
    });
};

const testUtilities = {
    createRandomNames
};

describe('▒▒▒ React tests ▒▒▒', function () {

    describe('AllPuppies', () => {

        describe('text displayed', () => {

            // Before every `it` spec, we instantiate a new `AllPuppies` react component.
            // `AllPuppies` comes from the react/components/AllPuppies.js file.
            // This component will receive some data in its `allPuppies` prop.
            // We store this component in a testable wrapper, `puppyWrapper`.

            let puppyData, puppyWrapper;
            beforeEach('Create <AllPuppies /> wrapper', () => {
                puppyData = [{
                    id: 5,
                    name: "Spot"
                }];
                // creates the testable React component
                puppyWrapper = shallow(<AllPuppies allPuppies={puppyData} />);
            });

            it('displays Puppy name as an h1', () => {
                expect(puppyWrapper.find('h1')).to.have.html('<h1>Spot</h1>');
            });

            it('is not hardcoded', () => {
                const aDifferentPuppy = [{
                    id: 5,
                    name: 'Fido'
                }];
                // we make a new component with this different data, and check its contents
                const differentPuppyWrapper = shallow(<AllPuppies allPuppies={aDifferentPuppy} />);
                expect(differentPuppyWrapper.find('h1')).to.have.html('<h1>Fido</h1>');

            });
        })

    })

    describe('Props from initial store state', () => {

        let allPuppies;
        let allPuppiesContainer;

        beforeEach('Create <AllPuppiesContainer />', () => {
            allPuppiesContainer = shallow(<AllPuppiesContainer />, {context: {store: actualStore}});
            allPuppies = allPuppiesContainer.node;
        });

        it('receives props from the global store having an empty all puppies array', () => {
            const props = allPuppies.props;
            expect(props.allPuppies).to.be.deep.equal([]);
        });
    })
    describe('action creator', () => {

        describe('create All Puppies Received action', () => {

            it('returns expected action description', () => {
                let puppyData = [{
                    id: 5,
                    name: 'Spot'
                }, {
                    id: 6,
                    name: 'Clifford'
                }];

                // Here we call the `getPuppies` action
                // with some puppies.
                const actionDescriptor = getPuppies(puppyData);

                // The action creator should have returned an action object
                // just like this object literal:
                expect(actionDescriptor).to.be.deep.equal({
                    type: 'GET_PUPPIES',
                    allPuppies: puppyData
                });

            });
            it('is not hardcoded', () => {
                let puppyData = createRandomNames(2)
                    // Here we call the `getPuppies` action
                // with some puppies.
                const actionDescriptor = getPuppies(puppyData);


                // The action creator should have returned an action object
                // just like this object literal:
                expect(actionDescriptor).to.be.deep.equal({
                    type: 'GET_PUPPIES',
                    allPuppies: puppyData
                });
            })
        });
    })
})