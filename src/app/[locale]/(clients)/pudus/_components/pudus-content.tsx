import { Container } from "@/components/widgets/container";
import { products } from "@/defaults/products.data";
import { PudusItem } from "./pudus-item";

export const PudusContent = async () => {
	const pudus = products.filter((item) => item.category === "pudu");

	return (
		<section data-slot="pudus" className="pt-44 pb-10">
			<Container>
				<ul className="space-y-6">
					{pudus.map((pudu) => (
						<PudusItem key={pudu.id} puduData={pudu} />
					))}
				</ul>
			</Container>
		</section>
	);
};
