
import { useState } from 'react';
import { Input, Avatar, Badge, Drawer, Modal } from 'antd';
import { AiOutlineSearch, AiOutlineBell, AiOutlineSetting } from 'react-icons/ai';
import { MenuOutlined } from '@ant-design/icons';
import logo from '../../assets/logo.png';
import man from "../../assets/Man-2_1-removebg-preview.png";

/**
 * Navbar component containing the navigation bar for the application.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.toggleSidebar - Function to toggle the sidebar.
 * @return {JSX.Element} The rendered Navbar component.
 */
const Navbar = ({ toggleSidebar }) => {
  // State to track whether the search bar is visible or not.
  const [searchVisible, setSearchVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  /**
   * Toggles the visibility of the search bar.
   */
  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  /**
   * Shows the modal for mobile search.
   */
  const showModal = () => {
    setModalVisible(true);
  };

  /**
   * Hides the modal for mobile search.
   */
  const handleModalCancel = () => {
    setModalVisible(false);
  };

  return (
    <div className="flex items-center justify-between bg-white shadow p-4">
      {/* Logo and toggle sidebar button */}
      <div className="flex items-center space-x-4">
        <div className="md:hidden block">
          <MenuOutlined className="text-2xl" onClick={toggleSidebar} />
        </div>
        <div className="flex items-center space-x-2">
          <h2 className='' style={{fontSize:"30px", fontWeight:"800"}}>iBulks</h2>
          {/* <img
            src={logo}
            alt="Logo"
            className="h-12 md:h-8" // Reduced size on mobile
          /> */}
        </div>
      </div>

      {/* Search bar */}
      <div className="flex-1 flex justify-center">
        {/* Show search bar only on medium and larger screens */}
        <div className="hidden md:block">
          <Input
            placeholder="Search anything here"
            prefix={<AiOutlineSearch />}
            style={{
              width: '100%',
              maxWidth: 500,
              borderRadius: '9999px',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
              padding: '8px 16px',
            }}
          />
        </div>
      </div>

      {/* Settings, notifications, and profile */}
      <div className="flex items-center space-x-4">
        {/* Mobile search button */}
        <AiOutlineSearch
          className="block md:hidden text-2xl cursor-pointer"
          onClick={showModal} // Open modal on mobile
        />
        <AiOutlineSetting className="text-2xl" />
        <Badge dot>
          <AiOutlineBell className="text-2xl" />
        </Badge>
        <Avatar
          size="small" // Reduced size on mobile
          src={man}
          style={{ cursor: 'pointer' }}
        />
      </div>

      {/* Modal for mobile search */}
      <Modal
        title="Search"
        visible={modalVisible}
        onCancel={handleModalCancel}
        footer={null}
        centered
        width={400}
      >
        <Input
          placeholder="Search anything here"
          prefix={<AiOutlineSearch />}
          style={{
            width: '100%',
            borderRadius: '9999px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
            padding: '8px 16px'
          }}
        />
      </Modal>

      {/* Drawer for large screen search */}
      <Drawer
        placement="top"
        onClose={toggleSearch}
        visible={searchVisible}
        height={80}
        bodyStyle={{ padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Input
          placeholder="Search anything here"
          prefix={<AiOutlineSearch />}
          style={{
            width: '100%',
            maxWidth: 500,
            borderRadius: '9999px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
            padding: '8px 16px'
          }}
        />
      </Drawer>
    </div>
  );
};

export default Navbar;

