import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './util/serviceWorker';

import Container from '@material-ui/core/Container';

ReactDOM.render(
<Container  fixed>
    <h1>Pheel By Design</h1>
</Container>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
