import React from "react";
import FooterLogo from "../../assets/logo.png";
import {
	FaFacebook,
	FaGoogle,
	FaInstagram,
	FaLinkedin,
	FaLocationArrow,
	FaMobileAlt,
	FaWhatsapp,
} from "react-icons/fa";
import NatureVid from "../../assets/video/footer.mp4";
import { Link } from "react-router-dom";

const FooterLinks = [
	{
		title: "Home",
		link: "/",
	},
	{
		title: "About",
		link: "/about",
	},
	{
		title: "Best Places",
		link: "/best-places",
	},
	{
		title: "Blogs",
		link: "/blogs",
	},
];

const Footer = () => {
	return (
		<>
			<div className=" dark:bg-gray-950 py-10 relative overflow-hidden">
				<video
					autoPlay
					loop
					muted
					className="absolute right-0 top-0 h-full overflow-hidden w-full object-cover z-[-1]"
				>
					<source src={NatureVid} type="video/mp4" />
				</video>
				<div className="container">
					<div className="grid md:grid-cols-3 py-5 bg-white/80 backdrop-blur-sm rounded-t-xl">
						<div className="py-8 px-4">
							<h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
								<img src={FooterLogo} alt="" className="max-h-[60px]" />
								{/* TravelloGo */}
							</h1>
							<br />
							<p className="text-sm">
								With Five Ocens Tour & Travels you can experience new travel and
								the best tourist destinations that we have to offer
							</p>
							<br />
							<div className="flex items-center gap-3 ">
								<FaLocationArrow />
								<p>
									Janki Mandir Rd, Ganga Nagar, Mahananda Para, Siliguri, West
									Bengal-(734001)
								</p>
							</div>
							<div className="flex items-center gap-3 mt-3">
								<FaMobileAlt />
								<p>+91 8250635300</p>
							</div>
							{/* social handles */}
							<div>
								<div className="flex items-center gap-3 mt-6">
									<a
										href="https://www.instagram.com/fiveoceanstourtravels?igsh=czF4eWdmcW5xNzdn"
										target="_blank"
									>
										<FaInstagram className="text-3xl" />
									</a>
									<a
										href="https://www.facebook.com/fiveoceanstourtravels"
										target="_blank"
									>
										<FaFacebook className="text-3xl" />
									</a>
									<a href="https://g.co/kgs/omAqufM" target="_blank">
										<FaGoogle className="text-3xl" />
									</a>
								</div>
							</div>
						</div>
						<div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
							<div>
								<div className="py-8 px-4">
									<h1 className="text-xl font-bold text-justify sm:text-left mb-3">
										Page Links
									</h1>
									<ul className="flex flex-col gap-3">
										{FooterLinks.map((link) => (
											<li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
												<Link
													to={link.link}
													onClick={() => window.scrollTo(0, 0)}
												>
													<span>&#11162;</span>
													<span>{link.title}</span>
												</Link>
											</li>
										))}
									</ul>
								</div>
							</div>
							<div>
								<div className="py-8 px-4">
									<h1 className="text-xl font-bold text-justify sm:text-left mb-3">
										Address
									</h1>
									<ul className="flex flex-col gap-3">
										<p className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
											<FaLocationArrow className="text-1xl" />
											Janki Mandir Rd, Ganga Nagar, Mahananda Para, Siliguri,
											West Bengal-(734001)
										</p>
										<a className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
											<FaMobileAlt className="text-1xl" />
											+91 8250635300
										</a>
									</ul>
								</div>
							</div>
							<div>
								<div className="py-8 px-4">
									<h1 className="text-xl font-bold text-justify sm:text-left mb-3">
										Socecal Media Link
									</h1>
									<div className="flex flex-col items-center gap-3 mt-6">
										<a
											className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200"
											href="https://www.instagram.com/fiveoceanstourtravels?igsh=czF4eWdmcW5xNzdn"
											target="_blank"
											rel="noopener noreferrer"
										>
											<FaInstagram className="text-3xl" />
										</a>
										<a
											className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200"
											href="https://www.facebook.com/fiveoceanstourtravels"
											target="_blank"
											rel="noopener noreferrer"
										>
											<FaFacebook className="text-3xl" />
										</a>
										<a
											className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200"
											href="https://g.co/kgs/omAqufM"
											target="_blank"
											rel="noopener noreferrer"
										>
											<FaGoogle className="text-3xl" />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className="text-center py-5 border-t-2 border-gray-300/50 bg-primary text-white">
							@copyright 2024 All rights reserved || Five Ocens Tour & Travels
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
