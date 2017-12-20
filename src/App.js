import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {lightGreen500} from 'material-ui/styles/colors';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const muiTheme = getMuiTheme({
    appBar: {
        height: 50,
        color: lightGreen500
    },
});

const App = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
    <Header />
        <Main />
        <Footer />
    </MuiThemeProvider>
);

export default App;
