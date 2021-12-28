import React, { Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./app/header/Header";
import Footer from "./app/footer/Footer";
import OffcanvasBody from "./app/header/offcanvasBody/OffcanvasBody";
import Loader from "./components/loader/Loader";
const AboutPage = React.lazy(() => import("./pages/aboutPage/AboutPage"));
const BlogListPage = React.lazy(() =>
  import("./pages/blogListPage/BlogListPage")
);
const BlogDetailsPage = React.lazy(() =>
  import("./pages/blogDetailsPage/BlogDetailsPage")
);
const ContactPage = React.lazy(() => import("./pages/contactPage/ContactPage"));
const HomePage = React.lazy(() => import("./pages/homePage/HomePage"));
const ProjectListPage = React.lazy(() =>
  import("./pages/projectListPage/ProjectListPage")
);
const ProjectDetailsPage = React.lazy(() =>
  import("./pages/projectDetailsPage/ProjectDetailsPage")
);
const ServiceListPage = React.lazy(() =>
  import("./pages/serviceListPage/ServiceListPage")
);
const ServiceDetailsPage = React.lazy(() =>
  import("./pages/serviceDetailsPage/ServiceDetailsPage")
);

function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="container">
            <div className="d-flex justify-content-center">
              <Loader />
            </div>
          </div>
        }
      >
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
      </Suspense>
    </Router>
  );
}

export default App;
