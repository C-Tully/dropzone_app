import React from 'react';

import './App.css';
import DragAndDrop from './components/DragAndDrop';
import Uploader from './components/Uploader';
import UploadBtn from './components/UploadBtn';

const placeholder = document.createElement("li");
placeholder.className = "placeholder";
  
function App() {

  return (
    <div>
      <UploadBtn />
      <Uploader  />
    </div>
  );

}



export default App;