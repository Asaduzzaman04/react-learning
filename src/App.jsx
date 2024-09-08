import ClassOne from "./Components/ClassOne";
import React, { Component } from 'react';

class App extends Component {
  rander() {
  return (
    <>
      <div className="bg-gray-900 text-yellow-100 h-[100vh] flex justify-center items-center">
      <ClassOne locale="bn-BD" />
      </div>
    </>
  );
}
}

export default App;
