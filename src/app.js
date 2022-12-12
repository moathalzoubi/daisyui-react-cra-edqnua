import React from 'react';
import { Drawer } from './Drawer';
import { AppBar } from './Nav';

const App = (props) => {
  return (
    <div>
      <AppBar />
      <Drawer />
    </div>
  );
};
export default App;
