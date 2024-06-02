import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";

function UserRouter() {
  return (
    <Routes>
      <Route path="/home" element={<Home />}></Route>
    </Routes>
  );
}

export default UserRouter;
