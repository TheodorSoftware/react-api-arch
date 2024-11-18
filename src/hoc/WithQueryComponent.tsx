import { Suspense, ReactNode } from 'react';
import ErrorBoundary from '../shared/errorBoundary';

interface WithQueryComponentProps {
	loadingFallback: ReactNode;
	errorFallback: ReactNode;
}

const withQueryComponent = <P extends object>(WrappedComponent: React.ComponentType<P>): React.FC<P & WithQueryComponentProps> => {
	return ({ loadingFallback, errorFallback, ...props }: WithQueryComponentProps): JSX.Element => {
		return (
			<Suspense fallback={loadingFallback}>
				<ErrorBoundary fallback={errorFallback}>
					<WrappedComponent {...(props as P)} />
				</ErrorBoundary>
			</Suspense>
		);
	};
};

export { withQueryComponent };
