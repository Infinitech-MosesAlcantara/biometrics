import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Connect from './Admin/Device/Connect'

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/admin/device/connect" element={<Connect />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router;