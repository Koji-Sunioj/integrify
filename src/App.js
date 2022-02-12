import React from 'react';
import Webpages from './webpages';
import Navbar from './webpages/navbar';
function App() {
  return (
    <div className="container">
      <Navbar/>
      <Webpages />
    </div>
  );
}
export default App;