import React from 'react';
// import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import UsersListPage, { loadData } from './pages/UsersListPage';
import UsersListPage from './pages/UsersListPage';

// export default () => {
//     return (
//         <div>
//             <Route exact path="/" component={Home} />
//             <Route path="/users" component={UsersList} />
//         </div>
//     );
// };

export default [
    {
        ...HomePage,
        path: '/',
        // component: HomePage,
        exact: true
    },
    {
        ...UsersListPage,
        // loadData,
        path: '/users'
        // component: UsersListPage
    }
];