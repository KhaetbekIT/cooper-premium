export const RoutersConfig = {
	client: {
		home: "/",
		cart: "/cart",
		unitrees: "/unitrees",
		pudus: "/pudus",
		productsById: (id: string) => `/products/${id}`,
		accessories: "/accessories",
	},
	admin: {
		path: "/admin",
	},
} as const;
