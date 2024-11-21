import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/Laos.jpg";
import Img2 from "../../assets/places/Thailand.jpg";
import Img3 from "../../assets/places/Maldives.jpg";

const BlogsData = [
	{
		id: 1,
		image: Img1,
		title: "Top places to visit in Laos",
		description:
			"Laos, a hidden gem in Southeast Asia, offers travelers an enchanting escape filled with natural beauty, rich culture, and warm hospitality. Known as the 'Land of a Million Elephants,' Laos is a haven for those seeking serenity and adventure. Its lush landscapes feature misty mountains, emerald rice fields, and the mighty Mekong River, which flows through the heart of the country, providing endless opportunities for river cruises and breathtaking sunsets. The capital city, Vientiane, is a blend of modern charm and historic allure, home to iconic sites like Pha That Luang, a stunning golden stupa symbolizing Laos' Buddhist heritage. Luang Prabang, a UNESCO World Heritage site, captivates visitors with its French colonial architecture, vibrant night markets, and the spiritual beauty of Wat Xieng Thong temple. Here, the daily almsgiving ceremony, where saffron-robed monks collect offerings, is a profound cultural experience. Adventure seekers can explore the caves of Vang Vieng, kayak along the Nam Song River, or trek through lush jungles to discover hidden waterfalls. For those looking to unwind, the 4,000 Islands (Si Phan Don) region in the south offers tranquil riverside living, where you can spot rare Irrawaddy dolphins or relax in a hammock with stunning river views. Laos' cuisine is another highlight, with dishes like larb, sticky rice, and fresh papaya salad tantalizing taste buds, all complemented by the famous Beerlao. The country's warm-hearted locals, who greet you with a friendly 'Sabaidee,' enhance every journey, making Laos feel like a home away from home. Whether you’re exploring ancient temples, soaking in natural hot springs, or marveling at the vibrant festivals like Pi Mai (Lao New Year), Laos offers a timeless experience that balances tranquility and adventure. A trip to this charming country promises memories that will linger in your heart forever.",
		author: "Pawan Jha",
		date: "9, 22, 2024",
	},
	{
		id: 1,
		image: Img2,
		title: "Top places to visit in Thiland",
		description:
			"Thailand, known as the 'Land of Smiles,' is a vibrant and diverse destination that offers something for every type of traveler. Its bustling capital, Bangkok, is a mix of modern skyscrapers, ancient temples like Wat Arun and the Grand Palace, and lively street markets offering delicious Thai cuisine. The tropical beaches of Phuket, Krabi, and Koh Samui are perfect for relaxation and water sports, while the Phi Phi Islands and Similan Islands are paradises for diving and snorkeling enthusiasts. Northern Thailand, with cities like Chiang Mai and Chiang Rai, showcases a different side of the country, with serene mountains, unique hill tribes, and iconic sites such as the White Temple and Doi Suthep. Adventure lovers can trek through lush jungles, explore elephant sanctuaries, or experience the excitement of floating markets. Thailand’s festivals, like Songkran (Thai New Year) and Loy Krathong, bring its rich culture to life with vibrant celebrations. Its world-famous cuisine, from spicy curries to refreshing mango sticky rice, adds to the allure. With warm, welcoming people, rich cultural heritage, and breathtaking landscapes, Thailand is a magical destination that guarantees unforgettable memories.",
		author: "Pawan Jha",
		date: "10, 22, 2024",
	},
	{
		id: 1,
		image: Img3,
		title: "Top places to visit in Maldives",
		description:
			"The Maldives, a tropical paradise in the Indian Ocean, is a dream destination for travelers seeking luxury, adventure, and serenity. Famous for its crystal-clear turquoise waters, pristine white-sand beaches, and vibrant coral reefs, the Maldives is a haven for relaxation and water activities. Overwater villas perched above the lagoon offer unparalleled luxury and stunning views, creating a romantic atmosphere perfect for honeymooners. The vibrant marine life makes it one of the world's best destinations for snorkeling and diving, with opportunities to see manta rays, whale sharks, and colorful coral gardens. Beyond its natural beauty, the Maldives offers cultural experiences like visiting Malé, the bustling capital, with its historic mosques and local markets. Island-hopping allows travelers to explore the unique charm of local fishing villages, savor traditional Maldivian cuisine, and experience the warm hospitality of its people. Whether you’re indulging in a spa retreat, enjoying sunset cruises, or dining under the stars on a private beach, the Maldives promises an unforgettable getaway filled with beauty, tranquility, and adventure.",
		author: "Someone",
		date: "8, 22, 2022",
	},
];

const BlogsComp = () => {
	return (
		<>
			<div className="dark:bg-gray-900 dark:text-white py-10">
				<section data-aos="fade-up" className="container ">
					<h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
						Our Latest Blogs
					</h1>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
						{BlogsData.map((item) => (
							<BlogCard key={item.id} {...item} />
						))}
					</div>
				</section>
			</div>
		</>
	);
};

export default BlogsComp;
