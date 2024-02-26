import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-700 text-white text-center p-4">
      <p>
        &copy; {new Date().getFullYear()} Online Judge. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
