import { motion } from 'framer-motion';
import styled from 'styled-components';

export const BigButton = motion(styled.button`
	font-size: 2rem;
	text-align: center;
	color: ${(props) => props.theme.colors.primary};
	display: flex;
	align-items: center;
	padding: 1rem 2rem;
	border: 2px solid ${(props) => props.theme.colors.primary};
	border-radius: 10rem;
	gap: 1rem; // Space between the arrow and text
`);
