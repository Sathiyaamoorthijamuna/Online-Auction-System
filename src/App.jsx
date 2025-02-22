import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import PostAuction from "./pages/PostAuction";
import AuctionDetails from "./pages/AuctionDetails";
import Logout from "./pages/Logout";
import Navbar from "./components/Navbar"; // Import Navbar

// Layout Wrapper (Excludes Landing, Signup, Signin)
const Layout = ({ children }) => (
  <div className="app-container">
    <Navbar /> {/* Navbar displayed only on required pages */}
    <div className="content">{children}</div>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Pages WITHOUT Navbar */}
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />

        {/* Pages WITH Navbar */}
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/post-auction" element={<PostAuction />} />
                <Route path="/auction-details" element={<AuctionDetails />} />
                <Route path="/logout" element={<Logout />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
