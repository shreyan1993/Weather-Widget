import React, {useState} from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styles from './Home.styles';
import WeatherTile from "../../components/WeatherTile";
import {itemsTemp, itemsWind} from "../../utils/constants";
import RadioGroup from "../../components/RadioGroup";
import InputField from "../../components/InputField";

const Home: React.FC<RouteComponentProps> = () => {

	const [tempUnit, setTempUnit] = useState('celsius');
	const [windStatus, setWindStatus] = useState('wind-on');
	const [widgetTitle, setwidgetTitle] = useState('Title of the Widget');

	return (
	<main css={styles}>
		<div className="control--panel">
			<InputField title='Title' widgetTitle={widgetTitle} setwidgetTitle={setwidgetTitle} />
			<RadioGroup title='Temperature' items={itemsTemp} selectedItemId={tempUnit} setSelectedItemId={setTempUnit}/>
			<RadioGroup title='Wind' items={itemsWind} selectedItemId={windStatus} setSelectedItemId={setWindStatus}/>
		</div>
		<WeatherTile title = {widgetTitle} tempUnit={tempUnit} windStatus={windStatus}/>
	</main>
	)
};

export default Home;
