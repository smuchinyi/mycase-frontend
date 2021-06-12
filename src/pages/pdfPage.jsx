import React from 'react';



export const Pdf = () =>{
    return (
    <div className="App">

      <h4>All Pages</h4>
  <a href='http://www.africau.edu/images/default/sample.pdf' target="_blank" rel="noopener noreferrer" download>
   <button>
      <i className="fas fa-download"/>
      Download File
   </button>
</a>
      <hr />
    </div>
  );
}