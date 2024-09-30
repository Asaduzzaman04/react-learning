import Data from "./Data";
import { Named } from "./Named";
import {ComdImpExp, NamedExport} from './ComdImpExp';

const Rander = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-5 capitalize">
        <p>01</p>
        <Data />
        <p>02</p>
        <Named />
        <p>03</p>
        <ComdImpExp/>
        <NamedExport/>
      </div>
    </>
  );
};

export default Rander;
