"use client";

import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

export const AddToCartButton = ({ onClick }: Props) => {
	return (
		<Button
			onClick={onClick}
			variant={"black"}
			className="px-5 py-3 text-white font-medium active:scale-95 transition"
		>
			<ShoppingCart className="size-5" />
			<span>В корзину</span>
		</Button>
	);
};

interface Props {
	onClick: () => void;
}
