import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export default function Layout({ children }) {
	return (
		<div className="w-full font-plus-jakarta-sans bg-pale-gray">
			<Header />
			<div className="pt-16">{children}</div>
			<Footer />
		</div>
	);
}
