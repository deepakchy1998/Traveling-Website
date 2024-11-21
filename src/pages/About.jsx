import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
		<>
			<div className="container pt-14">
				<div className="py-10">
					<h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
						About us
					</h1>
					<p>
						At Five Oceans Tour & Travels, we recognize that time is one of the
						most valuable resources for our customers, especially when it comes
						to travel. Our primary focus is to ensure that every aspect of your
						journey is not only comfortable but also hassle-free by providing
						on-time, efficient services. We know that travel can sometimes be
						unpredictable, with unexpected delays and complications, so we take
						it upon ourselves to eliminate these concerns for our clients.
						Whether it’s securing flight bookings, arranging accommodations,
						organizing transfers, or providing assistance during your travels,
						we are committed to offering timely solutions that help avoid
						unnecessary stress. Our dedicated team works diligently behind the
						scenes, ensuring that every step of your journey is planned and
						executed with precision and punctuality. From the moment you reach
						out to us, we prioritize your time, making sure that all
						arrangements are made well in advance and that any last-minute
						adjustments are handled swiftly.
					</p>
					<br />
					<p>
						We believe that a great travel experience is built on a foundation
						of trust, efficiency, and reliability. Our main goal is to make your
						travels as smooth as possible by handling all the logistics so you
						can focus on enjoying your adventure. Whether you are booking a
						vacation, a business trip, or a special getaway, we strive to ensure
						that everything runs according to plan. Our customer-first approach
						ensures that we are always available to assist with any changes or
						inquiries, and our team is always proactive, anticipating your needs
						before they even arise. We believe in being transparent and
						communicative throughout the entire process, ensuring that all
						details are clearly understood and executed on time. By offering
						timely, high-quality services, we ensure that your travel experience
						is seamless, and you can rest easy knowing that your time will be
						respected every step of the way. At Five Oceans Tour & Travels, we
						are committed to helping you create lasting memories while ensuring
						your journey is stress-free and perfectly timed.
					</p>
				</div>
			</div>
			<Location />
			<BlogsComp />
		</>
	);
};

export default About;
