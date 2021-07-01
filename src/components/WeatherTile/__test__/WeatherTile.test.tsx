import React from 'react';
import renderer from 'react-test-renderer';
import serializer from 'jest-emotion';
import WeatherTile from '../WeatherTile';
//Helps Emotion serialise out the styles for the snapshot
expect.addSnapshotSerializer(serializer)

describe('WeatherTile', () => {
    test('WeatherTile renders', () => {
    const component = renderer.create(<WeatherTile title = 'mock title' tempUnit='celsius' windStatus='wind-on'/>);
    expect(component.toJSON()).toMatchSnapshot();
    });
});
