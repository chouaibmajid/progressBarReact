import "./App.css";
import React from "react";
import Loading from "./Components/Loading";
function App() {
  const [etat, setEtat] = React.useState(false);
  return (
    <div className="h-screen bg-gray-50">
      <div className="text-center">
        <button
          onClick={() => {setEtat(!etat)}}
          className="mx-auto bg-green-400 px-3 py-2 uppercase text-white font-bold hover:shadow-2xl hover:text-green-400 hover:bg-white transition duration-500 ease-in-out"
        >
          charcher la page
        </button>
      </div>
      {etat && <Loading />}
    </div>
  );
}

export default App;