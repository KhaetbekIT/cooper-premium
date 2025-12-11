import "@/css/globals.css";
import type { Metadata } from "next";
import type { LayoutProps } from "@/types/type";

export const metadata: Metadata = {
	title: {
		default: "Cooper Premium",
		template: "%s |Cooper Premium",
	},
};

const AppLayout = async ({ children }: LayoutProps) => children;

export default AppLayout;
