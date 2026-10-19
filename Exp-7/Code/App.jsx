import IrrigationAdvisory from "./IrrigationAdvisory";

function App() {
  return (
    <div className="container">
      <h1>KisanSaathi Irrigation Advisory</h1>

      <IrrigationAdvisory
        plotId="PLOT-A"
        village="Sameerwadi"
        cropStage="Grand Growth"
        soilMoisture={22}
        initialDuration={2.5}
      />
    </div>
  );
}

export default App;
