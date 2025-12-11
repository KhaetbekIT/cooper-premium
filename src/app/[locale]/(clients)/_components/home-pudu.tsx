"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/widgets/container";

export const HomePuduCC1 = () => {
	return (
		<section data-slot="pudu-cc1" className="py-20">
			<Container>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
					<div>
						<h2 className="text-3xl font-semibold mb-4">PUDU CC1 Pro</h2>

						<p className="text-gray-600 mb-6">
							Автономный робот для уборки на базе ИИ. Опираясь на надёжную
							конструкцию CC1, модель CC1 Pro объединяет передовые системы
							восприятия и управления на базе искусственного интеллекта. Робот
							выполняет полный цикл уборки: обнаружение загрязнений, адаптивное
							управление интенсивностью чистки, оценка качества уборки в
							реальном времени и самоконтроль состояния компонентов. Это
							обеспечивает стандартизированную профессиональную уборку без
							участия человека.
						</p>

						<Button variant={"black"} className="px-6 py-2">
							Подробнее
						</Button>
					</div>

					<div className="w-full flex justify-center">
						<video
							src="/videos/4.mp4"
							autoPlay
							loop
							muted
							className="w-full h-auto object-contain rounded-lg"
						/>
					</div>
				</div>
			</Container>
		</section>
	);
};
