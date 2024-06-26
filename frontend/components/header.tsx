"use client";
import { RootState } from "@/lib/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
  const router = useRouter()
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );


  const logout = () => {
    router.push('/')
    setTimeout(() => {
      localStorage.clear()
      window.location.reload()
    }, 500);
  }

  return (
    <>
      <nav className="bg-white py-2 md:py-4">
        <div className="container px-4 mx-auto md:flex md:items-center">
          <div className="flex justify-between items-center">
            <a href="#" className="font-bold text-xl text-indigo-600">
              LMS
            </a>
            <button
              className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
              id="navbar-toggle"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>

          <div
            className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
            id="navbar-collapse"
          >
            <Link
              href={`/`}
              className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
            >
              Home
            </Link>
            {isAuthenticated ? (
              <button onClick={logout} className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">
                Logout
              </button>
            ) : (
              <>
                <Link
                  href="/about"
                  className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                >
                  About
                </Link>
                <Link
                  href="/login"
                  className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300"
                >
                  Login
                </Link>
                <Link
                  href={`/login`}
                  className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
                >
                  Admin Login
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
