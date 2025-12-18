import { Container } from "@/components/widgets/container";
import { products } from "@/defaults/products.data";
import { AccessoriesItem } from "./accessories-item";

export const AccessoriesContent = async () => {
	const accessories = products.filter((item) => item.category === "accessory");

	return (
		<section data-slot="accessories" className="pt-44 pb-10">
			<Container>
				<ul className="space-y-6">
					{accessories.map((accessory) => (
						<AccessoriesItem key={accessory.id} accessoryData={accessory} />
					))}
				</ul>
			</Container>
		</section>
	);
};
