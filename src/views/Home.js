import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import Home from '../containers/Home';

export default({ history }) => <DefaultLayout className="main-body"><Home history={history} /></DefaultLayout>;
