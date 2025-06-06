function CronometroControles({ enMarcha, onStart, onStop, onReset }) {
  return (
    <div style={{ marginTop: "16px" }}>
      <button onClick={onStart} disabled={enMarcha}>Start</button>
      <button onClick={onStop} disabled={!enMarcha} style={{ margin: "0 8px" }}>Stop</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

export default CronometroControles;