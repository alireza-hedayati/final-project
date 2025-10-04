import Layout from "@/components/layout/Layout";
import UserProvider from "@/context/UserContext";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Layout>
          <Component {...pageProps} />
          <ToastContainer />
        </Layout>
      </UserProvider>
    </QueryClientProvider>
  );
}
