"use client";

import { useState } from "react";
import { Container } from "@/components/widgets/container";
import { Group } from "@/components/widgets/groups";
import { products } from "@/defaults/products.data";
import { useCartStore } from "@/stores/cart.store";
import { AddToCartButton } from "./add-to-cart-button";
import { ProductCarousel } from "./product-carousel";
import { ProductQuantity } from "./product-quantity";

export const ProductContent = ({ productId }: Props) => {
	const product = products.find((item) => item.id === productId);
	const [quantity, setQuantity] = useState(1);
	const addItem = useCartStore((s) => s.addItem);

	if (!product) {
		return (
			<section className="pt-44 pb-10">
				<Container>Продукт не найден</Container>
			</section>
		);
	}

	return (
		<section className="pt-44 pb-10">
			<Container>
				<div className="space-y-12 overflow-x-auto">
					<h2 className="text-3xl font-bold">{product.name}</h2>

					<Group className="gap-6 xl:flex-row xl:items-center">
						<ProductCarousel images={product.images} />

						<Group className="flex-row justify-center items-center pt-4">
							<ProductQuantity value={quantity} onChange={setQuantity} />

							<AddToCartButton
								onClick={() =>
									addItem({
										...product,
										quantity,
										image: product.images[0] || "",
									})
								}
							/>
						</Group>
					</Group>

					<div
						className="text-lg text-gray-700 leading-relaxed"
						// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
						dangerouslySetInnerHTML={{ __html: product.short_description }}
					/>

					<div
						className="prose max-w-none space-y-5 prose-h2:text-2xl prose-h3:text-xl prose-p:text-gray-800 prose-ul:list-disc prose-table:overflow-x-auto prose-table:border prose-table:border-gray-200 prose-td:border prose-td:border-gray-200 prose-td:p-3 prose-th:p-3"
						// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
						dangerouslySetInnerHTML={{ __html: product.full_description }}
					/>
				</div>
			</Container>
		</section>
	);
};

interface Props {
	productId: string;
}
