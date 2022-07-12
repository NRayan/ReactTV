import { Route, Routes } from 'react-router-dom';
import { About, Details, Favorites, TVShows } from "../pages";

export function MyRoutes() {
    return (
        <Routes>
            <Route path='/' element={<TVShows />} />
            <Route path="/Favorites" element={<Favorites />} />
            <Route path="/About" element={<About />} />
            <Route path="/Details/:id" element={<Details />} />
        </Routes>
    )
}