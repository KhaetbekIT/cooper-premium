"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import { useTransition } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { createLeadApi } from "@/api/create-lead.api";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Container } from "@/components/widgets/container";
import { Group } from "@/components/widgets/groups";
import { type LeadSchemaType, leadSchema } from "@/schemas/lead.schema";
import { useCartStore } from "@/stores/cart.store";

export const CartContent = () => {
	const { items, removeItem, updateQuantity, clear } = useCartStore();
	const [pending, startTransition] = useTransition();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		control,
	} = useForm<LeadSchemaType>({
		resolver: zodResolver(leadSchema),
	});

	const onSubmit = (data: LeadSchemaType) => {
		startTransition(async () => {
			const res = await createLeadApi({ body: data, items, type: "cart" });
			if (!res.status) {
				toast.error(res.message, { position: "top-center" });
				return;
			}
			toast.success(res.message, { position: "top-center" });
			clear();
			reset();
		});
	};

	return (
		<section className="pt-44 pb-16">
			<Container>
				<div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
					<div className="xl:col-span-2 space-y-6">
						{items.length === 0 && (
							<div className="text-lg text-gray-500">Корзина пуста</div>
						)}

						{items.map((item) => (
							<div
								key={item.id}
								className="bg-white border border-gray-200 rounded-2xl px-8 py-6 shadow-sm hover:shadow-md transition-shadow"
							>
								<Group className="flex-row items-center justify-between gap-6 relative">
									<Group className="lg:flex-row gap-6 items-center">
										<div className="w-28 h-28 bg-gray-50 rounded-xl flex items-center justify-center">
											<Image
												src={item.image}
												alt={item.name}
												width={120}
												height={120}
												className="object-contain w-full h-full"
											/>
										</div>

										<div className="flex-1">
											<h3 className="text-xl font-semibold">{item.name}</h3>

											<div className="text-gray-500">
												{item.short_description}
											</div>
										</div>
									</Group>

									<div className="flex flex-col items-end gap-5 shrink-0">
										<button
											type="button"
											onClick={() => removeItem(item.id)}
											className="text-gray-400 hover:text-red-500 transition absolute top-2 right-2 lg:static lg:top-0 lg:right-0"
										>
											<X className="w-5 h-5" />
										</button>

										<Group className="flex-row items-center gap-3">
											<Button
												variant="outline"
												size="icon-sm"
												onClick={() =>
													updateQuantity(item.id, item.quantity - 1)
												}
											>
												<Minus />
											</Button>

											<div className="text-lg font-semibold">
												{item.quantity}
											</div>

											<Button
												variant="black"
												size="icon-sm"
												onClick={() =>
													updateQuantity(item.id, item.quantity + 1)
												}
											>
												<Plus />
											</Button>
										</Group>
									</div>
								</Group>
							</div>
						))}
					</div>

					<div className="xl:col-span-1">
						<form
							onSubmit={handleSubmit(onSubmit)}
							className="bg-white border border-gray-200 rounded-2xl px-8 py-10 shadow-sm space-y-7"
						>
							<div className="space-y-5">
								<Field>
									<Input placeholder="Имя*" {...register("full_name")} />
									<FieldError errors={[errors.full_name]} />
								</Field>

								<Field>
									<Input placeholder="Email*" {...register("email")} />
									<FieldError errors={[errors.email]} />
								</Field>

								<Field>
									<Input placeholder="Телефон*" {...register("phone")} />
									<FieldError errors={[errors.phone]} />
								</Field>

								<Field>
									<Input placeholder="Город*" {...register("city")} />
									<FieldError errors={[errors.city]} />
								</Field>
							</div>

							<Controller
								control={control}
								name="agree"
								render={({ field, fieldState: { error } }) => (
									<div className="flex flex-col gap-2 pt-2">
										<div className="flex items-center gap-3">
											<input
												type="checkbox"
												id="policy"
												checked={field.value}
												onChange={(e) => field.onChange(e.target.checked)}
												className="size-4"
											/>

											<FieldLabel
												htmlFor="policy"
												className="text-sm text-gray-600"
											>
												Я согласен с политикой конфиденциальности
											</FieldLabel>
										</div>

										{error && (
											<FieldError errors={[{ message: error.message }]} />
										)}
									</div>
								)}
							/>

							<Button
								type="submit"
								variant="black"
								size="lg"
								className="w-full h-12 rounded-lg text-base font-semibold"
							>
								{pending ? "Отправка..." : "Отправить"}
							</Button>
						</form>
					</div>
				</div>
			</Container>
		</section>
	);
};
