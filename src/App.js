import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Library from "./modules/Library/Library";
import Dental from "./modules/Dental/Dental";

function App() {
    const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

    // Function to handle sidebar collapse toggle and pass state to App
    const handleSidebarToggle = (collapsed) => {
        setSidebarCollapsed(collapsed);
    };

    // Content styles that adjust based on sidebar state (collapsed or expanded)
    const contentStyles = {
        marginLeft: isSidebarCollapsed ? "80px" : "200px", // Adjust left margin based on the sidebar state
        padding: "1rem",
        transition: "margin-left 0.3s ease", // Smooth transition for content shift
    };

    return (
        <Router>
            {/* Container holding Navbar and Sidebar */}
            <Navbar />

            {/* Sidebar below the Navbar */}
            <Sidebar onCollapseToggle={handleSidebarToggle} />

            {/* Content section */}
            <div style={contentStyles}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/projects/1" element={<Library isSidebarCollapsed={isSidebarCollapsed} />} />
                    <Route path="/projects/2" element={<Dental isSidebarCollapsed={isSidebarCollapsed} />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;