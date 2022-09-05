
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Newregister from "./components/Newregister";
import UserManager from "./components/UserManager";
// import Contac from "./components/Contac";
// import Home from "./components/Home";
// import Homme from "./portfolio/Homme";
// import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
// import NotFound from "./components/NotFound";
// import './App.css'
// import EventHandling from "./components/EventHandling";
// import Todo from "./components/Todo";
// import Nav from "./portfolio/Nav";
// import Contact from "./portfolio/Contact";
// import Register from "./components/Register";



function App() {
  return (
    <div>

      <Toaster position="top-right" />
      <BrowserRouter>
        {/* <Link to="/homepage">HOME  </Link>
        <Link to="/loginpage">LOG IN</Link> */}

        {/* <Nav /> */}
        <Navbar />

        {<Routes>
          {/* <Route element={<Contact />} path="con" /> */}
          {/* <Route element={<Homme></Homme>} path="*" /> */}
          {/* <Route element={<Homme></Homme>} path="home" /> */}


          {/* <Route element={<Home></Home>} path="homepage" /> */}
          {/* <Route element={<Login></Login>} path="loginpage" /> */}
          {/* <Route element={<EventHandling />} path="event" /> */}
          {/* <Route element={<Todo></Todo>} path="todo" />   */}

          {/* <Route element={ <Register></Register>} path= "register"/> */}
          <Route element={<Newregister></Newregister>} path="newregister" />
          <Route element={<UserManager></UserManager>} path="usermanager" />
          {/* <Route element={<Contac></Contac>} path="contact" /> */}


          {/* <Route element={<NotFound />} path="*" /> */}


        </Routes>}
      </BrowserRouter>
    </div>
  );
}

export default App;
