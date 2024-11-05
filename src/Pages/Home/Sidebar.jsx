
// Import necessary components and icons from Ant Design and React Router
import { Divider, Menu } from 'antd';
import { AiFillHome, AiOutlineUser, AiOutlineCalendar, AiOutlineSetting, AiFillHeart } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import { FaCommentSms } from "react-icons/fa6";
import { LiaSmsSolid } from "react-icons/lia";
import { TbReportSearch } from "react-icons/tb";
/**
 * Sidebar component that displays a sidebar with links to different pages.
 * @param {function} onLinkClick - Function to be called when a link is clicked.
 * @returns {JSX.Element} - The Sidebar component.
 */
const Sidebar = ({ onLinkClick }) => {
  // Get the current location from React Router
  const location = useLocation();

  return (
    <div className="h-screen flex flex-col bg-white shadow-lg w-52 md:w-64">
     <Divider className='mt-1'/>
      {/* Render a menu with inline layout */}
      <Menu
        selectedKeys={[location.pathname]} // Set the current path as the selected key
        mode="inline"
        className="h-full"
        style={{ borderRight: 0 }}
      >
        {/* Render a menu item for the home page */}
        <Menu.Item key="/" icon={<AiFillHome className="icon" />}>
          <Link to="/" className=" cursor-pointer p-2 block" onClick={onLinkClick}>Dashboard</Link>
        </Menu.Item>
        {/* Render a menu item for the coaches page */}
        <Menu.Item key="/coaches" icon={<AiOutlineUser className="icon" />}>
          <Link to="/coaches" className=" cursor-pointer p-2 block" onClick={onLinkClick}>Contacts</Link>
        </Menu.Item>
        {/* Render a menu item for the bookings page */}
        <Menu.Item key="/bookings" icon={<LiaSmsSolid className="icon" />}>
          <Link to="/bookings" className=" cursor-pointer p-2 block" onClick={onLinkClick}>Massage Templats</Link>
        </Menu.Item>
        {/* Render a menu item for the invite friends page */}
        <Menu.Item key="/invite" icon={<FaCommentSms className="icon" />}>
          <Link to="/invite" className=" cursor-pointer p-2 block" onClick={onLinkClick}>Send Message</Link>
        </Menu.Item>
        {/* Render a menu item for the settings page */}
        <Menu.Item key="/settings" icon={<TbReportSearch className="icon" />}>
          <Link to="/settings" className=" cursor-pointer p-2 block" onClick={onLinkClick}>Stars & Reporting</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Sidebar;

