import ParentMemo from "./learnin-topic/hooks/memo/ParentMemo";
import UseAxios from "./learnin-topic/Axios/UseAxios";

const App = () => {
  const [data] = UseAxios(); //Data  fetched by axios [ordinary way].
  const [axiosData] = UseAxios(); //Data  fetched by axios [professional way].

  return (
    <>
      <div
        className={`h-[100vh] flex justify-center items-center bg-slate-900 text-white text-3xl `}
      >
        <ParentMemo />
      </div>
    </>
  );
};

export default App;
