import Home from "./routes/Home";
import { BrowserRouter, Route, Routes } from "react-router";
import NotFound from "./routes/NotFound";
import Layout from "./routes/Layout";
import Contact from "./routes/Contact";
import "./styles/App.scss";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
