import { Container } from "@/components/widgets/container";
import { products } from "@/defaults/products.data";
import { UnitreesItem } from "./unitrees-item";

export const UnitreesContent = () => {
	const unitrees = products.filter((item) => item.category === "unitree");

	return (
		<section data-slot="unitrees" className="pt-44 pb-10">
			<Container>
				<ul className="space-y-6">
					{unitrees.map((unitree) => (
						<UnitreesItem key={unitree.id} unitreeData={unitree} />
					))}
				</ul>
			</Container>
		</section>
	);
};
