import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import Header from "./app/header/Header";
import Footer from "./app/footer/Footer";

function App() {
    return (
        <Router>
            <Header />
            <main className="flex-shrink-0">
                <Route exact path="/" component={HomePage} />
            </main>
            <Footer />
        </Router>
    );
}

export default App;
