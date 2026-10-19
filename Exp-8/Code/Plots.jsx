const plots = [
  {
    id: "PLOT-A",
    location: "Sameerwadi",
    cropStage: "Grand Growth",
    soilMoisture: "22%",
    irrigation: "Irrigate for 45 minutes",
  },
  {
    id: "PLOT-B",
    location: "Shirale",
    cropStage: "Tillering",
    soilMoisture: "35%",
    irrigation: "Irrigation is not required now",
  },
  {
    id: "PLOT-C",
    location: "Mangalwedha",
    cropStage: "Maturity",
    soilMoisture: "48%",
    irrigation: "Check the soil moisture tomorrow",
  },
];

function Plots() {
  return (
    <section>
      <h2>Sugarcane Plot Details</h2>

      {plots.map((plot) => (
        <div className="card" key={plot.id}>
          <p>Plot ID: {plot.id}</p>
          <p>Location: {plot.location}</p>
          <p>Crop Stage: {plot.cropStage}</p>
          <p>Soil Moisture: {plot.soilMoisture}</p>
          <p>Advisory: {plot.irrigation}</p>
        </div>
      ))}
    </section>
  );
}

export default Plots;
