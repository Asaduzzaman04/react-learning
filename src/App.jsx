
import PropDes from './Components/PropDes';
const App = () => {
  const details = [{
    userName : 'asaduzzaman',
    userId : '0932',
    userDesicnation: 'Software Engineer'
  },
{
  userName : 'rohman uddin',
  userId : '0284',
  userDesicnation: 'cyber security engineer'
},
{
  userName : 'robin ahmed',
  userId : '0642',
  userDesicnation: 'UI/UX designer'
}]
  return (
    <>
      <div className="bg-gray-900 text-yellow-100 h-[100vh] flex flex-col gap-6 justify-center items-center ">
          <PropDes fullDetails={details[0]}/>
          <PropDes fullDetails={details[1]}/>
          <PropDes fullDetails={details[2]}/>
      </div>
    </>
  );
};

export default App;
