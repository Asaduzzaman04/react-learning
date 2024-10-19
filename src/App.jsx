
import Parent from "./learnin-topic/ContextApi/Parent";
import ChildOne from './learnin-topic/ContextApi/ChildOne';

const App = () => {
  return (
    <>
      <div
        className={`h-[100vh] flex justify-center items-center bg-slate-900 text-white text-3xl `}
      >
      <Parent>
        <ChildOne/>
      </Parent>
      </div>
    </>
  );
};

export default App;
