import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import Header from "./app/header/Header";
import Footer from "./app/footer/Footer";

function App() {
    return (
        <Router>
            <Header />
            <Route exact path="/" component={LandingPage} />
            <Footer />
        </Router>
    );
}

export default App;
