import * as z from "zod";

export const leadSchema = z.object({
	full_name: z.string().min(2, "Имя должно содержать минимум 2 символа"),
	email: z
		.string()
		.trim()
		.nonempty("Email обязателен")
		.regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Введите корректный email адрес"),
	phone: z
		.string()
		.trim()
		.regex(/^\+998[0-9]{9}$/, "Введите корректный номер телефона"),
	city: z
		.string()
		.trim()
		.nonempty("Город обязателен")
		.min(3, "Город должен содержать минимум 3 символа"),

	agree: z.boolean("Политика конфиденциальности обязательна"),
});

export type LeadSchemaType = z.infer<typeof leadSchema>;
