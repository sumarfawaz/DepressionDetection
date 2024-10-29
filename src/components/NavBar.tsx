import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Logo from "../assets/logo.png";
import Onboarding from "./Onboarding";

const NavBar = () => {
  const { isSignedIn, user } = useUser();

  useEffect(() => {
    // Show the toast notification only when the user signs in
    if (isSignedIn) {
      toast.success(`Welcome ${user.username}!`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }, [isSignedIn, user]);

  return (
    <nav className="navbar navbar-expand-lg menu shadow fixed-top" id="nau">
      <div className="container">
        <Link className="navbar-brand" to="/">
          {/* Your logo or text */}
          <img alt="Logo" src={Logo} style={{ height: "70px" }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <SignedOut>
                {/* Content visible to signed-out users */}
                <SignInButton>
                  {/* Customize the appearance as needed */}
                  <button className="custom-btn btn-11">Login</button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                {/* Content visible to signed-in users */}
                <UserButton afterSignOutUrl="/" />
                <ToastContainer />
              </SignedIn>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
