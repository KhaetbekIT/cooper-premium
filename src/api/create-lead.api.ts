import type { LeadSchemaType } from "@/schemas/lead.schema";

export const createLeadApi = async ({ body }: Params) => {
	try {
		const response = await fetch("https://api.it911.uz/leads/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				full_name: body.full_name,
				email: body.email,
				phone: body.phone,
				company_name: "Cooper AI",
				company_info: `Город: ${body.city} свяжитесь с клиентом для уточнения деталей.`,
			}),
		});

		if (!response.ok) {
			throw new Error("Failed to create lead");
		}

		return {
			status: response.ok,
			message: "Успешно создано",
		};
	} catch (error) {
		console.error(error);

		return {
			status: false,
			message: "Что-то пошло не так",
		};
	}
};

interface Params {
	body: LeadSchemaType;
}
