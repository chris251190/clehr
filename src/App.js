import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => (
    <MuiThemeProvider>
        <Header />
        <Main />
        <Footer />
    </MuiThemeProvider>
);

export default App;
