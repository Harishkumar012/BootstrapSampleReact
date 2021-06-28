import React from "react";
import DataFetching from "./DataFetching";
import Navigation from "../Layouts/Header";
export default function Dashboard() {
    return (
      <div>
        <Navigation />
        <DataFetching />
      </div>
    );
  }
