"use client";

import {
	CircleCheckIcon,
	InfoIcon,
	Loader2Icon,
	OctagonXIcon,
	TriangleAlertIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";

export const Toaster = ({ ...props }: ToasterProps) => {
	const { theme = "system" } = useTheme();

	return (
		<Sonner
			theme={theme as ToasterProps["theme"]}
			className="toaster"
			icons={{
				success: <CircleCheckIcon className="size-4 text-green-600" />,
				info: <InfoIcon className="size-4 text-blue-600" />,
				warning: <TriangleAlertIcon className="size-4 text-yellow-600" />,
				error: <OctagonXIcon className="size-4 text-red-600" />,
				loading: <Loader2Icon className="size-4 animate-spin text-gray-600" />,
			}}
			toastOptions={{
				className:
					"bg-white text-gray-800 border border-gray-200 shadow-md rounded-lg",
			}}
			{...props}
		/>
	);
};
