import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Invite from "./pages/Invite";
import Registry from "./pages/Registry";
import Vendors from "./Pages/Vendors";
import Locationz from "./Pages/Locationz";
import Galleries from "./Pages/Galleries";
import Layout from "./component/Layout";

function App() {
  return (
    <BrowserRouter>

    <Layout>
            <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invite" element={<Invite />} />
        <Route path="/registry" element={<Registry />} />
        <Route path="/galleries" element={<Galleries />} />
        <Route path="/vendor" element={<Vendors />} />
        <Route path="/locationz" element={<Locationz />} />
      </Routes>
    </Layout>
      
    </BrowserRouter>
  );
}

export default App;