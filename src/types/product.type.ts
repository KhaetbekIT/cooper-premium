import type { StaticImageData } from "next/image";

export interface Product {
	id: string;
	name: string;
	short_description: string;
	images: (StaticImageData | string)[];
	full_description: string;
	category: Category;
}

type Category = "pudu" | "unitree" | "accessory";
