import { createContext, useContext, ReactNode } from 'react';
import { StarWarsApi } from '../api/swapi';

declare type StarWarsProviderProps = {
	children: ReactNode;
};

const StarWarsApiContext = createContext<StarWarsApi | undefined>(undefined);

export const StarWarsProvider = ({ children }: StarWarsProviderProps) => {
	const starWarsApi: StarWarsApi = StarWarsApi.getInstance();
	return <StarWarsApiContext.Provider value={starWarsApi}>{children}</StarWarsApiContext.Provider>;
};

export const useStarWarsProvider = () => {
	const context = useContext(StarWarsApiContext);
	if (!context) {
		throw new Error('useStarWarsProvider must be used within a StarWarsProvider');
	}
	return context;
};
