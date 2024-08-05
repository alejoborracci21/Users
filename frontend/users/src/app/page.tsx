"use client"

import { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";

export default function App() {
  const [loged, setLoged] = useState(false);

  const handleLoginClick = () => {
    setLoged(true);
  };

  return (
    <main className="h-[100vh]">
      <div className="flex flex-col items-center justify-center w-full h-full bg-slate-700">
        {loged ? <Login /> : <Register />}
        {!loged && (
          <p>
            ¿Ya tienes una cuenta?
            <a onClick={handleLoginClick} className="text-blue-500 cursor-pointer">
              Iniciar sesión
            </a>
          </p>
        )}
      </div>
    </main>
  );
}
