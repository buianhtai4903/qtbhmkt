import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import API from "../../configs/api";
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div>Sidebar</div>
    );
};

export default Sidebar;