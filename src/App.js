import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// //

// import Header from "./components/common/header/Header"
import About from "./components/about/About"
import Home from "./components/home/Home"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"

// //

// //

import Header from "./components/common/header/Header"
import ProductSolutionHome from "./components/productsolution/ProductSolutionHome"
import PartnerClientHome from "./components/partnerclient/PartnerClientHome"

// //

function App() {
  return (
    <>
      <Router>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/productsolution' component={ProductSolutionHome} />
        {/* <Route exact path='/partnerclient' component={PartnerClientHome} /> */}
        {/* <Route exact path='/about' component={About} /> */}
        <Route exact path='/partnerclient' component={CourseHome} />
        <Route exact path='/team' component={Team} />
        {/* <Route exact path='/pricing' component={Pricing} /> */}
        {/* <Route exact path='/journal' component={Blog} /> */}
        <Route exact path='/contact' component={Contact} />
      </Switch>
      <Footer />
      </Router>
    </>
  )
}

export default App