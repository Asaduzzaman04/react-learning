// const ClassOne = ({ locale }) => {
//   return (
//     <>
//       <h1 className=" border border-[3px_#dfdfdf] heading text-3xl font-bold uppercase  ">
//         <span className="text">
//           hello, the date is == {new Date().toLocaleDateString(locale)}
//         </span>
//       </h1>
//     </>
//   );
// };

//react-class-components-syntex

import  { Component } from 'react';

class ClassOne extends Component {
  rander() {
    return (
    <>
      <h1 className=" border border-[3px_#dfdfdf] heading text-3xl font-bold uppercase  ">
        <span className="text">
          hello, the date is == {new Date().toLocaleDateString()}
        </span>
      </h1>
    </>
  );
  }
}
// export default ClassOne;
export default ClassOne;
