import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header"; // Путь к вашему Header
import HomePage from "./pages/Home/HomePage"; // Путь к вашему HomePage

const App: React.FC = () => {
  return (
    <Router>
      <Header /> {/* Хедер будет отображаться на всех страницах */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Главная страница */}
          {/* Другие маршруты */}
          <Route path="/services" element={<div>Услуги</div>} />
          <Route path="/products" element={<div>Продукция</div>} />
          <Route path="/technologies" element={<div>Технологии</div>} />
          <Route path="/blog" element={<div>Блог</div>} />
          <Route path="/contacts" element={<div>Контакты</div>} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;