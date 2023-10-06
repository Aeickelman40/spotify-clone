"use client";

import { Toaster } from "react-hot-toast";

const ToasterProver = () => {
  return (
    <Toaster
      toastOptions={{
        style: {
          background: "#333",
          color: "#fff",
        },
      }}
    />
  );
};

export default ToasterProver;
