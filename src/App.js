import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
          <div className="container w-100 h-100">
            <div className="d-flex justify-content-center align-items-center">
              <Loader />
            </div>
          </div>
        }
      >
        <Header />
        <OffcanvasBody />
        <Switch>
          <main className="flex-shrink-0">
            <Route path="/about" component={AboutPage} />
            <Route path="/blogs" component={BlogListPage} />
            <Route exact path="/blog/:id" component={BlogDetailsPage} />
            <Route path="/contact" component={ContactPage} />
            <Route exact path="/" component={HomePage} />
            <Route path="/projects" component={ProjectListPage} />
            <Route exact path="/project/:id" component={ProjectDetailsPage} />
            <Route path="/services" component={ServiceListPage} />
            <Route exact path="/service/:id" component={ServiceDetailsPage} />
          </main>
        </Switch>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
