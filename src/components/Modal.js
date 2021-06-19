import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function ProductModal({ handleSubmit }) {
    const [open, setOpen] = useState(false);
    const [newProduct, setNewProduct] = useState({
        title: "",
        description: "",
        image: "",
    });

    const onClose = () => {
        setOpen(false);
        setNewProduct({ title: "", description: "", image: "" });
    };

    return (
        <>
            <Button variant="primary" onClick={() => setOpen(true)}>
                Add New Product
            </Button>
            <Modal show={open} onHide={onClose}>
                <Modal.Header>
                    <Modal.Title>
                        <h5 className="modal-title" id="exampleModalLabel">
                            Add New Product
                        </h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="mb-3">
                            <label
                                for="recipient-name"
                                className="col-form-label"
                            >
                                Title:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="recipient-name"
                                value={newProduct.title}
                                onChange={(e) =>
                                    setNewProduct((prev) => {
                                        prev.title = e.target.value;
                                        return { ...prev };
                                    })
                                }
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                for="recipient-name"
                                className="col-form-label"
                            >
                                Description:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="recipient-name"
                                value={newProduct.description}
                                onChange={(e) =>
                                    setNewProduct((prev) => {
                                        prev.description = e.target.value;
                                        return { ...prev };
                                    })
                                }
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                for="recipient-name"
                                className="col-form-label"
                            >
                                Image URL:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="recipient-name"
                                value={newProduct.image}
                                onChange={(e) =>
                                    setNewProduct((prev) => {
                                        prev.image = e.target.value;
                                        return { ...prev };
                                    })
                                }
                            />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose}>
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() =>
                            handleSubmit((prev) => {
                                prev.push({
                                    title: newProduct.title,
                                    description: newProduct.description,
                                    image: newProduct.image,
                                    onClick: function showName() {
                                        alert(this.title);
                                    },
                                });
                                onClose();
                                return [...prev];
                            })
                        }
                    >
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
