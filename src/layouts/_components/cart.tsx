"use client";

import { ShoppingBasket } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { RoutersConfig } from "@/configs/routers.config";
import { Link } from "@/i18n/navigation";
import { useCartStore } from "@/stores/cart.store";

export const Cart = () => {
	const { items } = useCartStore();
	return (
		<Link
			href={RoutersConfig.client.cart}
			className="text-lg hover:text-red-01 relative"
		>
			<ShoppingBasket size={24} />

			<Badge
				hidden={items.length === 0}
				variant="red"
				className="absolute -top-1/2 -right-1 p-1 leading-none"
				size={"sm"}
			>
				{items.length}
			</Badge>
		</Link>
	);
};
