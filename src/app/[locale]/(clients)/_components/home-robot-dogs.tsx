"use client";

import UnitreeG1 from "@public/images/unitree-g1.jpg";
import Image from "next/image";
import { Container } from "@/components/widgets/container";
import { products } from "@/defaults/products.data";

export const HomeRobotDogs = () => {
	const unitrees = products.filter((item) => item.category === "unitree");

	return (
		<section data-slot="robot-dog" className="py-20">
			<Container>
				<h2 className="text-center text-3xl font-semibold mb-16">
					Роботы Unitree
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
					{unitrees.map((unitree) => (
						<div
							className="flex flex-col items-center text-center"
							key={unitree.id}
						>
							<Image
								src={unitree.images[0] || UnitreeG1}
								alt={unitree.name}
								className="w-auto h-80 object-contain mb-6"
							/>
							<h3 className="text-2xl font-semibold mb-4">{unitree.name}</h3>
							<p className="text-gray-600 max-w-md mb-8">
								{unitree.short_description}
							</p>
						</div>
					))}
				</div>
			</Container>
		</section>
	);
};
