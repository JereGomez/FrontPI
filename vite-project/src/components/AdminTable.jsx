import { useState, useEffect } from 'react';
//import { getAllProducts, createProduct } from '../interceptors/product.interceptor';
import { getAllProducts, createProduct, editProduct, deleteProduct } from '../interceptors/admin.interceptor';

const AdminTable = () => {
    const [products, setProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editingProductId, setEditingProductId] = useState(null);
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [rutasImagenes, setRutasImagenes] = useState(["", "", "", "", ""]);

    const handleCloseModal = () => {
        setShowModal(false);
        setEditingProductId(null);
        setNombre('');
        setDescripcion('');
        setRutasImagenes(["", "", "", "", ""]);
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
            await createProduct(nombre, descripcion, rutasImagenes);
            const productList = await getAllProducts();
            setProducts(productList);
            handleCloseModal();
        } catch (error) {
            console.error("Ocurrió un error al crear el producto:", error);
        }
    };

    const handleEditProduct = async (productId) => {
        try {
            await editProduct(productId, nombre, descripcion, rutasImagenes);
            const productList = await getAllProducts();
            setProducts(productList);
            handleCloseModal();
        } catch (error) {
            console.error("Ocurrió un error al editar el producto:", error);
        }
    };

    const handleDeleteProduct = async (productId) => {
        try {
            await deleteProduct(productId);
            const productList = await getAllProducts();
            setProducts(productList);
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
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className='d-none d-lg-block'>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <th scope="row">{product.id}</th>
                            <td>{product.nombre}</td>
                            <td>{product.descripcion}</td>
                            <td>{product.precio}</td>
                            <td>
                                <button type="button" className="btn btn-primary me-2" onClick={() => {
                                    setEditingProductId(product.id);
                                    setNombre(product.nombre);
                                    setDescripcion(product.descripcion);
                                    setRutasImagenes(product.rutasImagenes);
                                    handleShowModal();
                                }}>Editar</button>
                                <button type="button" className="btn btn-danger" onClick={() => handleDeleteProduct(product.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="text-center mt-4">
                <button type="button" className="btn btn-primary" onClick={handleShowModal}>Agregar Nuevo Producto</button>
            </div>
            {showModal && (
    <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">{editingProductId ? 'Editar Producto' : 'Agregar Nuevo Producto'}</h5>
                    <button type="button" className="btn-close" onClick={handleCloseModal}></button>
                </div>
                <div className="modal-body">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="mb-1">
                                    <label htmlFor="productName" className="form-label">Nombre del Producto</label>
                                    <input type="text" className="form-control" id="productName" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                                </div>
                            </div>
                            <div className="col">
                                <div className="mb-1">
                                    <label htmlFor="productDescription" className="form-label">Descripción del Producto</label>
                                    <input type="text" className="form-control" id="productDescription" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        {rutasImagenes.map((ruta, index) => (
                            <div className="row" key={index}>
                                <div className="col">
                                    <label htmlFor={`productImage${index + 1}`} className="form-label">{`Imagen ${index + 1}`}</label>
                                    <input type="text" className="form-control" id={`productImage${index + 1}`} value={ruta} onChange={(e) => {
                                        const updatedRutasImagenes = [...rutasImagenes];
                                        updatedRutasImagenes[index] = e.target.value;
                                        setRutasImagenes(updatedRutasImagenes);
                                    }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Cerrar</button>
                    <button type="button" className="btn btn-primary" onClick={handleSaveProduct}>{editingProductId ? 'Guardar Cambios' : 'Guardar Producto'}</button>
                </div>
            </div>
        </div>
    </div>
)}
    {showModal && <div className="modal-backdrop fade show"></div>}
        </div>
    );
};

export default AdminTable;
