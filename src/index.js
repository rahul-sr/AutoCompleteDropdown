import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import AutoComplete from './AutoComplete';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const data= [{id:1,name:'test1'},{id:2, name:'test2'}, 
  { id: 3, name: 'test3' }]

const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <h2>Start editing to see some magic happen {'\u2728'}</h2>
    <AutoComplete list={data} />
  </div>
);

render(<App />, document.getElementById('root'));
