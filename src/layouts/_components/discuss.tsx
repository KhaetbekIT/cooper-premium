"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { createLeadApi } from "@/api/create-lead.api";
import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Field, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useOpen } from "@/hooks/use-open.hook";
import { type LeadSchemaType, leadSchema } from "@/schemas/lead.schema";

export const Discuss = ({ isMobile, isScrolled }: Props) => {
	const { onOpenChange, open } = useOpen();
	const [pending, startTransition] = useTransition();
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<LeadSchemaType>({
		resolver: zodResolver(leadSchema),
	});

	const onSubmit = (data: LeadSchemaType) => {
		startTransition(async () => {
			const res = await createLeadApi({ body: data });

			if (!res.status) {
				toast.error(res.message, { position: "top-center" });
				return;
			}

			toast.success(res.message, { position: "top-center" });
			reset();
			onOpenChange(false);
		});
	};

	return (
		<AlertDialog open={open} onOpenChange={onOpenChange}>
			<AlertDialogTrigger asChild>
				<Button
					variant={isScrolled || isMobile ? "outline" : "ghost"}
					size="lg"
					className="rounded-full text-lg"
				>
					Обсудить
				</Button>
			</AlertDialogTrigger>

			<AlertDialogContent className="border-0 bg-[#f1f3f3] p-6 rounded-lg sm:max-w-[666px] max-h-[90vh] overflow-y-auto">
				<Button
					variant="outline"
					className="absolute top-4 right-4 rounded-full bg-white h-[42px] w-[42px] flex items-center justify-center"
					onClick={() => onOpenChange(false)}
				>
					<X className="w-5 h-5" />
				</Button>

				<AlertDialogHeader className="max-w-4/5">
					<AlertDialogTitle className="font-semibold mb-10 text-[28px] leading-8 sm:text-[40px] sm:leading-[45px] text-left">
						Заполните форму и мы свяжемся с вами в ближайшее время
					</AlertDialogTitle>
				</AlertDialogHeader>

				<form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
					<Field>
						<Input
							inputSize="2xl"
							type="text"
							placeholder="Имя*"
							className="rounded-md w-full"
							{...register("full_name")}
						/>
						<FieldError errors={[errors.full_name]} />
					</Field>

					<Field>
						<Input
							inputSize="2xl"
							type="email"
							placeholder="Email*"
							className="rounded-md w-full"
							{...register("email")}
						/>
						<FieldError errors={[errors.email]} />
					</Field>

					<Field>
						<Input
							inputSize="2xl"
							type="tel"
							placeholder="Телефон*"
							className="rounded-md w-full"
							{...register("phone")}
						/>
						<FieldError errors={[errors.phone]} />
					</Field>

					<Field>
						<Input
							inputSize="2xl"
							type="text"
							placeholder="Город*"
							className="rounded-md w-full"
							{...register("city")}
						/>
						<FieldError errors={[errors.city]} />
					</Field>

					<Button
						variant="black"
						type="submit"
						size="lg"
						className="mt-6 w-full"
					>
						{pending ? "Отправка..." : "Отправить"}
					</Button>
				</form>
			</AlertDialogContent>
		</AlertDialog>
	);
};

interface Props {
	isScrolled: boolean;
	isMobile: boolean;
}
