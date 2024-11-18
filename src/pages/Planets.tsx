import { Fragment } from 'react/jsx-runtime';
import { withQueryComponent } from '../hoc/WithQueryComponent';
import { defaultUseQueryOption, FetchKey, useFetchStarWars } from '../hooks/use-fetch-star-wars-api';

declare type PlanetsProps = {};

const PlanetsComponent: React.FC<PlanetsProps> = ({}: PlanetsProps): JSX.Element => {
	const { data: planets }: { data: any } = useFetchStarWars({
		fetchKey: FetchKey.PLANETS,
		options: defaultUseQueryOption,
	});

	return (
		<Fragment>
			<div>
				<h1>{planets.name}</h1>
			</div>
		</Fragment>
	);
};

const Planets = withQueryComponent(PlanetsComponent);

export { Planets };
