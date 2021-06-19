export default function ProductCard({ product }) {
    return (
        <div className="col-md-4 mx-auto">
            <div className="card card-body">
                <img src={product.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <button
                        className="btn btn-primary"
                        onClick={product.onClick.bind(product)}
                    >
                        Show Details
                    </button>
                </div>
            </div>
        </div>
    );
}
