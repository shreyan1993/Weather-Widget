import React, {useEffect, useState} from 'react';
import styles from './WeatherTile.styles';

interface WeatherTileProps {
	windStatus: string;
	tempUnit: string;
	title?: string
}

const WeatherTile: React.FC<WeatherTileProps> = ({title, windStatus, tempUnit}) => {

	const [apiData, setApiDate] = useState(undefined);
	const [status, setStatus] = useState('');
	const tempMetric = (tempUnit === 'celsius') ? 'metric' : 'imperial';
	let lat: number, lng: number;


// call the weather API
	useEffect(() => {
		if (navigator.geolocation) {
			setStatus('loading');
			navigator.geolocation.getCurrentPosition((position) => {
				lat = position.coords.latitude
				lng = position.coords.longitude

				fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=13ce01a858d7aa682de82049bf7803f7&units=${tempMetric}`)
					.then(response => response.json())
					// store in state
					.then(data => setApiDate(data))
					.then(() => setStatus('loaded'));
			});
		}
	}, [tempUnit]);

	const windDirection = (windDegree: number): string => {
		if (windDegree > 0 && windDegree < 90) {
			return 'NE';
		} else if (windDegree > 90 && windDegree < 180) {
			return 'NW';
		} else if (windDegree > 180 && windDegree < 270) {
			return 'SW';
		} else {
			return 'SE';
		}
	}

	return (
		<div css={styles}>
			<h1>{title}</h1>
			{(status === 'loading' ? <div aria-label="Please wait while data loads loading" className="spinner"/> : '')}
			{apiData && status === 'loaded' && (
				<div className="weather-wrapper">
					<img className="weather--icon" alt="weather-icon"
						 src={`http://openweathermap.org/img/wn/${apiData.weather[0].icon}@2x.png`}/>
					<div className="weather--info">
						<p className="city--name">{apiData.name}</p>
						<p className="city--temp">{Math.trunc(apiData.main.temp)}&deg;</p>
						{windStatus === 'wind-on' &&
						<span className="wind">
							<p>Wind</p>
							<p>{windDirection(apiData.wind.deg)}</p>
							<p>{apiData.wind.deg}{(tempMetric === 'metric') ? 'm/sec' : 'miles/h'}</p>
						</span>}
					</div>
				</div>
			)}
		</div>
	);
}

export default WeatherTile;
