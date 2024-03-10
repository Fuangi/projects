import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./Projects";
import Eoy from "./Eoy";
import Design from "./Design";

function App() {
  return (
    <>
      {/* // Routes */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Projects />}>
            <Route index element={<Eoy />} />
            <Route path="eoy" index element={<Eoy />} />
            <Route path="design" element={<Design />} />
          </Route>
          {/*       <Route path="projects" element={<p>Forms</p>}>
            <Route path="design" element={<h1>All design Projects</h1>} />
            <Route path="eoy" element={<h1>All End of year Projects</h1>} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
