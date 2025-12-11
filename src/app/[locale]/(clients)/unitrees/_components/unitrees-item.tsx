import Image from "next/image";
import { Group } from "@/components/widgets/groups";
import { RoutersConfig } from "@/configs/routers.config";
import type { UnitreeType } from "@/defaults/unitrees.data";
import { Link } from "@/i18n/navigation";

export const UnitreesItem = ({ unitree }: Props) => {
	return (
		<li
			data-slot="unitrees-item"
			className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
		>
			<Group className="gap-6 md:flex-row md:items-center md:justify-between">
				<div className="flex-1 flex items-center justify-center">
					{unitree.images[0] ? (
						<Image
							src={unitree.images[0]}
							alt={unitree.name}
							width={320}
							height={220}
							className="h-auto w-full max-w-[320px] rounded-md object-cover"
						/>
					) : (
						<div className="flex h-[200px] w-full max-w-[320px] items-center justify-center rounded-md bg-gray-100 text-gray-400">
							Нет изображения
						</div>
					)}
				</div>

				<div className="flex-1 space-y-4 md:pl-6">
					<h3 className="text-2xl font-semibold text-gray-900">
						{unitree.name}
					</h3>

					<div
						className="text-gray-700 leading-relaxed"
						// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
						dangerouslySetInnerHTML={{ __html: unitree.short_description }}
					/>

					<Link
						href={RoutersConfig.client.productsById(unitree.id)}
						className="inline-block text-red-600 font-medium hover:underline"
					>
						Подробнее →
					</Link>
				</div>
			</Group>
		</li>
	);
};

interface Props {
	unitree: UnitreeType;
}
