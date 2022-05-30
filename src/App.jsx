import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from "./components/footer/footer.component";
import Header from "./components/header/header.component";
import ArticlePage from "./pages/article-page/ArticlePage.component";
import HomePage from './pages/home-page/HomePage.component';

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <Routes>
        <Route path="" element={<HomePage />}></Route>
        <Route path=":id" element={<ArticlePage />}></Route >
      </Routes> */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
