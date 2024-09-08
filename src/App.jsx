function App() {
  return (
    <>
      <h1 className="heading text-3xl font-bold uppercase flex justify-center items-center">
        <span className="text">
          {" "}
          hello the time is == {new Date().toLocaleDateString()}{" "}
        </span>
      </h1>
    </>
  );
}

export default App;
