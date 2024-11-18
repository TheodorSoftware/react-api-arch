import { Fragment } from 'react/jsx-runtime';
import { defaultUseQueryOption, FetchKey, useFetchStarWars } from '../hooks/use-fetch-star-wars-api';
import { withQueryComponent } from '../hoc/WithQueryComponent';

declare type FilmsProps = {};

export const FilmsComponents: React.FC<FilmsProps> = ({}: FilmsProps): JSX.Element => {
	const { data: films }: { data: any } = useFetchStarWars({
		fetchKey: FetchKey.FILMS,
		options: defaultUseQueryOption,
	});
	return (
		<Fragment>
			<div>
				<h3> {films.title} </h3>
				<p> {films.opening_crawl}</p>
			</div>
		</Fragment>
	);
};

const Films = withQueryComponent(FilmsComponents);

export { Films };
