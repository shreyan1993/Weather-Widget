import React from 'react';
import RadioGroup from "../RadioGroup";
import {itemsTemp} from "../../../utils/constants";

export default { title: 'TemperatureGroup'};

export const Primary = (): React.ReactElement => <RadioGroup title='Temperature' items={itemsTemp} selectedItemId='celsius' setSelectedItemId={()=>{}}/>;
