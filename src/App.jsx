import Reusecomponents from "./Components/Reusecomponents";


const App = () => {
  return (
    <>
      <div className="bg-gray-900 text-yellow-100 h-[100vh] flex flex-col gap-6 justify-center items-center ">
    <Reusecomponents/>
    <Reusecomponents/>
    <Reusecomponents/>
      </div>
    </>
  );
};

export default App;
