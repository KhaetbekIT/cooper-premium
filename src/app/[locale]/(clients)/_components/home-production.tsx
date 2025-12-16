import { Container } from "@/components/widgets/container";
import { Group } from "@/components/widgets/groups";

export const HomeProduction = () => {
	return (
		<section className="bg-[#2d2d2d] py-16">
			<Container>
				<Group className="gap-10 lg:flex-row lg:items-center">
					<div className="flex-1 space-y-6 text-white">
						<h2 className="text-3xl font-bold uppercase">
							Техническое производство
						</h2>

						<p className="text-sm uppercase text-gray-300">
							Современные производственные решения полного цикла
						</p>

						<p className="max-w-lg text-gray-400 leading-relaxed">
							Техническое производство компании ориентировано на выпуск
							высококачественной продукции с применением современного
							оборудования и проверенных инженерных решений. Все этапы — от
							проектирования до финальной сборки — выполняются с соблюдением
							строгих стандартов качества и контроля.
						</p>

						<div className="flex flex-wrap gap-4 pt-4">
							<button
								type="button"
								className="rounded-md bg-white px-5 py-2 text-sm font-medium text-black hover:bg-gray-200 transition"
							>
								Производственные мощности
							</button>

							<button
								type="button"
								className="rounded-md bg-red-600 px-5 py-2 text-sm font-medium text-white hover:bg-red-700 transition"
							>
								Технологии и процессы
							</button>
						</div>
					</div>

					<div className="w-full lg:w-130 xl:w-3xl">
						<div className="overflow-hidden rounded-lg">
							<video
								className="h-full w-full object-cover"
								src="/videos/6.mp4"
								autoPlay
								muted
								loop
								playsInline
							/>
						</div>
					</div>
				</Group>
			</Container>
		</section>
	);
};
