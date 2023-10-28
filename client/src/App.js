import './App.css';
import Layout from "./Layouts/Layout"

//* Integrate react router for navigation and user routing to different pages
// * https://www.w3schools.com/react/react_router.asp

function App() {
  return (
    <Layout>
    <div className="App">
      <h1> Welome to, Application Name </h1>
        <p>Meet new friends, explore clubs, and see events around campus! </p>
      {/* // TODO: Add carousel with current events around campus */}
    </div>
    </Layout>
  );
}

export default App;
