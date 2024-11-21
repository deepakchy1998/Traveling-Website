import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/Vietnam.jpg";
import Img2 from "../../assets/places/Bali.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/places/leh.jpg";
import Img5 from "../../assets/places/goa.jpg";
import Img6 from "../../assets/places/Kashmir.jpg";

const PlacesData = [
	{
		img: Img1,
		title: "West Bengal to Vietnam",
		location: "Hanoi",
		description:
			"Hanoi, the capital of Vietnam, is known for its centuries-old architecture and a rich culture with Southeast Asian, Chinese and French influences.",
		price: 90000,
		type: "Cultural Relax",
	},
	{
		img: Img2,
		title: "West Bengal to Indonesia",
		location: "Bali",
		description:
			"Bali is a stunning Indonesian island known for its beautiful beaches, vibrant culture, lush landscapes, temples, and vibrant nightlife.",
		price: 80000,
		type: "Sculpture, Painting, and Music",
	},
	{
		img: Img3,
		title: "West Bengal to Maldives",
		location: "Addu City",
		description:
			"Addu City is a city in Maldives that consists of the inhabited islands of Addu Atoll, the southernmost atoll of the archipelago.",
		price: 90000,
		type: "Adventurous",
	},
	{
		img: Img4,
		title: "West Bengal to Leh Ladakh(India)",
		location: "Leh Ladakh",
		description:
			"Leh Ladakh is a breathtaking destination known for its rugged mountains, serene monasteries, pristine lakes, adventurous treks, and unique culture.",
		price: 40000,
		type: "Adventurous treks",
	},
	{
		img: Img5,
		title: "West Bengal to Goa(India)",
		location: "Goa",
		description:
			"Goa is a vibrant tourist destination famous for its golden beaches, thrilling water sports, Portuguese heritage, nightlife, and delicious seafood.",
		price: 60000,
		type: " golden beaches, thrilling water sports",
	},
	{
		img: Img6,
		title: "West Bengal to Kashnir(India)",
		location: "Kashmir",
		description:
			"Kashmir, often called 'Paradise on Earth,' is renowned for its stunning valleys, snow-capped mountains, Dal Lake, and rich culture.",
		price: 65000,
		type: "snow-capped mountains, Dal Lake, ",
	},
];

const Places = ({ handleOrderPopup }) => {
	return (
		<>
			<div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
				<section data-aos="fade-up" className="container ">
					<h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
						Best Places to Visit
					</h1>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
						{PlacesData.map((item, index) => (
							<PlaceCard
								handleOrderPopup={handleOrderPopup}
								key={index}
								{...item}
							/>
						))}
					</div>
				</section>
			</div>
		</>
	);
};

export default Places;
