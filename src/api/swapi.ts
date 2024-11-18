import axios from 'axios';

interface StarWarsApiResponse<T> {
	then(arg0: (x: any) => void): unknown;
	count: number;
	next: string | null;
	previous: string | null;
	result: T;
}

class StarWarsApi {
	private static instance: StarWarsApi | undefined;

	private constructor() {}

	public static getInstance(): StarWarsApi {
		if (!StarWarsApi.instance) {
			StarWarsApi.instance = new StarWarsApi();
		}
		return StarWarsApi.instance;
	}

	public async getPlanets(pageNumber: number = 1): Promise<StarWarsApiResponse<any>> {
		try {
			const response: any = await axios.get(`https://swapi.dev/api/planets/${pageNumber}`);
			return response.data;
		} catch (error) {
			throw new Error();
		}
	}

	public async getFilms(pageNumber: number = 1): Promise<StarWarsApiResponse<any>> {
		try {
			const response: any = await axios.get(`https://swapi.dev/api/films/${pageNumber}`);
			return response.data;
		} catch (error) {
			throw new Error();
		}
	}
}

export { StarWarsApi };
