import type { ClassValue } from "clsx";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(...inputs));
};

export const formatPrice = (price: number) => {
    return price.toLocaleString("ru-RU", {
        style: "currency",
        currency: "UZS",
        minimumFractionDigits: 0
    });
};