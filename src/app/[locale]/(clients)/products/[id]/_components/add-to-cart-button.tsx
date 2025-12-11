"use client";

import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

export const AddToCartButton = ({ onClick }: Props) => {
	return (
		<Button
			onClick={onClick}
			variant={"black"}
			className="flex items-center gap-2  px-5 py-3 text-white font-medium  active:scale-95 transition"
		>
			<ShoppingCart className="size-5" />
			<span>Добавить в корзину</span>
		</Button>
	);
};

interface Props {
	onClick: () => void;
}
