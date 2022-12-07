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
const SchedulePage = lazy(()=>import('pages/Schedule'))
const AccountPage = lazy(()=>import('pages/Account'))

function RootRouterWrap() {

    const routes = [
        {
            path: '/',
            element: <NewsPage/>
        },
        {
            path: '/test',
            element: <TestPage/>
        },
        {
            path: '/schedule',
            element: <SchedulePage/>
        },
        {
            path: '/account',
            element: <AccountPage/>
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