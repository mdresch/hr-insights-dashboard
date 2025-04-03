import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <h1 className="text-xl font-bold">HR Insights AI Agent Dashboard</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/trends" className="hover:underline">Trends</a></li>
            <li><a href="/succession" className="hover:underline">Succession</a></li>
            <li><a href="/employee-experience" className="hover:underline">Employee Experience</a></li>
            <li><a href="/evp" className="hover:underline">Employee Value Proposition</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;