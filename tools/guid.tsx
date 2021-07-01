import uniqid from 'uniqid';

export default (): string => {
	return `weather-${uniqid()}`;
};
