import { motion } from 'framer-motion';
import styled from 'styled-components';

const SectionTitle = motion(styled.h2`
	font-size: 4rem;
	@media (max-width: 768px) {
		font-size: 3rem;
	}
`);
const SectionSubtitle = motion(styled.p`
	font-size: 2rem;
	@media (max-width: 768px) {
		font-size: 1.5rem;
	}
`);

export { SectionSubtitle, SectionTitle };
