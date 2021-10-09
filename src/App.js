import {BrowserRouter as Router, Route} from "react-router-dom"
import LandingPage from "./pages/landingPage/LandingPage";
import Header from "./app/header/Header";

function App() {
    return (
        <Router>
            <Header />
            <Route exact path="/" component={LandingPage} />
        </Router>
    );
}

export default App;
