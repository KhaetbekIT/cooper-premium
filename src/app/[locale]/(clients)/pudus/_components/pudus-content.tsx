import { Container } from "@/components/widgets/container";
import { pudus } from "@/defaults/pudu.data";
import { PudusItem } from "./pudus-item";

export const PudusContent = async () => {
	return (
		<section data-slot="pudus" className="pt-44 pb-10">
			<Container>
				<ul className="space-y-6">
					{pudus.map((pudu) => (
						<PudusItem key={pudu.id} pudu={pudu} />
					))}
				</ul>
			</Container>
		</section>
	);
};
