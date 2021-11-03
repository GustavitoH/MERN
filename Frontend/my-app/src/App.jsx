import Form from "./components/Pages/Form";
import Course from "./components/Pages/Course";
import CourseGrid from "./components/Organinsms/CourseGrid";
import NavMenu from "./components/Organinsms/NavMenu";
import History from "./components/Pages/History";
import Home from "./components/Pages/Home";
import Users from "./components/Pages/Users";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
  <Router>
    <NavMenu />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route
        path="/prueba1"
        exact
        component={() => <Form form="de Gustavo" />}
      />
      <Route path="/usuarios" exact component={Users} />
      <Route path="/cursos" exact component={CourseGrid} />
      <Route path="/historial" component={History} />

      <Route path="/curso/:id" exact component={Course} />
      <Route
        component={() => (
          <div>
            <h1>Error 404</h1>
            <span>Página no encontrada</span>
          </div>
        )}
      />
    </Switch>
  </Router>
);

export default App;
