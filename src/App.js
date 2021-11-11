import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./app/header/Header";
import Footer from "./app/footer/Footer";
import HomePage from "./pages/homePage/HomePage";
import ProjectListPage from "./pages/projectListPage/ProjectListPage";
import ContactPage from "./pages/contactPage/ContactPage";
import ProjectDetailsPage from "./pages/projectDetailsPage/ProjectDetailsPage";
import ServiceListPage from "./pages/serviceListPage/ServiceListPage";
import ServiceDetailsPage from "./pages/serviceDetailsPage/ServiceDetailsPage";
import AboutPage from "./pages/aboutPage/AboutPage";

function App() {
    return (
        <Router>
            <Header />
            <main className="flex-shrink-0">
                <Route exact path="/" component={HomePage} />
                <Route path="/projects" component={ProjectListPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/project/:id" component={ProjectDetailsPage} />
                <Route
                    path="/services/:service"
                    component={ServiceDetailsPage}
                />
                <Route exact path="/services" component={ServiceListPage} />
                <Route path="/about" component={AboutPage} />
            </main>
            <Footer />
        </Router>
    );
}

export default App;
