import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import Header from "./app/header/Header";
import Footer from "./app/footer/Footer";

function App() {
    return (
        <Router>
            <Header />
            <main className="flex-shrink-0">
                <Route exact path="/" component={LandingPage} />
            </main>
            <Footer />
        </Router>
    );
}

export default App;
