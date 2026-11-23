function App() {
  
  const name = "Bhuvan";
  const age = 19;
  const department = "CSM";

  return (
    <div>
      <h1>Hello, {name}! This is React</h1>

      <h2>Student Information Portal</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Department: {department}</p>

      <button onClick = {() => alert(`Hello ${name}!, You are ${age} years old and you are from ${department}`)}>
          Click Me
      </button>
    </div>
  );
}
export default App;