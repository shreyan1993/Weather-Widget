import React from 'react';
import renderer from 'react-test-renderer';
import serializer from 'jest-emotion';
import RadioGroup from "../RadioGroup";
//Helps Emotion serialise out the styles for the snapshot
expect.addSnapshotSerializer(serializer)

describe('TemperatureGroup', () => {
    test('RadioGroup renders', () => {
    const component = renderer.create(<RadioGroup/>);
    expect(component.toJSON()).toMatchSnapshot();
    });
});
