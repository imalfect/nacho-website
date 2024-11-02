'use client';
import StyledComponentsRegistry from '@/app/registry';
import GlobalStyles from '@/styles/GlobalStyles';
import theme from '@/styles/theme';
import { ThemeProvider } from 'styled-components';

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<StyledComponentsRegistry>
			<GlobalStyles />
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</StyledComponentsRegistry>
	);
}
