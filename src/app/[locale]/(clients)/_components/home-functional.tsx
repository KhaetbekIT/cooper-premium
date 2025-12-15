"use client";

import { BarChart2, FileText, Mic, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/widgets/container";
import { Link } from "@/i18n/navigation";

export const HomeFunctional = () => {
	return (
		<section data-slot="home-functional" className="py-20 bg-white">
			<Container>
				<div className="text-center mb-14">
					<span className="text-dark uppercase tracking-wide text-sm">
						Функционал
					</span>
					<h2 className="text-3xl font-semibold mt-2">Получайте больше</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-4 gap-16 text-center">
					<div className="space-y-4 px-4">
						<div className="flex justify-center">
							<FileText
								className="text-dark-gray"
								size={50}
								strokeWidth={1.5}
							/>
						</div>
						<h3 className="font-semibold text-lg">Создан для управления</h3>
						<p className="text-gray-600 text-sm">
							Согласно ставшей уже классической работе Филипа Котлера, рекламная
							площадка оптимизирует рейтинг.
						</p>
					</div>

					<div className="space-y-4 px-4">
						<div className="flex justify-center">
							<Mic className="text-dark-gray" size={50} strokeWidth={1.5} />
						</div>
						<h3 className="font-semibold text-lg">Голосовое управление</h3>
						<p className="text-gray-600 text-sm">
							Согласно ставшей уже классической работе Филипа Котлера, рекламная
							площадка оптимизирует рейтинг.
						</p>
					</div>

					<div className="space-y-4 px-4">
						<div className="flex justify-center">
							<Wallet className="text-dark-gray" size={50} strokeWidth={1.5} />
						</div>
						<h3 className="font-semibold text-lg">Контроль бюджета</h3>
						<p className="text-gray-600 text-sm">
							Согласно ставшей уже классической работе Филипа Котлера, рекламная
							площадка оптимизирует рейтинг.
						</p>
					</div>

					<div className="space-y-4 px-4">
						<div className="flex justify-center">
							<BarChart2
								className="text-dark-gray"
								size={50}
								strokeWidth={1.5}
							/>
						</div>
						<h3 className="font-semibold text-lg">Статистика и графики</h3>
						<p className="text-gray-600 text-sm">
							Согласно ставшей уже классической работе Филипа Котлера, рекламная
							площадка оптимизирует рейтинг.
						</p>
					</div>
				</div>

				<div className="text-center mt-12">
					<Link href="#!" scroll={false}>
						<Button size={"lg"} variant={"black"}>
							Узнать больше
						</Button>
					</Link>
				</div>
			</Container>
		</section>
	);
};
