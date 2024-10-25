import Footer from "./../Footer/Footer";
import Navbar from "./../Navbar/Navbar";
import Loader from "./../loader/Loader";
import { Outlet, useNavigation } from "react-router-dom";

const Layout = () => {
  const loader = useNavigation();

  if (loader.state === "loading") {
    return <Loader />; // it will show the loader when the state is loading. in child components.
  }
  return (
    <>
      <main className="w-full bg-slate-300 text-black">
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    </>
  );
};

export default Layout;

{
  /*useNavigation hook in react-router-dom allows you to access navigation-related information, specifically the current state of any navigation transition, such as idle, loading, or submitting. This can be helpful in parent components to control loading spinners or progress indicators based on the navigation state, especially when data fetching or form submissions are happening in child components. Regarding your question: yes, you can use useNavigation in a parent component. Even if the child components' data isn't fetched immediately or if they rely on lazy loading or other async data sources, useNavigation will still respond based on any route transition activity. It will track all navigations triggered in the React Router tree, so as long as a transition occurs, useNavigation will update the state accordingly.*/
}
