import React, { useEffect, useState } from "react";
import "../App.css";
import Card from "../components/Card";
import CustomNavbar from "../components/NavBar";
import { getAllProducts } from "../interceptors/product.interceptor";

const HomePage = () => {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = ["Todos", "Hoteles", "Apartamentos", "Casas Rurales"];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        setList(data);
        setFilteredList(data);
      } catch (error) {
        console.error(error);
        setList(null);
        setFilteredList(null);
      }
    };

    fetchProducts();
  }, []);

  const filterByCategory = (category) => {
    setSelectedCategory(category);
    if (category === "Todos") {
      setFilteredList(list);
    } else {
      setFilteredList(list.filter(item => item.category === category));
    }
  };

  return (
    <>
      <CustomNavbar />
      <div className="container">
        <div className="px-4 mt-3">
          <h3 className="fs-1">Qué estás buscando?</h3>
          <p className="text-green">Explora diferentes tipos de alojamientos de tendencia en todo el mundo para escapadas inolvidables</p>
        </div>
        <div className="btn-group mb-4 ms-4" role="group" aria-label="Categorías de Alojamiento">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`btn btn-custom-green p-md-2 ${selectedCategory === category ? "active" : ""} btn-sm btn-md`}
              onClick={() => filterByCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        {filteredList != null ? (
          <div className="d-lg-flex flex-lg-wrap row">
            <div className="d-flex flex-nowrap overflow-auto scroll-container">
              {filteredList.map((producto) => (
                <div key={producto.id} className="col-12 col-md-6 col-lg-3 mb-4 flex-shrink-0">
                  <Card item={producto} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="px-4 mt-3">
            <h4 className="fs-3 text-center m-5">No hay productos disponibles</h4>
          </div>
        )}
      </div>
    </>
  );
}

export default HomePage;
