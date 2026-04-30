import express from "express";

const app = express();
const PORT = 3000;

const productos = [
    {id: 1, name: "Pantalon", price: 100},
    {id: 2, name: "Camisa", price: 200},
    {id: 3, name: "Zapatos", price: 300},
];

app.get("/", (req, res) => {
    res.json({message: "Hello World"});
});

app.get("/productos", (req, res) => {
    res.json(productos);
});

app.get("/productos/:id", (req, res) => {
    const productId = parseInt(req.params.id);

    const prodctoFiltrado = productos.filter(producto => producto.id === productId);

    res.json(prodctoFiltrado);

});

app.get("/productos/descuento/:descuento", (req, res) => {
    const descuento = parseInt(req.params.descuento);

    const productosConDescuento = productos.map(producto => {
        return {
            ...producto,
            price: producto.price - ((producto.price * descuento) / 100)
        }
    });

    res.json(productosConDescuento);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});