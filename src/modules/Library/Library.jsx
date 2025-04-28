import React, { useState, useEffect } from "react";
import Modal from "react-modal";

// This binds the modal to the app element (good for accessibility)
Modal.setAppElement("#root");

function Library() {
    const [items, setItems] = useState([]);
    const [formData, setFormData] = useState({ name: "", description: "" });
    const [editIndex, setEditIndex] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem("project1Items")) || [];
        setItems(storedItems);
    }, []);

    useEffect(() => {
        localStorage.setItem("project1Items", JSON.stringify(items));
    }, [items]);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editIndex !== null) {
            const updatedItems = [...items];
            updatedItems[editIndex] = formData;
            setItems(updatedItems);
        } else {
            setItems([...items, formData]);
        }

        setFormData({ name: "", description: "" });
        setEditIndex(null);
        setIsModalOpen(false); // Close modal after submit
    };

    const handleEdit = (index) => {
        setFormData(items[index]);
        setEditIndex(index);
        setIsModalOpen(true); // Open modal for editing
    };

    const handleDelete = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    };

    const openAddModal = () => {
        setFormData({ name: "", description: "" });
        setEditIndex(null);
        setIsModalOpen(true);
    };

    return (
        <div>
            <h1>My Literary Journey</h1>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                style={{
                    content: {
                        top: "50%",
                        left: "50%",
                        right: "auto",
                        bottom: "auto",
                        marginRight: "-50%",
                        transform: "translate(-50%, -50%)",
                        padding: "2rem",
                        borderRadius: "10px",
                        width: "400px",
                    },
                }}
            >
                <h2>{editIndex !== null ? "Edit Item" : "Add New Item"}</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} required style={{ marginBottom: "10px", width: "100%", padding: "8px" }} />
                    <input type="text" name="author" placeholder="Author" value={formData.author} onChange={handleInputChange} required style={{ marginBottom: "10px", width: "100%", padding: "8px" }} />
                    <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleInputChange} required style={{ marginBottom: "10px", width: "100%", padding: "8px" }} />
                    <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                        <button type="button" onClick={() => setIsModalOpen(false)} style={{ backgroundColor: "#ccc", border: "none", padding: "8px 12px", cursor: "pointer" }}>
                            Cancel
                        </button>
                        <button type="submit" style={{ backgroundColor: "#1A237E", color: "white", border: "none", padding: "8px 12px", cursor: "pointer" }}>
                            {editIndex !== null ? "Update" : "Add"}
                        </button>
                    </div>
                </form>
            </Modal>

            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                        padding: "8px",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                        marginRight: "10px",
                        flexGrow: 1, // So it stretches nicely
                    }}
                />

                <button
                    onClick={openAddModal}
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#1A237E",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Add New Item
                </button>
            </div>

            {/* Your Table */}
            <table style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "#ffffff" }}>
                <thead>
                    <tr style={{ backgroundColor: "#ffffff", color: "black" }}>
                        <th style={{ padding: "10px", textAlign: "left" }}>Book Name and Author</th>
                        <th style={{ padding: "10px", textAlign: "left" }}>Description</th>
                        <th style={{ padding: "10px", textAlign: "left" }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.description.toLowerCase().includes(searchTerm.toLowerCase())).length === 0 ? (
                        <tr>
                            <td colSpan="3" style={{ padding: "20px", textAlign: "center" }}>
                                No items match your search.
                            </td>
                        </tr>
                    ) : (
                        items
                            .filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.description.toLowerCase().includes(searchTerm.toLowerCase()))
                            .map((item, index) => (
                                <tr key={index}>
                                    <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                                        {item.name} by {item.author}
                                    </td>
                                    <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{item.description}</td>
                                    <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                                        <button
                                            onClick={() => handleEdit(index)}
                                            style={{
                                                backgroundColor: "#1A237E",
                                                color: "white",
                                                border: "none",
                                                padding: "6px 10px",
                                                marginRight: "5px",
                                                cursor: "pointer",
                                                borderRadius: "4px",
                                            }}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(index)}
                                            style={{
                                                backgroundColor: "#EF5350",
                                                color: "white",
                                                border: "none",
                                                padding: "6px 10px",
                                                cursor: "pointer",
                                                borderRadius: "4px",
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Library;