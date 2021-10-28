import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./app/header/Header";
import Footer from "./app/footer/Footer";
import HomePage from "./pages/homePage/HomePage";
import ProjectListPage from "./pages/projectListPage/ProjectListPage";
import ContactPage from "./pages/contactPage/ContactPage";

function App() {
    return (
        <Router>
            <Header />
            <main className="flex-shrink-0">
                <Route exact path="/" component={HomePage} />
                <Route path="/projects" component={ProjectListPage} />
                <Route path="/contact" component={ContactPage} />
            </main>
            <Footer />
        </Router>
    );
}

export default App;
