
import React, { useEffect, useState } from "react";
import Home from "./screens/home/index";


export default function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const tokenFromUrl = new URLSearchParams(window.location.search).get("token");

    if (tokenFromUrl) {
      window.history.pushState({}, null, "/"); // remove token from URL
      localStorage.setItem("token", tokenFromUrl);
      setClientToken(tokenFromUrl);
      setToken(tokenFromUrl);
    } else {
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        
        setToken(storedToken);
      }
    }
  }, []);

  return (
    <div>
      {token ? <Home /> : <h2 style={{ color: "white" }}>Login again...</h2>}
    </div>
  );
}