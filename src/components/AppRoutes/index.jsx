import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import DefaultLayout from "../../layout/DefaultLayout";
import AuthLayout from "../../layout/AuthLayout";
import AdminLayout from "../../layout/AdminLayout";

import Home from "../../page/Home";
import About from "../../page/About";
import Posts from "../../page/Posts";
import PostDetail from "../../page/PostDetail";
import Contact from "../../page/Contact";
import Privacy from "../../page/Privacy";
import Login from "../../page/Login";
import Register from "../../page/Register";
import Dashboard from "../../page/Dashboard";
import Users from "../../page/Users";
import Settings from "../../page/Settings";
import NotFound from "../../page/NotFound";
function AppRoutes() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                {/* Default Layout Routes */}
                <Route element={<DefaultLayout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="posts" element={<Posts />} />
                    <Route path="posts/:postId" element={<PostDetail />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="privacy" element={<Privacy />} />
                </Route>

                {/* Auth Layout Routes */}
                <Route element={<AuthLayout />}>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>

                {/* Admin Layout Routes */}
                <Route path="admin" element={<AdminLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="users" element={<Users />} />
                    <Route path="settings" element={<Settings />} />
                </Route>

                {/* NotFound Route */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
