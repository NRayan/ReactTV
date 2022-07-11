import { Route, Routes } from 'react-router-dom';
import { TVShows,Favorites } from "../pages";

export function MyRoutes() {
    return (
        <Routes>
            <Route path='ReactTV/' element={<TVShows />} />
            <Route path="ReactTV/favorites" element={<Favorites />} />
        </Routes>
    )
}