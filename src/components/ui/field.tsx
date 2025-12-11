"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentProps, type ReactNode, useMemo } from "react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Label } from "./label";

function FieldSet({ className, ...props }: ComponentProps<"fieldset">) {
	return (
		<fieldset
			data-slot="field-set"
			className={cn("flex flex-col gap-6", className)}
			{...props}
		/>
	);
}

function FieldLegend({
	className,
	variant = "legend",
	...props
}: ComponentProps<"legend"> & { variant?: "legend" | "label" }) {
	return (
		<legend
			data-slot="field-legend"
			data-variant={variant}
			className={cn(
				"mb-3 font-medium",
				"data-[variant=legend]:text-base",
				"data-[variant=label]:text-sm",
				className,
			)}
			{...props}
		/>
	);
}

function FieldGroup({ className, ...props }: ComponentProps<"div">) {
	return (
		<div
			data-slot="field-group"
			className={cn(
				"flex w-full flex-col gap-7 *:data-[slot=field-group]:gap-4",
				className,
			)}
			{...props}
		/>
	);
}

const fieldVariants = cva("group/field flex w-full gap-3", {
	variants: {
		orientation: {
			vertical: "flex-col *:w-full",
			horizontal: "flex-row items-center *:data-[slot=field-label]:flex-auto",
			responsive:
				"flex-col *:w-full @md:flex-row @md:items-center @md:*:w-auto @md:*:data-[slot=field-label]:flex-auto",
		},
	},
	defaultVariants: {
		orientation: "vertical",
	},
});

function Field({
	className,
	orientation,
	...props
}: ComponentProps<"div"> & VariantProps<typeof fieldVariants>) {
	return (
		// biome-ignore lint/a11y/useSemanticElements: <explanation>
		<div
			role="group"
			data-slot="field"
			data-orientation={orientation}
			className={cn(fieldVariants({ orientation }), className)}
			{...props}
		/>
	);
}

function FieldContent({ className, ...props }: ComponentProps<"div">) {
	return (
		<div
			data-slot="field-content"
			className={cn("flex flex-1 flex-col gap-1.5 leading-snug", className)}
			{...props}
		/>
	);
}

function FieldLabel({ className, ...props }: ComponentProps<typeof Label>) {
	return (
		<Label
			data-slot="field-label"
			className={cn("flex w-fit gap-2 leading-snug font-medium", className)}
			{...props}
		/>
	);
}

function FieldTitle({ className, ...props }: ComponentProps<"div">) {
	return (
		<div
			data-slot="field-title"
			className={cn(
				"flex w-fit items-center gap-2 text-sm font-medium",
				className,
			)}
			{...props}
		/>
	);
}

function FieldDescription({ className, ...props }: ComponentProps<"p">) {
	return (
		<p
			data-slot="field-description"
			className={cn(
				"text-sm text-gray-600 leading-normal font-normal",
				"[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-blue-600",
				className,
			)}
			{...props}
		/>
	);
}

function FieldSeparator({
	children,
	className,
	...props
}: ComponentProps<"div"> & { children?: ReactNode }) {
	return (
		<div
			data-slot="field-separator"
			data-content={!!children}
			className={cn("relative -my-2 h-5 text-sm", className)}
			{...props}
		>
			<Separator className="absolute inset-0 top-1/2" />
			{children && (
				<span
					data-slot="field-separator-content"
					className="relative mx-auto block w-fit bg-white text-gray-600 px-2"
				>
					{children}
				</span>
			)}
		</div>
	);
}

function FieldError({
	className,
	children,
	errors,
	...props
}: ComponentProps<"div"> & {
	errors?: Array<{ message?: string } | undefined>;
}) {
	const content = useMemo(() => {
		if (children) return children;
		if (!errors?.length) return null;

		const uniqueErrors = [
			...new Map(errors.map((e) => [e?.message, e])).values(),
		];

		if (uniqueErrors.length === 1) return uniqueErrors[0]?.message;

		return (
			<ul className="ml-4 flex list-disc flex-col gap-1">
				{uniqueErrors.map(
					(err, i) => err?.message && <li key={i.toString()}>{err.message}</li>,
				)}
			</ul>
		);
	}, [children, errors]);

	if (!content) return null;

	return (
		<div
			role="alert"
			data-slot="field-error"
			className={cn("text-red-600 text-sm font-normal", className)}
			{...props}
		>
			{content}
		</div>
	);
}

export {
	Field,
	FieldLabel,
	FieldDescription,
	FieldError,
	FieldGroup,
	FieldLegend,
	FieldSeparator,
	FieldSet,
	FieldContent,
	FieldTitle,
};
