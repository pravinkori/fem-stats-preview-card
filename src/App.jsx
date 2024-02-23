import Card from "./components/Card/Card";
import Credits from "./components/Credits/Credits";
import "./css/App.css";

function App() {
  return (
    <>
      <main>
        <Card />
        <Credits name={"Pravin Kori"} githubUserName={"pravinkori"} />
      </main>
    </>
  );
}

export default App;
