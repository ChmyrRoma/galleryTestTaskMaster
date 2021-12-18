import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import BodyPageContainer from './components/Body/BodyPageContainer';
import PhotoInfoContainer from './components/Body/PhotoInfo/PhotoInfoContainer';

const App = () => (
    <BrowserRouter>
        <Header />
        <Route exact path='/'
            render={() => <BodyPageContainer />}
        />
        <Route path='/photoPage'
            render={() => <PhotoInfoContainer />}
        />
    </BrowserRouter>
);

export default App;
