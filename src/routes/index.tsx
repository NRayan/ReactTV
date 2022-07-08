import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { All, Movies, TVShows } from "../pages";

export function MyRoutes() {
    return (
            <Routes>
                <Route path='ReactTV/' element={<All />} />
                <Route path="ReactTV/movies" element={<Movies />} />
                <Route path="ReactTV/tvshows" element={<TVShows />} />
            </Routes>
    )
}