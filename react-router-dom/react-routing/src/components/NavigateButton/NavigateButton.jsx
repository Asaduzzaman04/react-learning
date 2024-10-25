import { Link, useNavigate } from "react-router-dom";

const NavigateButton = () => {
  const naviGateButton = useNavigate(); // useNavigate remember the previous page and while call this hooks in click event it it  back to previous page
  return (
    <>
      <Link
        onClick={() => naviGateButton(-1)}
        className=" w-fit  rounded-lg bg-red-500 px-6 py-3 text-center text-base font-semibold text-white transition hover:bg-red-400 "
      >
        Go back to previous page
      </Link>
    </>
  );
};

export default NavigateButton;

const data = {
  name: "Hassan",
  age: 25,
  address: "Pakistan",
};
const handelData = () => {
  useNavigate("/about", { state: data });
  //useNavigate is a hook for navigate to other page by sending data in object form. I pass data in about page.
};
{
  /*
   *const location = useLocation();
   *const data = location.state;
   *we can get data in about page by useLocation hook. useLocation() is essential for accessing the data passed with useNavigate() because it allows you to retrieve the state object that contains the data sent from the previous component.
   */
}
