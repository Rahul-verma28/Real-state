import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Websites from "./pages/websites";
import Layout from "./components/Layout/Layout";
import Properties from "./pages/Properties/Properties";
import {QueryClient, QueryClientProvider} from "react-query"
import {ToastContainer} from "react-toastify";
import {ReactQueryDevtools} from "react-query/devtools";
import 'react-toastify/dist/ReactToastify.css';
import Property from "./pages/Property/Property";

export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<dib>Loding...</dib>}>
          <Routes>
            <Route path="/" element={<Layout />} >
              <Route path="/" element={<Websites />} />
              <Route path="/properties">
                  <Route index element={<Properties />} />
                  <Route path=":propertyId" element={<Property/>} />
                </Route>
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      <ToastContainer/>
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  );
}
