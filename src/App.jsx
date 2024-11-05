import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Drawer } from 'antd';

// Importing all the components
import Sidebar from "./Pages/Home/Sidebar";
import Navbar from './Pages/Home/Navbar';
import Coaches from './Pages/Coaches/Coaches';
import Invite from './Pages/Invite/Invite';
import Settings from './Pages/Settings/Settings';
import Bookings from './Pages/Bookings/Bookings';
import HomePage from './Pages/Home/Home';

/**
 * App component that renders the main application.
 * It handles the routing and sidebar visibility.
 */
function App() {
  // State to track the sidebar visibility
  const [sidebarVisible, setSidebarVisible] = useState(false);

  /**
   * Toggles the sidebar visibility.
   */
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  /**
   * Closes the sidebar.
   */
  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <Router>
      {/* Rendering the Navbar */}
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex flex-1">
        {/* Rendering the Sidebar */}
        <Drawer
          placement="left"
          onClose={toggleSidebar}
          visible={sidebarVisible}
          bodyStyle={{ padding: 0 }}
          width={208}  // Adjust the width as needed
        >
          <Sidebar onLinkClick={closeSidebar} />
        </Drawer>
        {/* Rendering the sidebar only for desktop */}
        <div className="hidden md:block">
          <Sidebar />
        </div>
        {/* Rendering the main content */}
        <div className="flex-1 bg-gray-100 p-4">
          <Routes>
            {/* Rendering the routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/coaches" element={<Coaches />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/invite" element={<Invite />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

