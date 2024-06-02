import { Route, Routes } from "react-router-dom";
import CommonRouter from "./Router/CommonRouter";
import UserRouter from "./Router/UserRouter";
import AuthGuard from "./AuthGuard/AuthGraud";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<CommonRouter />}></Route>
      <Route element={<AuthGuard />}>
        <Route path="/user/*" element={<UserRouter />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
