'use client';
import variables from '@/app/variables.module.scss';
import { createGlobalStyle, css } from 'styled-components';
const styles = css`
	body {
		background-color: ${variables.backgroundColor};
		color: ${variables.textColor};
		/*noinspection CssUnresolvedCustomProperty*/
		font-family: var(--font-lato), sans-serif;
		font-size: 16px;
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: var(--font-ubuntu), sans-serif;
	}

	// your global styles
`;

const GlobalStyles = createGlobalStyle`
  ${styles}
`;

export default GlobalStyles;
