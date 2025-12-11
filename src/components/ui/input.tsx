"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { Eye, EyeOff } from "lucide-react";
import { type ComponentProps, useState } from "react";
import { cn } from "@/lib/utils";

export const inputVariants = cva(
	"w-full min-w-0 px-3 py-1 border outline-none transition-colors shadow-sm bg-white file:h-7 file:border-0 file:bg-gray-100 file:text-sm file:font-medium file:text-gray-700 placeholder:text-gray-400 selection:bg-blue-500 selection:text-white disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
	{
		variants: {
			variant: {
				default:
					"border-gray-300 focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-400",
				error:
					"border-red-500 aria-invalid:border-red-500 aria-invalid:ring-2 aria-invalid:ring-red-300",
				soft: "border-gray-200 bg-gray-50 focus-visible:border-blue-400",
			},
			inputSize: {
				default: "h-9 text-sm",
				sm: "h-8 text-sm",
				lg: "h-10 text-base",
				xl: "h-11 text-lg",
				"2xl": "h-12 text-xl",
			},
		},
		defaultVariants: {
			variant: "default",
			inputSize: "default",
		},
	},
);

export const Input = ({
	className,
	variant,
	inputSize,
	type,
	...props
}: ComponentProps<"input"> & VariantProps<typeof inputVariants>) => {
	const [inputType, setInputType] = useState(type);

	return (
		<div className={cn("w-fit", { relative: type === "password" })}>
			<input
				type={inputType}
				data-slot="input"
				className={cn(
					inputVariants({ variant, inputSize }),
					{ "pr-8": type === "password" },
					className,
				)}
				{...props}
			/>

			{type === "password" && (
				<button
					type="button"
					data-slot="toggle-password-visibility"
					onClick={() =>
						setInputType(inputType === "password" ? "text" : "password")
					}
					className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
				>
					{inputType === "password" ? <EyeOff /> : <Eye />}
				</button>
			)}
		</div>
	);
};
