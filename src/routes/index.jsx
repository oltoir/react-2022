import {lazy, Suspense} from "react";
import {
    BrowserRouter as Router,
    useRoutes,
} from 'react-router-dom';
import LoadingTemplate from 'templates/LoadingTemplate';
import NewsDetailPage from "../pages/NewsDetail";

const NewsPage = lazy(()=>import('pages/News'))
const TestPage = lazy(()=>import('pages/Test'))
const SchedulePage = lazy(()=>import('pages/Schedule'))
const AccountPage = lazy(()=>import('pages/Account'))

function RootRouterWrap() {

    const routes = [
        {
            path: '/news',
            element: <NewsPage/>
        },
        {
            path: '/news/:id',
            element: <NewsDetailPage/>
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
                <RootRouterWrap/>
            </Router>
        </Suspense>
    );
}