import Image from 'next/image';
import Link from 'next/link';

import Layout from '../components/Layout/Layout';

export default function Home() {
	return (
		<Layout>
			<div className="flex py-10 gap-5 flex-col lg:flex-row lg:items-center container">
				<div>
					<h5 className="font-bold text-dark-green mb-3">The new way to work online</h5>
					<h1 className="text-dark font-bold text-4xl mb-10 lg:text-5xl">
						Get the important <br /> work done{" "}
						<span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary 00 relative inline-block">
							<span class="relative text-white">faster.</span>
						</span>
					</h1>
					<p className="text-dark leading-7 mb-5">With Quickly, you can get more productive work done in far less time than ever before.</p>
					<div className="flex gap-3">
						<Link href="/">
							<a className="px-4 py-2 bg-dark-green text-white text-sm rounded-md">Sign up</a>
						</Link>
						<Link href="/">
							<a className="px-4 py-2 bg-white text-dark text-sm border rounded-md">Learn more</a>
						</Link>
					</div>
				</div>
				<div className="hidden lg:flex relative">
					<Image src="/img/banner.png" width={541} height={601} />
					<div className="absolute flex px-4 py-3 rounded-lg bg-white items-center shadow-md gap-4 -right-10 mt-16">
						<div className="rounded-full border-2 border-white w-[63px] h-[63px] relative overflow-hidden ring-4 ring-primary-light">
							<Image src="https://source.unsplash.com/100x100?person" layout="fill" />
						</div>
						<div>
							<h5 className="font-bold text-lg text-dark">New task assigned</h5>
							<p className="text-dark-green">Louise assigned you a project</p>
						</div>
					</div>
					<div className="absolute flex px-4 py-4 rounded-lg bg-white shadow-md gap-4 bottom-0 -left-10">
						<div className="rounded-full w-[63px] h-[63px] bg-primary-light" />
						<div>
							<h5 className="font-bold text-lg text-dark mb-3">Project Updated</h5>
							<div className="h-3 bg-border rounded-full mb-2 w-[250px] animate-pulse"></div>
							<div className="h-3 bg-border rounded-full w-[181px] mb-3 animate-pulse"></div>
							<div className="rounded-md bg-primary-light h-[30px] w-[80px]"></div>
						</div>
					</div>
				</div>
			</div>
			<h3 className="text-center text-lg mt-24 mb-6">
				We work with some of the world’s <span className="font-bold">leading</span> companies
			</h3>
			<div className="flex items-center justify-center gap-6 flex-col lg:flex-row">
				<img src="/img/sony.svg" alt="Sony" />
				<img src="/img/lv.svg" alt="luis voiton" />
				<img src="/img/slack.svg" alt="slack" />
				<img src="/img/fb.svg" alt="fb" />
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 container mt-24">
				<div>
					<h3 className="font-bold text-dark-green text-3xl mb-7">
						The source of truth for all of <br /> your product decisions
					</h3>
					<p className="text-dark mb-6">
						This goes further than what you expected, here you <br /> can communicate two really important product features with icons.
					</p>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
						<div>
							<img src="/img/question.svg" alt="Question" />
							<p className="font-bold text-dark-green my-3">Unbeatable support</p>
							<p className="text-dark">We have 140 support staff on call 24/7 to support your needs.</p>
						</div>
						<div>
							<img src="/img/code.svg" alt="Code" />
							<p className="font-bold text-dark-green my-3">Effortless integrations</p>
							<p className="text-dark">Integrate with over 500 popular applications with only a few clicks.</p>
						</div>
						<div>
							<img src="/img/3d.svg" alt="3d" />
							<p className="font-bold text-dark-green my-3">3D rotation features</p>
							<p className="text-dark">Flip it, completely around it’s amazing the power of three ds.</p>
						</div>
						<div>
							<img src="/img/android.svg" alt="Android" />
							<p className="font-bold text-dark-green my-3">Robot friends are here</p>
							<p className="text-dark">If you feel down you can listen to the Idles with a friendly robot</p>
						</div>
					</div>
				</div>
				<div className="relative hidden lg:inline-block">
					<Image src="/img/product.png" width={546} height={547} />
					<div className="absolute flex px-4 py-4 rounded-lg bg-dark-green shadow-md gap-4 right-0 top-5">
						<div className="rounded-full w-[35px] h-[35px] bg-primary" />
						<div>
							<h5 className="font-bold text-sm text-white mb-2">215 new clients</h5>
							<div className="h-2 bg-primary rounded-full mb-2 w-[200px] animate-pulse"></div>
							<div className="h-2 bg-primary rounded-full w-[110px] animate-pulse"></div>
						</div>
					</div>
					<div className="absolute flex px-4 py-4 rounded-lg bg-white shadow-md gap-4 bottom-0">
						<div className="rounded-full w-[35px] h-[35px] bg-primary" />
						<div>
							<h5 className="font-bold text-sm text-dark mb-2">215 new clients</h5>
							<div className="h-2 bg-border rounded-full mb-2 w-[200px] animate-pulse"></div>
							<div className="h-2 bg-border rounded-full w-[110px] animate-pulse"></div>
						</div>
					</div>
				</div>
			</div>
			<img src="/img/Divider.png" alt="Divider" className="w-full mt-10" />
			<div className="container bg-white py-12">
				<h3 className="font-bold  text-dark-green text-3xl text-center mb-10">How Quickly helps you get more done</h3>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
					<div className="text-center">
						<img src="/img/project-overview.svg" alt="Project Overview" className="object-cover w-full mb-3 mx-auto" />
						<h6 className="font-bold text-lg mb-2 text-dark-green">Quick Project Creation</h6>
						<p className="text-dark text-sm">Your new projects are simply a click away with our intuitive creation flow</p>
					</div>
					<div className="text-center">
						<img src="/img/project-updated.svg" alt="Project updated" className="object-cover w-full mb-3 mx-auto" />
						<h6 className="font-bold text-lg mb-2 text-dark-green">Quick Project Creation</h6>
						<p className="text-dark text-sm">Your new projects are simply a click away with our intuitive creation flow</p>
					</div>
					<div className="text-center">
						<img src="/img/advance-tracking.svg" alt="Advance Tracking" className="object-cover w-full mb-3 mx-auto" />
						<h6 className="font-bold text-lg mb-2 text-dark-green">Quick Project Creation</h6>
						<p className="text-dark text-sm">Your new projects are simply a click away with our intuitive creation flow</p>
					</div>
				</div>

				<h3 className="font-bold text-dark-green text-3xl mt-24 mb-3">What Quickly can do for you</h3>
				<p className="text-dark mb-10">We’re more than just anothe project management software.</p>
				<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
					<div>
						<img src="/img/time.svg" alt="Time" className="mb-3" />
						<p className="text-dark-green font-bold text-sm">Save time when designing</p>
						<p className="text-dark text-sm">Your new projects are simply a click away with our intuitive creation flow</p>
					</div>
					<div>
						<img src="/img/check.svg" alt="check" className="mb-3" />
						<p className="text-dark-green font-bold text-sm">Get updated on projects</p>
						<p className="text-dark text-sm">You receive notifications whenever a team member finishes a task</p>
					</div>
					<div>
						<img src="/img/web.svg" alt="check" className="mb-3" />
						<p className="text-dark-green font-bold text-sm">Works on the web</p>
						<p className="text-dark text-sm">Don’t download an application when you can just work in browser</p>
					</div>
					<div>
						<img src="/img/fingerprint.svg" alt="fingerprint" className="mb-3" />
						<p className="text-dark-green font-bold text-sm">Highly secure interface</p>
						<p className="text-dark text-sm">Use biometrics, 2FA and more to ensure your security in here</p>
					</div>
				</div>
			</div>
			<img src="/img/Divider.png" alt="Divider" className="w-full rotate-180" />
			<div className="container mt-10">
				<div className="flex items-center justify-between h-fit mb-6">
					<div>
						<h3 className="font-bold text-dark-green text-3xl mb-3">Our customers keep talking</h3>
						<p className="text-dark">Listen to what they say about our product offering right here</p>
					</div>
					<Link href="/">
						<a className="bg-dark-green px-4 py-2 text-sm text-white rounded-md">Find out more</a>
					</Link>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
					<div className="bg-white rounded-md px-5 py-4 flex flex-col justify-between">
						<div>
							<h4 className="text-dark-green text-4xl font-bold mb-1">"</h4>
							<p className="text-dark text-lg mb-10">
								I love the flexibility of the product, we’ve been able to integrate with all the other platforms we use in product.
							</p>
						</div>
						<div>
							<p className="font-bold text-dark text-sm">Tom Parsons</p>
							<p className="text-dark text-xs">VP of Product</p>
						</div>
					</div>
					<div className="bg-white rounded-md px-5 py-4 flex flex-col justify-between">
						<div>
							<h4 className="text-dark-green text-4xl font-bold mb-1">"</h4>
							<p className="text-dark text-lg mb-10">
								Thanks so much to the team at Quickly for building something truly fun to use, and excellently equipt
							</p>
						</div>
						<div>
							<p className="font-bold text-dark text-sm">Renata Salvatore</p>
							<p className="text-dark text-xs">VP of Product</p>
						</div>
					</div>
					<div className="bg-white rounded-md px-5 py-4 flex flex-col justify-between">
						<div>
							<h4 className="text-dark-green text-4xl font-bold mb-1">"</h4>
							<p className="text-dark text-lg mb-10">
								This is the first time that the entire team from design to management has been in love with a tool.
							</p>
						</div>
						<div>
							<p className="font-bold text-dark text-sm">Claudia Winkleman</p>
							<p className="text-dark text-xs">Product Manager</p>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-24 bg-white container py-12">
				<p className="font-bold text-center text-dark mb-3">Stop wasting time, start saving it</p>
				<h1 className="font-bold text-4xl text-dark mb-6 text-center max-w-xl mx-auto">
					Sign up for your free trial, with the world’s best product tool
				</h1>
				<Link href="/">
					<a className="bg-dark-green rounded-md text-white text-sm mx-auto px-4 py-3 block max-w-fit">Start your trial</a>
				</Link>
			</div>
		</Layout>
	);
}
