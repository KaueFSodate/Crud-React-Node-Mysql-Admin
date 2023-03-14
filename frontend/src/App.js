import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Admin from "./components/Admin";
import CadastrarAdmin from "./components/AddAdmin";
import EditarAdmin from "./components/EditAdmin";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/users" element={<Admin/>}/>
        <Route path="/users/add" element={<CadastrarAdmin/>}/>
        <Route path="/users/edit/:id" element={<EditarAdmin/>}/>
      </Routes>
    </Router>
  );
}

export default App;
