import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Websites from "./pages/websites";
import { Suspense } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Websites from "./pages/websites";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<dib>Loding...</dib>}>
          <Header/>
          <Routes>
            <Route path="/" element={<Websites />} />
          </Routes>
          <Footer/>
        </Suspense>
      </BrowserRouter>
    </>
  );
}
