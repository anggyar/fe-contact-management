// src/components/ProtectedRoute.jsx

import React from "react";
import { useLocalStorage } from "react-use";
import { Navigate, Outlet } from "react-router";

export default function ProtectedRoute() {
    const [token] = useLocalStorage("token");

    // Jika tidak ada token, arahkan ke halaman login
    if (!token) {
        // 'replace' akan mengganti history saat ini, sehingga pengguna
        // tidak bisa menekan tombol "kembali" di browser untuk kembali
        // ke halaman yang dilindungi.
        return <Navigate to="/login" replace />;
    }

    // Jika ada token, render komponen anak (halaman yang sebenarnya)
    // <Outlet /> adalah placeholder dari React Router untuk merender route anak.
    return <Outlet />;
}
