import Buttons from "./learnin-topic/Projects/ToggleWIthContext/buttons/Buttons";
import ParentButton from "./learnin-topic/Projects/ToggleWIthContext/buttons/ParentButton";

const App = () => {
  return (
    <>
      <div
        className={`h-[100vh] flex justify-center items-center bg-slate-900 text-white text-3xl `}
      >
        <ParentButton>
          <Buttons />
        </ParentButton>
      </div>
    </>
  );
};

export default App;
