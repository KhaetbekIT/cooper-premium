"use client";

import { Search as SearchIcon, X } from "lucide-react";
import { useQueryStates } from "nuqs";
import { startTransition } from "react";
import { FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { RoutersConfig } from "@/configs/routers.config";
import { pudus } from "@/defaults/pudu.data";
import { unitrees } from "@/defaults/unitrees.data";
import { Link } from "@/i18n/navigation";
import { searchParamsParsers } from "@/lib/search-params.util";
import { cn } from "@/lib/utils";

export const Serach = () => {
	const [{ query }, setQuery] = useQueryStates(searchParamsParsers);

	const allProducts = [...pudus, ...unitrees].filter((item) =>
		item.name.toLowerCase().includes(query.toLowerCase()),
	);

	return (
		<div className="relative w-full max-w-sm">
			<FieldLabel className="relative block group">
				<Input
					value={query}
					placeholder="Поиск PUDU / Unitree"
					className={cn(
						"rounded-md bg-transparent pr-11",
						"w-0 h-0 opacity-0 pointer-events-none",
						"border border-gray-300 shadow-none",
						"transition-all duration-200 ease-out",
						"group-hover:border-gray-400",
						"focus:bg-white focus:border-gray-500 focus:w-full focus:h-11 focus:opacity-100 focus:pointer-events-auto",
						"focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-0",
						"active:bg-white active:h-11",
						query &&
							"w-full h-11 opacity-100 pointer-events-auto bg-white border-gray-500",
					)}
					onChange={(e) => {
						const value = e.target.value;
						setQuery({ query: value }, { startTransition });
					}}
				/>

				{query ? (
					<X
						size={18}
						className={cn(
							"absolute right-4 top-1/2 -translate-y-1/2",
							"text-black",
							"transition-colors duration-200",
							"group-focus-within:text-gray-400",
						)}
						onClick={() => setQuery({ query: "" }, { startTransition })}
					/>
				) : (
					<SearchIcon
						size={18}
						className={cn(
							"absolute right-4 top-1/2 -translate-y-1/2",
							"text-black",
							"transition-colors duration-200",
							"group-focus-within:text-gray-400",
						)}
					/>
				)}
			</FieldLabel>

			{query && (
				<div
					className={cn(
						"absolute z-50 mt-2 w-full overflow-hidden rounded-md bg-white",
						"border border-gray-200 shadow-xl",
						"animate-in fade-in zoom-in-95",
					)}
				>
					{allProducts.length > 0 ? (
						<ul className="max-h-72 overflow-y-auto py-1">
							{allProducts.map((item) => (
								<li key={item.id}>
									<Link
										href={RoutersConfig.client.productsById(item.id)}
										className={cn(
											"group block px-4 py-2 text-sm",
											"text-gray-800 transition-colors",
											"hover:bg-gray-100",
											"focus:bg-gray-100 focus:outline-none",
											"active:bg-gray-200",
										)}
									>
										<span className="font-medium group-hover:text-black">
											{item.name}
										</span>
										<p className="text-xs text-gray-500">
											{"short_description" in item
												? item.short_description
												: ""}
										</p>
									</Link>
								</li>
							))}
						</ul>
					) : (
						<div className="px-4 py-3 text-sm text-gray-500">
							Ничего не найдено
						</div>
					)}
				</div>
			)}
		</div>
	);
};
