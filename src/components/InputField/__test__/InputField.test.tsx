import React from 'react';
import renderer from 'react-test-renderer';
import serializer from 'jest-emotion';
import InputField from '../InputField';
//Helps Emotion serialise out the styles for the snapshot
expect.addSnapshotSerializer(serializer)

describe('InputField', () => {
    test('InputField renders', () => {
    const component = renderer.create(<InputField />);
    expect(component.toJSON()).toMatchSnapshot();
    });
});