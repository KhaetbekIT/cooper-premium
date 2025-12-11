"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const ProductQuantity = ({ value, onChange, className }: Props) => {
	const [count, setCount] = useState(value ?? 1);

	const update = (newValue: number) => {
		const v = Math.max(1, newValue);
		setCount(v);
		onChange?.(v);
	};

	return (
		<div className={cn("flex items-center gap-3", className)}>
			<Button
				variant={"outline"}
				onClick={() => update(count - 1)}
				className="flex items-center justify-center rounded-md active:scale-95 transition"
			>
				<Minus className="size-4" />
			</Button>

			<div className="min-w-8 text-center text-lg font-medium">{count}</div>

			<Button
				variant={"secondary"}
				onClick={() => update(count + 1)}
				className="flex items-center justify-center rounded-md active:scale-95 transition"
			>
				<Plus className="size-4" />
			</Button>
		</div>
	);
};

interface Props {
	value?: number;
	onChange?: (value: number) => void;
	className?: string;
}
