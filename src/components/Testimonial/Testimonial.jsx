import React from "react";
import Slider from "react-slick";

const testimonialData = [
	{
		id: 1,
		name: "Ghanshyam",
		text: "Five Oceans Tour & Travels planned our trip perfectly! From flights to hotels, everything was seamless. Their service made our journey so comfortable and enjoyable. Highly recommended!",
		img: "https://picsum.photos/101/101",
	},
	{
		id: 1,
		name: "Dhananjay",
		text: "My experience with Five Oceans Tour & Travels was amazing. They handled every detail, and the food and accommodations were excellent. A truly stress-free and memorable vacation!",
		img: "https://picsum.photos/102/102",
	},
	{
		id: 1,
		name: "Rahul",
		text: "Traveling with Five Oceans Tour & Travels was the best decision! Their friendly service and well-organized plans made our trip hassle-free and enjoyable. I’ll definitely book again!",
		img: "https://picsum.photos/103/103",
	},
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
		<>
			<div data-aos="fade-up" data-aos-duration="300" className="py-10">
				<div className="container">
					{/* Header section */}
					<div className="text-center mb-20 max-w-[400px] mx-auto">
						<p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
							Testimonial
						</p>
						<h1 className="text-3xl font-bold">Testimonial</h1>
						<p className="text-xs text-gray-400">
							{" "}
							Five Oceans Tour & Travels made our vacation unforgettable!
							Perfect planning, great service, and amazing experiences. Highly
							recommend them for stress-free and memorable trips!
						</p>
					</div>
					{/* testimonial section */}
					<div
						data-aos="zoom-in"
						data-aos-duration="300"
						className="grid grid-cols-1 max-w-[800px] mx-auto gap-6"
					>
						<Slider {...settings}>
							{testimonialData.map(({ id, name, text, img }) => {
								return (
									<div key={id} className="my-6">
										<div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
											<img
												src={img}
												alt=""
												className="rounded-full block mx-auto"
											/>
											<h1 className="text-xl font-bold">{name}</h1>
											<p className="text-gray-500 text-sm">{text}</p>
											<p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
												,,
											</p>
										</div>
									</div>
								);
							})}
						</Slider>
					</div>
				</div>
			</div>
		</>
	);
};

export default Testimonial;
