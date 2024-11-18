import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query';
import { useStarWarsProvider } from '../../shared/swapiContext';
import { StarWarsApi } from '../../api/swapi';

export enum FetchKey {
	PLANETS = 'Planets',
	FILMS = 'Films',
}

export const defaultUseQueryOption: UseQueryOptions = {
	staleTime: 5 * 60 * 5000,
	cacheTime: 0,
	retry: false,
	suspense: true,
};

type UseFetchStarWarsProps<T> = {
	fetchKey: FetchKey;
	options?: UseQueryOptions<T>;
};

export const useFetchStarWars = <T>({ fetchKey, options }: UseFetchStarWarsProps<T>): UseQueryResult<T> => {
	const starWarsApi: StarWarsApi = useStarWarsProvider();

	const fetchFunction = async (): Promise<T> => {
		switch (fetchKey) {
			case FetchKey.PLANETS: {
				const response = await starWarsApi.getPlanets(1);
				return response as T;
			}
			case FetchKey.FILMS: {
				const response = await starWarsApi.getFilms(1);
				return response as T;
			}
			default:
				throw new Error('Invalid fetch key');
		}
	};

	return useQuery<T>(fetchKey, fetchFunction, options);
};
