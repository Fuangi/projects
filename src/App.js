import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./Projects";
import Eoy from "./Eoy";
import Design from "./Design";
import ShowDesignProjects from "./components/ShowDesignProjects";
import ShowEoyProjects from "./components/ShowEoyProjects";
import ShowProjects from "./components/ShowAllProjects";

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
          <Route path="show-projects" element={<ShowProjects />}>
            <Route path="design" element={<ShowDesignProjects />} />
            <Route path="eoy" element={<ShowEoyProjects />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
