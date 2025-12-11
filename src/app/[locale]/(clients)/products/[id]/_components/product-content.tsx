"use client";

import { useState } from "react";
import { Container } from "@/components/widgets/container";
import { pudus } from "@/defaults/pudu.data";
import { unitrees } from "@/defaults/unitrees.data";
import { AddToCartButton } from "./add-to-cart-button";
import { ProductCarousel } from "./product-carousel";
import { ProductQuantity } from "./product-quantity";

export const ProductContent = ({ productId }: Props) => {
	const allProducts = [...unitrees, ...pudus];
	const product = allProducts.find((item) => item.id === productId);

	const [quantity, setQuantity] = useState(1);

	if (!product) {
		return (
			<section className="pt-44 pb-10">
				<Container>Продукт не найден</Container>
			</section>
		);
	}

	return (
		<section data-slot="product-content" className="pt-44 pb-10">
			<Container>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
					{/* LEFT — CAROUSEL */}
					<div>
						<ProductCarousel images={product.images} />
					</div>

					{/* RIGHT — INFO */}
					<div className="space-y-6">
						<h1 className="text-3xl font-bold leading-tight">{product.name}</h1>

						{/* SHORT DESCRIPTION */}
						<div
							className="text-gray-700 text-lg leading-relaxed"
							// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
							dangerouslySetInnerHTML={{ __html: product.short_description }}
						/>

						{/* QUANTITY + ADD TO CART */}
						<div className="flex items-center gap-6 pt-2">
							<ProductQuantity value={quantity} onChange={setQuantity} />

							<AddToCartButton
								onClick={() =>
									console.log("Добавлено:", product.name, "x", quantity)
								}
							/>
						</div>
					</div>
				</div>

				{/* FULL DESCRIPTION */}
				<div
					className="prose max-w-none mt-14 prose-h2:text-2xl prose-h3:text-xl prose-p:text-gray-800 prose-ul:list-disc prose-table:border prose-th:border prose-td:border space-y-6"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
					dangerouslySetInnerHTML={{ __html: product.full_description }}
				/>
			</Container>
		</section>
	);
};

interface Props {
	productId: string;
}
