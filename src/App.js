import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./app/header/Header";
import Footer from "./app/footer/Footer";
import AboutPage from "./pages/aboutPage/AboutPage";
import BlogListPage from "./pages/blogListPage/BlogListPage";
import BlogDetailsPage from "./pages/blogDetailsPage/BlogDetailsPage";
import ContactPage from "./pages/contactPage/ContactPage";
import HomePage from "./pages/homePage/HomePage";
import ProjectListPage from "./pages/projectListPage/ProjectListPage";
import ProjectDetailsPage from "./pages/projectDetailsPage/ProjectDetailsPage";
import ServiceListPage from "./pages/serviceListPage/ServiceListPage";
import ServiceDetailsPage from "./pages/serviceDetailsPage/ServiceDetailsPage";
import OffcanvasBody from "./app/header/offcanvasBody/OffcanvasBody";

function App() {
    return (
        <Router>
            <Header />
            <OffcanvasBody />
            <main className="flex-shrink-0">
                <Route path="/about" component={AboutPage} />
                <Route exact path="/blogs" component={BlogListPage} />
                <Route path="/blogs/:blog_id" component={BlogDetailsPage} />
                <Route path="/contact" component={ContactPage} />
                <Route exact path="/" component={HomePage} />
                <Route exact path="/projects" component={ProjectListPage} />
                <Route path="/projects/:id" component={ProjectDetailsPage} />
                <Route exact path="/services" component={ServiceListPage} />
                <Route
                    exact
                    path="/services/:service"
                    component={ServiceDetailsPage}
                />
            </main>
            <Footer />
        </Router>
    );
}

export default App;
