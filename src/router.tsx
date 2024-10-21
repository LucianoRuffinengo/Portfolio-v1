import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import ScrollToTop from "./components/ScrollToTop";
const IndexPage = lazy(() => import('./views/IndexPage'))
const WorkPage = lazy(() => import('./views/WorkPage'))

export default function AppRouter() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={
                        <Suspense fallback="Loading...">
                            <IndexPage />
                        </Suspense>
                    } />
                    <Route path="/work" element={
                        <Suspense fallback="Loading...">
                            <WorkPage />
                        </Suspense>
                    } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}