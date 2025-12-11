export const RoutersConfig = {
	client: {
		home: "/",
		cart: "/cart",
		unitrees: "/unitrees",
		pudus: "/pudus",
		productsById: (id: string) => `/products/${id}`,
	},
	admin: {
		path: "/admin",
	},
} as const;

