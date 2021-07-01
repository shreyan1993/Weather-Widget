import {css} from '@emotion/core';
import Loader from 'assets/loader-icon.gif'



export default css`
 {
	font-family: sans-serif;
	position: relative;
	width: 100%;
	background: #FFFFFF;
	padding: 30px;
	border-radius: 4px;
	box-shadow: 5px 4px 14px 8px #E6E6E6;
	min-height: 250px;

	@media (min-width: 768px) {
		width: 50%;
		margin-left: 34px;
	}

	.spinner {
		height: 48px;
		transform: translate(0%, 20%);
		background-image: url(${Loader});
		background-repeat: no-repeat;
		background-position: center center;

		@media (min-width: 768px) {
			transform: translate(0%, 50%);
		}
	}

	h1 {
		font-size: 22px;
		line-height: 28px;
		word-break: break-word;
		margin-top: 0;
		color: #252525;
	}

	.weather-wrapper {
		display: flex;
		flex-direction: row;

		img {
			width: 141px;
			height: 141px;
			margin-left: -21px;
		}

		.city {
			&--name {
				color: #393939;
				padding-top: 17px;
				margin: 0;
			}

			&--temp {
				font-size: 50px;
				line-height: 1.4;
				margin: 0;
				font-weight: bolder;
				color: #252525;
			}
		}
	}

	.wind {
		display: flex;
		flex-direction: row;

		p {
			font-size: 12px;
			line-height: 1.2;
			margin-top: 0;
			margin-right: 5px;

			&:first-of-type {
				font-weight: bold;
			}

			&:last-of-type {
				margin-right: 0;
			}
		}
	}
}
`;
