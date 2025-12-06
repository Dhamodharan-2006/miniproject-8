import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import Home from "./components/Home";
import SignupScreen from "./components/screens/SignupScreen";
import "./index.css";
import Footer from "./components/Footer";
import ProductDetails from "./components/screens/ProductDetails";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Container>
            <Routes>
              <Route path="/" element={<Navigate to="/Home" replace />} />

              <Route path="/Home" element={<Home />} />
              <Route path="/signup" element={<SignupScreen />} />
              <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}
