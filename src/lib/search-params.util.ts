import {
	createSearchParamsCache,
	createSerializer,
	parseAsString,
} from "nuqs/server";

// для клиентной части
export const searchParamsParsers = {
	query: parseAsString.withDefault("").withOptions({
		shallow: false,
		history: "replace",
		clearOnDefault: true,
	}),
};

export const serialize = createSerializer(searchParamsParsers);

// для серверной части
export const searchParamsCache = createSearchParamsCache(searchParamsParsers);
