import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Details from "../components/Details";
import Login from "../components/Login";
import NotFound from "../components/Notfound";
import Books from "../components/Books";
import NavBar from "../components/NavBar";
import Register from "../components/Register";
import Auth from "../utils/Auth.js";
import Users from "../components/Users";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setBooks } from "../redux/features/bookSlices";
import axios from "axios";

const Routers = () => {
  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector((state) => state.user);

  useEffect(() => {
    handleApi();
  }, []);

  const handleApi = async () => {
    const { data } = await axios("https://jsonplaceholder.typicode.com/users");
    dispatch(setBooks(data));
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Navigate to={isLoggedIn ? "/books" : "/login"} />}
        />
        <Route
          path="/books"
          element={
            <Auth>
              <Books />
            </Auth>
          }
        />
        <Route
          path="/details/:id"
          element={
            <Auth>
              <Details />
            </Auth>
          }
        />
        <Route
          path="/users"
          element={
            <Auth>
              <Users />
            </Auth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default Routers;
