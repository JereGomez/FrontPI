import React, { useState, useEffect } from 'react';
import { getAllProducts, createProduct, editProduct, deleteProduct } from '../interceptors/product.interceptor';

const AdminTable = () => {
    const [products, setProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editingProductId, setEditingProductId] = useState(null);
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [capacidad, setCapacidad] = useState(0);
    const [precioNoche, setPrecioNoche] = useState(0.0);
    const [categorias, setCategorias] = useState([]);
    const [imagenes, setImagenes] = useState([{ id: null, nombre: '', rutaDeArchivo: '' }]);

    const handleCloseModal = () => {
        setShowModal(false);
        setEditingProductId(null);
        setNombre('');
        setDescripcion('');
        setCapacidad(0);
        setPrecioNoche(0.0);
        setCategorias([]);
        setImagenes([{ id: null, nombre: '', rutaDeArchivo: '' }]);
    };

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleSaveProduct = async () => {
        try {
            if (editingProductId) {
                await handleEditProduct(editingProductId);
            } else {
                await handleCreateProduct();
            }
        } catch (error) {
            console.error("Ocurrió un error al guardar el producto:", error);
        }
    };

    const handleCreateProduct = async () => {
        try {
            const newProduct = {
                nombre,
                descripcion,
                capacidad,
                precioNoche,
                categorias,
                imagenes
            };
            await createProduct(newProduct);
            const productList = await getAllProducts();
            setProducts(productList);
            handleCloseModal();
        } catch (error) {
            console.error("Ocurrió un error al crear el producto:", error);
        }
    };

    const handleEditProduct = async (productId) => {
        try {
            const updatedProduct = {
                id: productId,
                nombre,
                descripcion,
                capacidad,
                precioNoche,
                categorias,
                imagenes: imagenes.map(imagen => ({
                    id: imagen.id,
                    nombre: imagen.nombre,
                    rutaDeArchivo: imagen.rutaDeArchivo
                }))
            };
            await editProduct(productId, updatedProduct);
            const productList = await getAllProducts();
            setProducts(productList);
            handleCloseModal();
        } catch (error) {
            console.error("Ocurrió un error al editar el producto:", error);
        }
    };

    const handleDeleteProduct = async (productId) => {
        try {
            const confirmDelete = window.confirm("¿Estás seguro de que quieres eliminar este producto?");
            if (confirmDelete) {
                await deleteProduct(productId);
                const productList = await getAllProducts();
                setProducts(productList);
            } else {
                console.log("Eliminación cancelada.");
            }
        } catch (error) {
            console.error("Ocurrió un error al eliminar el producto:", error);
        }
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productList = await getAllProducts();
                setProducts(productList);
            } catch (error) {
                console.error("Ocurrió un error inesperado al traer los productos:", error);
                setProducts(null);
            }
        };
        fetchProducts();
    }, []);

    const handleImageChange = (index, field, value) => {
        const updatedImages = [...imagenes];
        updatedImages[index] = { ...updatedImages[index], [field]: value };
        setImagenes(updatedImages);
    };

    const handleAddImage = () => {
        setImagenes([...imagenes, { id: null, nombre: '', rutaDeArchivo: '' }]);
    };

    const handleRemoveImage = (index) => {
        const updatedImages = imagenes.filter((_, i) => i !== index);
        setImagenes(updatedImages);
    };

    return (
        <div className='d-none d-lg-block'>
            <div className="text-center d-flex align-items-center justify-content-left">
                <p className='fw-semibold me-2 mt-3'><i className="bi bi-filter"></i> Filtros</p>
                <button type="button" className="btn btn-custom-green" onClick={handleShowModal}>+ Agregar producto</button>
            </div>
            {products === null ? (
                <div className="px-4 mt-3">
                    <h4 className="fs-3 text-center m-5">No se pudieron cargar los productos. Inténtalo de nuevo más tarde.</h4>
                </div>
            ) : (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Capacidad</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products && products.map(product => (
                            <tr key={product.id}>
                                <th scope="row">{product.id}</th>
                                <td>{product.nombre}</td>
                                <td>{product.descripcion}</td>
                                <td>{product.capacidad} personas</td>
                                <td>${product.precioNoche}</td>
                                <td>
                                    <button type="button" className="btn btn-danger me-2" onClick={() => handleDeleteProduct(product.id)}><i className="bi bi-trash3"></i></button>
                                    <button type="button" className="btn btn-custom-green" onClick={() => {
                                        setEditingProductId(product.id);
                                        setNombre(product.nombre);
                                        setDescripcion(product.descripcion);
                                        setCapacidad(product.capacidad);
                                        setPrecioNoche(product.precioNoche);
                                        setCategorias(product.categorias);
                                        setImagenes(product.imagenes.map(imagen => ({
                                            id: imagen.id,
                                            nombre: imagen.nombre,
                                            rutaDeArchivo: imagen.rutaDeArchivo
                                        })));
                                        handleShowModal();
                                    }}><i className="bi bi-pen"></i></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {showModal && (
                <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{editingProductId ? 'Editar Producto' : 'Agregar Producto'}</h5>
                                <button type="button" className="close" onClick={handleCloseModal}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="nombre">Nombre</label>
                                        <input type="text" className="form-control" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="descripcion">Descripción</label>
                                        <textarea className="form-control" id="descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="capacidad">Capacidad</label>
                                        <input type="number" className="form-control" id="capacidad" value={capacidad} onChange={(e) => setCapacidad(parseInt(e.target.value))} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="precioNoche">Precio por Noche</label>
                                        <input type="number" className="form-control" id="precioNoche" value={precioNoche} onChange={(e) => setPrecioNoche(parseFloat(e.target.value))} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="categorias">Categorías</label>
                                        <input type="text" className="form-control" id="categorias" value={categorias} onChange={(e) => setCategorias(e.target.value.split(','))} />
                                    </div>
                                    <div className="form-group">
                                        <label>Imágenes</label>
                                        {imagenes.map((imagen, index) => (
                                            <div key={index} className="d-flex mb-2">
                                                <input
                                                    type="text"
                                                    className="form-control me-2"
                                                    placeholder="Nombre"
                                                    value={imagen.nombre}
                                                    onChange={(e) => handleImageChange(index, 'nombre', e.target.value)}
                                                />
                                                <input
                                                    type="text"
                                                    className="form-control me-2"
                                                    placeholder="Ruta de Archivo"
                                                    value={imagen.rutaDeArchivo}
                                                    onChange={(e) => handleImageChange(index, 'rutaDeArchivo', e.target.value)}
                                                />
                                                {imagen.id && <input type="hidden" value={imagen.id} />}
                                                <button type="button" className="btn btn-danger" onClick={() => handleRemoveImage(index)}>-</button>
                                            </div>
                                        ))}
                                        <button type="button" className="btn btn-custom-green" onClick={handleAddImage}>+ Agregar Imagen</button>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Cancelar</button>
                                <button type="button" className="btn btn-primary" onClick={handleSaveProduct}>Guardar</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminTable;
