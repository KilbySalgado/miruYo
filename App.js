import { StatusBar } from "expo-status-bar";
import React from "react";
import Inicio from "./src/componentes/Inicio";

export default function App() {
  return (
    <>
      <Inicio />
      <StatusBar style="auto" />
    </>
  );
}
