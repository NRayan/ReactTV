import { Route, Routes } from 'react-router-dom';
import { About, Details, Favorites, TVShows } from "../pages";

export function MyRoutes() {
    return (
        <Routes>
            <Route path='ReactTV/' element={<TVShows />} />
            <Route path="ReactTV/Favorites" element={<Favorites />} />
            <Route path="ReactTV/About" element={<About />} />
            <Route path="ReactTV/Details/:id" element={<Details />}/>
        </Routes>
    )
}