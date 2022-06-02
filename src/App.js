import "./styles.css";
import ParentComponent from "./ParentComponent";
import ChildComponent from "./ChildComponent";

export default function App() {
  const message = "Test message in child component";

  return (
    <div className="App">
      <ParentComponent>
        <ChildComponent message={message} />
      </ParentComponent>
    </div>
  );
}
