import React from "react";

const Location = () => {
	return (
		<>
			<span id="location"></span>
			<section data-aos="fade-up" className="">
				<div className="container my-4">
					<h1 className="inline-block border-l-8 border-primary/50 py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl">
						Location to visit
					</h1>

					<div className="rounded-xl ">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14256.680089884625!2d88.4142334!3d26.7070148!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e441aefb21f601%3A0x41b42bc12e899b07!2sFIVE%20OCEANS%20TOUR%20%26%20TRAVELS!5e0!3m2!1sen!2sin!4v1732215129869!5m2!1sen!2sin"
							width="100%"
							height="360"
							allowfullscreen=""
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
							style={{ borderRadius: "20px" }}
						></iframe>
					</div>
				</div>
			</section>
		</>
	);
};

export default Location;
