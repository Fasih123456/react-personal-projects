function App() {
  const date = new Date();
  const time = date.toLocaleTimeString();
  console.log(time);

  return (
    <div>
      <h1>Hello their, your current time is {time}</h1>
    </div>
  );
}

export default App;
