import { Container } from "@/components/widgets/container";
import { unitrees } from "@/defaults/unitrees.data";
import { UnitreesItem } from "./unitrees-item";

export const UnitreesContent = () => {
	return (
		<section data-slot="unitrees" className="pt-44 pb-10">
			<Container>
				<ul className="space-y-6">
					{unitrees.map((unitree) => (
						<UnitreesItem key={unitree.id} unitree={unitree} />
					))}
				</ul>
			</Container>
		</section>
	);
};
