import { css } from '@emotion/core';

export default css`
 {
	display: flex;
	flex-direction: column;
	font-family: sans-serif;

	.field--heading {
		padding-bottom: 17px;
		display: block;
		font-family: "Lato", sans-serif;
		color: #565656;
		font-size: 18px;
		line-height: 1.2;
	}

	input[type="text"] {
		width: 100%;
		height: 39px;
		padding: 10px;
		color: #969696;
		border: 1px solid #969696;
		border-radius: 4px;

		@media (min-width: 768px) {
			max-width: 285px;
		}
	}
}
`;
