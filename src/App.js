import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listServices } from "./redux/actions/service.actions";
import Header from "./app/header/Header";
import Footer from "./app/footer/Footer";
import { Loader, AlertBanner } from "./components";

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
  const dispatch = useDispatch();
  const serviceList = useSelector((state) => state.serviceList);
  const { error, services } = serviceList;

  useEffect(() => {
    if (!services) {
      dispatch(listServices);
    }
  }, [services, dispatch]);
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

        <Switch>
          <React.Fragment>
            <main className="flex-shrink-0">
              {error && <AlertBanner variant="danger">{error}</AlertBanner>}
              <Route exact path="/" component={HomePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/contact" component={ContactPage} />
              <Route path="/blogs" component={BlogListPage} />
              <Route exact path="/blog/:id" component={BlogDetailsPage} />
              <Route path="/projects" component={ProjectListPage} />
              <Route exact path="/project/:id" component={ProjectDetailsPage} />
              <Route path="/services" component={ServiceListPage} />
              <Route exact path="/service/:id" component={ServiceDetailsPage} />
            </main>
          </React.Fragment>
        </Switch>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
