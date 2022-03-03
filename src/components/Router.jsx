import React from 'react'
import {Results} from './Results'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

export const Routing = () => {
    return (
        <div className="p-4">
            <Routes>
                <Route path="/search" element={<Results />} />

                <Route path="/images" element={<Results />} />

                <Route path="/news" element={<Results />} />

                <Route path="/videos" element={<Results />} />
            </Routes>
        </div>
    )
}
