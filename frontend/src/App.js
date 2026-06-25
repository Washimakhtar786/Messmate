import {
 Routes,
 Route
}
from "react-router-dom";

import {
 AuthProvider
}
from "./context/AuthContext";

import Home
from "./pages/Home";

import Dashboard
from "./pages/Dashboard";

import LoginForm
from "./components/LoginForm";

import Profile
from "./pages/Profile";

import SignupForm
from "./components/SignupForm";

import Navbar
from "./components/Navbar";

import ProtectedRoute
from "./components/ProtectedRoute";

function App() {

 return (

  <AuthProvider>

   <Navbar />

   <Routes>

    <Route
     path="/"
     element={<Home />}
    />

    <Route
     path="/login"
     element={<LoginForm />}
    />

    <Route
 path="/profile"
 element={
  <ProtectedRoute>

   <Profile />

  </ProtectedRoute>
 }
/>

    <Route
     path="/signup"
     element={<SignupForm />}
    />

    <Route
     path="/dashboard"
     element={
      <ProtectedRoute>

       <Dashboard />

      </ProtectedRoute>
     }
    />

   </Routes>

  </AuthProvider>
 );
}

export default App;