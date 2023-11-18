import { createGlobalStyle } from "styled-components";
import { device } from "@/utils/breakpoints";

const GlobalStyle = createGlobalStyle`
	:root {
		--color-primary-gradient: linear-gradient(90deg, #E5793B 1.54%, #FF4185 97.86%);
		--color-primary-theme-1: #DA7D4A;
		--color-text-primary-50: #F8FAFC;
		--color-text-primary-100: #F1F5F9;
		--color-text-primary-200: #E2E8F0;
		--color-text-primary-300: #CBD5E1;
		--color-text-primary-400: #94A3B8;
		--color-text-primary-500: #64748B;
		--color-text-primary-600: #475569;
		--color-text-primary-700: #334155;
		--color-text-primary-800: #1E293B;
		--color-text-primary-900: #0F172A;
		--color-text-secondary: ##94A3B8;
		--color-bg-theme-1: #FDFCFB;
		--color-bg-theme-2: #F7ECE1;
	}

	* {
		font-family: Inter;
		font-style: normal;
		box-sizing: border-box;
	}

	body {
		background-color: var(--color-bg-theme-1);
	}

	@font-face {
		font-family: 'Mantou Sans';
		src: url('/font/MantouSans-Regular.ttf');
	}

 /* http://meyerweb.com/eric/tools/css/reset/ 
		v2.0 | 20110126
		License: none (public domain)
	*/

	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	.modal-enter {
		opacity: 0;
		transform: translateY(100%);
		@media ${device.desktop} {
			transform: translateY(10%);
		}
	}
	.modal-enter-active {
		opacity: 1;
		transform: translateY(0);
		transition: opacity 300ms, transform 300ms;
	}
	.modal-exit {
		opacity: 1;
	}
	.modal-exit-active {
		opacity: 0;
		transform: translateY(100%);
		transition: opacity 300ms, transform 300ms;
		@media ${device.desktop} {
			transform: translateY(10%);
		}
	}
`;

const font = ({ color, size }) => `
	background: ${color};
	-webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
	${size && `font-size: ${size}`};
`;

const H1HeadingTitle = () => `
  font-size: 40px;
  line-height: 60px;
  letter-spacing: -0.8px;
	font-weight: 700;
`;

const H2HeadingTitle = () => `
  font-size: 32px;
  line-height: 48px;
	font-weight: 700;
	font-weight: 700;
`;

const H3HeadingTitle = () => `
  font-size: 28px;
  line-height: 42px;
	font-weight: 700;
`;

const H4HeadingTitle = () => `
  font-size: 24px;
  line-height: 36px;
	font-weight: 700;
`;

const H5HeadingTitle = () => `
  font-size: 20px;
  line-height: 30px;
	font-weight: 700;
`;

const H6HeadingTitle = () => `
  font-size: 16px;
  line-height: 24px;
	font-weight: 700;
`;

const BaseText = () => `
	font-size: 18px;
	font-weight: 400;
	line-height: 27px;
`;

const NormalText = () => `
	font-size: 16px;
	font-weight: 400;
	line-height: 24px;
`;

const SmallText = () => `
	font-size: 14px;
	font-weight: 400;
	line-height: 21px;
`;

const BigText = () => `
	font-family: Mantou Sans;
	font-size: 52px;
	font-weight: 400;
	line-height: normal;
`;

export {
  GlobalStyle,
  font,
  H1HeadingTitle,
  H2HeadingTitle,
  H3HeadingTitle,
  H4HeadingTitle,
  H5HeadingTitle,
  H6HeadingTitle,
  BaseText,
  NormalText,
  SmallText,
  BigText,
};
