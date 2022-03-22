import Link from 'next/link';

export default function Header() {
	return (
		<header className="fixed bg-dark-green z-20 w-full">
			<div className="container flex justify-between py-4">
				<h3 className="text-white text-3xl font-bold">
					Quickly<span className="text-primary-light">.</span>
				</h3>
				<div className="gap-3 items-center hidden lg:flex">
					<Link href="/">
						<a className="font-normal text-white">About us</a>
					</Link>
					<Link href="/">
						<a className="font-normal text-white">Products</a>
					</Link>
					<Link href="/">
						<a className="font-normal text-white">Features</a>
					</Link>
					<Link href="/">
						<a className="font-normal text-white">Our Blog</a>
					</Link>
					<Link href="/">
						<a className="font-normal text-white">Pricing</a>
					</Link>
				</div>
				<div className="flex gap-3 items-center">
					<Link href="/">
						<a className="bg-primary px-3 py-2 text-dark-green rounded-md text-sm">Sign up</a>
					</Link>
					<Link href="/">
						<a className="text-white text-sm">Login</a>
					</Link>
				</div>
			</div>
		</header>
	);
}
