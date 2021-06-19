import ProductCard from "./components/ProductCard";
import Modal from "./components/Modal";
import { data } from "./data";
import { useState } from "react";

function App() {
    const [products, setProducts] = useState(data);

    return (
        <div className="container">
            <div className="row mt-5">
                {products.map((item) => (
                    <ProductCard key={item.title} product={item} />
                ))}
            </div>
            <div className="row justify-content-center m-5">
                <div className="col-md-3">
                    <Modal handleSubmit={setProducts} />
                </div>
            </div>
        </div>
    );
}

export default App;
