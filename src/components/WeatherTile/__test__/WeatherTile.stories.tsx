import React from 'react';
import WeatherTile from '../WeatherTile';

export default { title: 'WeatherTile'};

export const Primary = (): React.ReactElement => <WeatherTile title = 'mock title' tempUnit='celsius' windStatus='wind-on'/>;
