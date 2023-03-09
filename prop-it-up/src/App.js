import NewComponent from "./components/NewComponent";
function App() {
  return (
    <div>
      <NewComponent firstName = "Doe" lastName = "Jane" age={45} haircolor="Black"/>
      <NewComponent firstName = "Smith" lastName = "John" age={88} haircolor="Brown"/>
      <NewComponent firstName = "Fillmore" lastName = "Millard" age={50} haircolor="Brown"/>
      <NewComponent firstName = "Smith" lastName = "Maria" age={62} haircolor="Brown"/>
    </div>
  );
}

export default App;
