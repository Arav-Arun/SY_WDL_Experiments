import { useState } from "react";

function IrrigationAdvisory({
  plotId,
  village,
  cropStage,
  soilMoisture,
  initialDuration,
}) {
  const [duration, setDuration] = useState(initialDuration);

  return (
    <div className="card">
      <p>Plot ID: {plotId}</p>
      <p>Village: {village}</p>
      <p>Crop Stage: {cropStage}</p>
      <p>Soil Moisture: {soilMoisture}%</p>
      <p>Recommended Irrigation Duration: {duration} hours</p>

      <button onClick={() => setDuration(duration + 0.5)}>
        Increase Duration
      </button>
    </div>
  );
}

export default IrrigationAdvisory;
