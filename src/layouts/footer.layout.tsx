import type { ComponentProps } from "react";
import { RoutersConfig } from "@/configs/routers.config";
import { pudus } from "@/defaults/pudu.data";
import { unitrees } from "@/defaults/unitrees.data";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export const Footer = ({ className, ...props }: ComponentProps<"footer">) => {
	return (
		<footer className={cn("border-t bg-white mt-20", className)} {...props}>
			<div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
				<div className="space-y-3">
					<h3 className="text-lg font-semibold">Навигация</h3>
					<ul className="space-y-2 text-sm text-gray-700">
						<li>
							<Link
								href={RoutersConfig.client.home}
								className="hover:text-black transition"
							>
								Главная
							</Link>
						</li>
						<li>
							<Link href={"#!"} className="hover:text-black transition">
								О компании
							</Link>
						</li>
					</ul>
				</div>

				<div className="space-y-3">
					<h3 className="text-lg font-semibold">Продукты Unitree</h3>
					<ul className="space-y-2 text-sm text-gray-700">
						{unitrees.map((unitree) => (
							<li key={unitree.id}>
								<Link
									href={RoutersConfig.client.productsById(unitree.id)}
									className="hover:text-black transition"
								>
									{unitree.name}
								</Link>
							</li>
						))}
					</ul>
				</div>

				<div className="space-y-3">
					<h3 className="text-lg font-semibold">Продукты PUDU</h3>
					<ul className="space-y-2 text-sm text-gray-700">
						{pudus.map((pudu) => (
							<li key={pudu.id}>
								<Link
									href={RoutersConfig.client.productsById(pudu.id)}
									className="hover:text-black transition"
								>
									{pudu.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>

			<div className="border-t py-6 text-center text-sm text-gray-500">
				© {new Date().getFullYear()}. Все права защищены.
			</div>
		</footer>
	);
};
