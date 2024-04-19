import React from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";


const App = () => {
  return (
    <>
        <Header />
          <main className="py-3 dark:bg-black">
            <Container>
              <Outlet />
            </Container>
          </main>
        <Footer />
        <ToastContainer />
    </>
  );
};

export default App;
