import { Affix, Drawer, Layout } from 'antd';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
import Sidenav from './Sidenav';

const { Header: AntHeader, Content, Sider } = Layout;

function LayoutView({ isAuthenticate, children }) {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState('right');
  const [sidenavColor, setSidenavColor] = useState('#1890ff');
  const [sidenavType, setSidenavType] = useState('transparent');
  const [fixed, setFixed] = useState(false);

  const openDrawer = () => setVisible(!visible);
  const handleSidenavType = (type) => setSidenavType(type);
  const handleSidenavColor = (color) => setSidenavColor(color);
  const handleFixedNavbar = (type) => setFixed(type);

  let { pathname } = useLocation();
  pathname = pathname.replace('/', '');

  return (
    <Layout
      className={`layout-dashboard ${
        pathname === 'profile' ? 'layout-profile' : ''
      } ${pathname === 'rtl' ? 'layout-dashboard-rtl' : ''}`}
    >
      <Drawer
        title={false}
        placement={placement === 'right' ? 'left' : 'right'}
        closable={false}
        onClose={() => setVisible(false)}
        visible={visible}
        key={placement === 'right' ? 'left' : 'right'}
        width={250}
        className={`drawer-sidebar ${
          pathname === 'rtl' ? 'drawer-sidebar-rtl' : ''
        } `}
      >
        <Layout
          className={`layout-dashboard ${
            pathname === 'rtl' ? 'layout-dashboard-rtl' : ''
          }`}
        >
          <Sider
            trigger={null}
            width={250}
            theme="light"
            className={`sider-primary main-bg-color ant-layout-sider-primary ${
              sidenavType === '#fff' ? 'active-route' : ''
            }`}
            style={{ background: sidenavType }}
          >
            <Sidenav color={sidenavColor} />
          </Sider>
        </Layout>
      </Drawer>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onCollapse={(collapsed, type) => {}}
        trigger={null}
        width={250}
        theme="light"
        className={`sider-primary side-nav ma-0 main-bg-color ant-layout-sider-primary ${
          sidenavType === '#fff' ? 'active-route' : ''
        }`}
        style={{ background: sidenavType }}
      >
        <Sidenav color={sidenavColor} isAuthenticate={isAuthenticate} />
      </Sider>
      <Layout>
        {fixed ? (
          <Affix>
            <AntHeader className={`${fixed ? 'ant-header-fixed' : ''}`}>
              <Header
                onPress={openDrawer}
                name={pathname}
                subName={pathname}
                handleSidenavColor={handleSidenavColor}
                handleSidenavType={handleSidenavType}
                handleFixedNavbar={handleFixedNavbar}
              />
            </AntHeader>
          </Affix>
        ) : (
          <AntHeader className={`${fixed ? 'ant-header-fixed' : ''}`}>
            <Header
              onPress={openDrawer}
              name={pathname}
              subName={pathname}
              handleSidenavColor={handleSidenavColor}
              handleSidenavType={handleSidenavType}
              handleFixedNavbar={handleFixedNavbar}
            />
          </AntHeader>
        )}
        <Content className="content-ant">{children}</Content>
        {/* <Footer /> */}
      </Layout>
    </Layout>
  );
}

export default LayoutView;

LayoutView.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  isAuthenticate: PropTypes.bool,
};
