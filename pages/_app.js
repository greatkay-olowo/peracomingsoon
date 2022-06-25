import '../styles/globals.css';
import '../styles/main.css';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<NextNProgress
				color='#4F46E5'
				height={6}
				showOnShallow={true}
				options={{ easing: 'ease', speed: 500 }}
			/>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
