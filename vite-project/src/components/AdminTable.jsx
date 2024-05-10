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
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className='d-none d-lg-block'>
        <div className="text-center d-flex align-items-center justify-content-left">
            <p className='fw-semibold me-2 mt-3'><i class="bi bi-filter"></i> Filtros</p>
            <button type="button" className="btn btn-custom-green" onClick={handleShowModal}>+ Agregar producto</button>
        </div>
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
                                <button type="button" className="btn btn-danger me-2" onClick={() => handleDeleteProduct(product.id)}><i class="bi bi-trash3"></i></button>
                                <button type="button" className="btn btn-custom-green" onClick={() => {
                                    setEditingProductId(product.id);
                                    setNombre(product.nombre);
                                    setDescripcion(product.descripcion);
                                    setRutasImagenes(product.rutasImagenes);
                                    handleShowModal();
                                }}><i class="bi bi-pen"></i></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

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
                                    <input type="text" className="form-control" id="productName" placeholder='nombre del producto' value={nombre} onChange={(e) => setNombre(e.target.value)} />
                                </div>
                            </div>
                            <div className="col">
                                <div className="mb-1">
                                    <label htmlFor="productDescription" className="form-label">Descripción del Producto</label>
                                    <input type="text" className="form-control" id="productDescription" placeholder='descripcion del producto' value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        {rutasImagenes.map((ruta, index) => (
                            <div className="row" key={index}>
                                <div className="col">
                                    <label htmlFor={`productImage${index + 1}`} className="form-label">{`Imagen ${index + 1}`}</label>
                                    <input type="text" placeholder='imagen del producto' className="form-control" id={`productImage${index + 1}`} value={ruta} onChange={(e) => {
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
