import {css} from '@emotion/core';

export default css`
	font-family: sans-serif;

	.field--label {
		padding-bottom: 17px;
		padding-top: 22px;
		margin: 0;
		font-family: "Lato", sans-serif;
		color: #565656;
		font-size: 18px;
		line-height: 1.2;
	}

	.field--wrapper {
		padding-right: 95px;

		&:last-of-type {
			padding-right: 0;
		}

		input[type="radio"] {
			margin-right: 17px;
			width: 19px;
			height: 19px;
			vertical-align: top;
			background-color: #FFF;
			background-repeat: no-repeat;
			background-position: center;
			background-size: contain;
			border: 1px solid rgba(0, 0, 0, 0.25);
			appearance: none;
			border-radius: 50%;
		}

		input[type="radio"]:checked {
			background-color: #3A76CB;
			border-color: #3A76CB;
			background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23FFF'/%3e%3c/svg%3e");
		}
	}
`;
