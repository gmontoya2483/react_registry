
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Root from './pages/Root.tsx';
import HomePage from './pages/home/HomePage.tsx';
import SearchPage from './pages/search/SearchPage.tsx';
import DetailsPage from './pages/details/DetailsPage.tsx';
import {searchLoader} from './pages/search/searchLoader';
import {detailsLoader} from './pages/details/detailsLoader.ts';
import {homeLoader} from './pages/home/homeLoader.ts';


const  router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                index: true,
                element: <HomePage />,
                loader: homeLoader
            },
            {
                element: <SearchPage/>,
                loader: searchLoader,
                path: '/search',

            },
            {
                path: "/packages/:name",
                element: <DetailsPage/>,
                loader: detailsLoader,
            },
        ]
    }
]);


function App() {
  return <RouterProvider router={router}/>
}

export default App
