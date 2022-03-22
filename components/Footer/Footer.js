import Link from 'next/link';
import React from 'react';

export default function Footer() {
	return (
		<footer className="bg-dark-green pt-8">
			<div className="grid grid-cols-1 lg:grid-cols-7 container gap-4 mb-10">
				<div className="lg:col-span-4">
					<h3 className="text-white text-3xl font-bold mb-6">
						Quickly<span className="text-primary-light">.</span>
					</h3>
					<p className="text-primary-light text-sm mb-4">32 - 44 Upper Rupert Street</p>
					<p className="text-primary-light text-sm mb-4">W12 8DY Kensington</p>
					<p className="text-primary-light text-sm mb-4">United Kingdom</p>
				</div>
				<div>
					<h6 className="font-bold text-lg mb-4 text-primary-light">Our Company</h6>
					<Link href="/">
						<a className="text-primary-light text-sm mb-4 w-full inline-block">Our Team</a>
					</Link>
					<Link href="/">
						<a className="text-primary-light text-sm mb-4 w-full inline-block">Company Vision</a>
					</Link>
					<Link href="/">
						<a className="text-primary-light text-sm mb-4 w-full inline-block">Our History</a>
					</Link>
					<Link href="/">
						<a className="text-primary-light text-sm mb-4 w-full inline-block">Investorys</a>
					</Link>
				</div>
				<div>
					<h6 className="font-bold text-lg mb-4 text-primary-light">Our Resources</h6>
					<Link href="/">
						<a className="text-primary-light text-sm mb-4 w-full inline-block">The Blog</a>
					</Link>
					<Link href="/">
						<a className="text-primary-light text-sm mb-4 w-full inline-block">Downloads</a>
					</Link>
					<Link href="/">
						<a className="text-primary-light text-sm mb-4 w-full inline-block">Change Log</a>
					</Link>
					<Link href="/">
						<a className="text-primary-light text-sm mb-4 w-full inline-block">Slack Channel</a>
					</Link>
				</div>
				<div>
					<h6 className="font-bold text-lg mb-4 text-primary-light">Our Product</h6>
					<Link href="/">
						<a className="text-primary-light text-sm mb-4 w-full inline-block">New Features</a>
					</Link>
					<Link href="/">
						<a className="text-primary-light text-sm mb-4 w-full inline-block">Roadmap</a>
					</Link>
					<Link href="/">
						<a className="text-primary-light text-sm mb-4 w-full inline-block">Product Demo</a>
					</Link>
					<Link href="/">
						<a className="text-primary-light text-sm mb-4 w-full inline-block">Pricing</a>
					</Link>
				</div>
			</div>
			<p className="py-2 border-t border-primary-light text-center text-primary-light text-sm">Copyright 2022 Quickly LTD</p>
		</footer>
	);
}
