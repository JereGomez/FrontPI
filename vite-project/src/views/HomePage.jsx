import React, { useEffect, useState } from "react";
import "../App.css";
import Card from "../components/Card";
import CustomNavbar from "../components/NavBar";
import { getAllProducts } from "../interceptors/product.interceptor";

const HomePage = () => {
  const [list, setList] = useState([]);
  const [foundProducts, setFoundProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(4);
  const [categories, setCategories] = useState(["Todos"]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        console.log(data)
        setList(data);
        
        const uniqueCategories = Array.from(new Set(data.flatMap(producto => producto.categorias.map(categoria => categoria.nombre))));
        setCategories(["Todos", ...uniqueCategories]);
      } catch (error) {
        console.error(error);
        setList([]);
      }
    };

    fetchProducts();
  }, []);

  const filterByCategory = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);

    // Aquí deberías aplicar el filtro y actualizar el estado `foundProducts`
    const filteredList = list.filter(item => category === "Todos" ? true : item.categorias.some(categoria => categoria.nombre === category));
    setFoundProducts(filteredList);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(foundProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = foundProducts.slice(startIndex, endIndex);

  return (
    <>
      <CustomNavbar setFoundProducts={setFoundProducts} />
      <div className="container">
        <div className="px-4 mt-3 mb-3">
          <h3 className="fs-1">Qué estás buscando?</h3>
          <div className="text-green">Explora diferentes tipos de alojamientos de tendencia en todo el mundo para escapadas inolvidables</div>
        </div>
        <div className="btn-group mb-4 ms-4" role="group" aria-label="Categorías de Alojamiento">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`btn btn-custom-green p-2 ${selectedCategory === category ? "active" : ""} btn-sm btn-md`}
              onClick={() => filterByCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        {currentProducts.length > 0 ? (
          <div className="d-lg-flex flex-lg-wrap row">
            <div className="d-flex flex-nowrap overflow-auto scroll-container">
              {currentProducts.map((producto) => (
                <div key={producto.id} className="col-12 col-md-6 col-lg-3 mb-4 flex-shrink-0 p-2">
                  <Card item={producto} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Si no hay productos encontrados, mostrar todos los productos disponibles
          <div className="d-lg-flex flex-lg-wrap row">
            {list.map((producto) => (
              <div key={producto.id} className="col-12 col-md-6 col-lg-3 mb-4 flex-shrink-0">
                <Card item={producto} />
              </div>
            ))}
          </div>
        )}
        <nav aria-label="Page navigation" className="">
          <ul className="pagination justify-content-center">
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index} className={`page-item ${index + 1 === currentPage ? "active" : ""}`}>
                <button className={`page-link ${index + 1 === currentPage ? "custom-green-page-link-active" : "custom-green-page-link"}`} onClick={() => paginate(index + 1)}>{index + 1}</button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default HomePage;
