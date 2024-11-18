import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import { Planets } from './pages/Planets';
import { StarWarsProvider } from './shared/swapiContext';
import { Films } from './pages/Films';

function App() {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<StarWarsProvider>
				<Planets
					loadingFallback={<div>Loading Planets...</div>}
					errorFallback={<div> Error Planets </div>}
				/>
				<Films
					loadingFallback={<div>Loading Films...</div>}
					errorFallback={<div>Error Films</div>}
				/>
			</StarWarsProvider>
		</QueryClientProvider>
	);
}

export default App;
