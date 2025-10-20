import { Suspense } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import PricingOption from "./Components/PricingOptions/PricingOption";
import ChartOption from "./Components/ChartOption/ChartOption";

function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="w-11/12 mx-auto">
        <Suspense
          fallback={
            <span className="loading loading-infinity loading-xl"></span>
          }
        >
          <PricingOption></PricingOption>
        </Suspense>
      </main>
      <section className="my-8 w-11/12 mx-auto">
        <Suspense
          fallback={
            <span className="loading loading-infinity loading-xl text-primary"></span>
          }
        >
          <ChartOption></ChartOption>
        </Suspense>
      </section>
    </>
  );
}

export default App;
