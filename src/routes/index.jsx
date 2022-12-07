import {lazy, Suspense} from "react";
import {
    BrowserRouter as Router,
    Navigate,
    useLocation,
    useRoutes,
    useSearchParams,
} from 'react-router-dom';
import LoadingTemplate from 'templates/LoadingTemplate';

const NewsPage = lazy(()=>import('pages/News'))
const TestPage = lazy(()=>import('pages/Test'))

function RootRouterWrap() {

    const routes = [
        {
            path: '/',
            element: <NewsPage/>
        },
        {
            path: '/test',
            element: <TestPage/>
        }
    ]

    return <>{useRoutes(routes)}</>;

}

export function RootRouter() {
    return (
        <Suspense fallback={<LoadingTemplate />}>
            <Router>
                <RootRouterWrap />
            </Router>
        </Suspense>
    );
}