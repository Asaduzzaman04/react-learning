import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <>
      <main className="bg-[#0a0a0a] text-white">
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Navbar />
          <Outlet />
          <Footer />
        </QueryClientProvider>
      </main>
    </>
  );
};

export default App;

//queryClientprovider is use for wrapping main filesystem
