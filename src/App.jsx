import api from "api";

(async () => {
  console.log(await api.index());
})();

function App() {
  return <div></div>;
}

export default App;
