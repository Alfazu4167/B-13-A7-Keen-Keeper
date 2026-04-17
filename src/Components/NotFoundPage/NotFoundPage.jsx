import React from "react";
import { Link } from "react-router";

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4">
            <div className="text-center max-w-lg">

                {/* 404 Text */}
                <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse">
                    404
                </h1>

                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-semibold mt-4">
                    Oops! Page not found
                </h2>

                {/* Description */}
                <p className="text-gray-400 mt-3">
                    The page you are looking for doesn’t exist or has been moved.
                </p>

                {/* Button */}
                <Link
                    to="/"
                    className="inline-block mt-6 px-6 py-3 rounded-2xl bg-[#244d3f] hover:scale-105 transition transform duration-300 shadow-lg"
                >
                    Go Back Home
                </Link>

                {/* Extra design element */}
                <div className="mt-10">
                    <div className="w-24 h-24 mx-auto rounded-full bg-blue-500/20 blur-2xl"></div>
                </div>

            </div>
        </div>
    );
};

export default NotFoundPage;