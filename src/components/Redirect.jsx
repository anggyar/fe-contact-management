import React from "react";
import { Navigate } from "react-router";

export default function Redirect() {
    Navigate({
        to: "/dashboard/contacts",
    });

    return <div>Redirect</div>;
}
