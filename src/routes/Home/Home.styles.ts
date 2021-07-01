import {css} from '@emotion/core';

export default css`
display: flex;
flex-direction: column-reverse;
width: 100%;
padding: 20px;
max-width: 800px;
background-color: #F5F5F5;
border: 1px solid #D2D2D2;
position: relative;

@media (min-width: 640px) {
	padding: 66px;
}

@media (min-width: 768px) {
	max-height: 385px;
	height: 100%;
	margin: 10px auto auto auto;
	flex-direction: row;
}

&:before {
	position: absolute;
	content: "";
	width: 100%;
	height: 4px;
	display: block;
	background: #356CCB;
	top: -10px;
	left: 0;
	margin-bottom: 10px;
}

.control--panel {
	position: relative;
	padding-top: 20px;

	@media (min-width: 768px) {
		width: 50%;
		padding-top: unset;
	}

	&:after {
		@media (min-width: 768px) {
			position: absolute;
			content: "";
			width: 1px;
			display: block;
			background: #D1D1D1;
			top: 36px;
			right: 0;
			height: 80%;
		}
	}
}
`;
