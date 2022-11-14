import React from 'react';
import { Menu } from 'antd';
import { NavLink, useLocation } from 'react-router-dom';
import { IconDashboard } from '@assets/icons';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import logo from '../../assets/images/logovr.svg';
import PATH_URL from '../../common/config/pathURL';

function Sidenav({ color }) {
  const { pathname } = useLocation();
  const page = pathname.replace('/', '');
  const { t } = useTranslation();
  const token = true;

  const lstMenuItems = [
    {
      id: 1,
      path: PATH_URL.HOME,
      title: 'Home',
      icon: <IconDashboard />,
      pageItem: 'home',
    },
    {
      id: 2,
      path: PATH_URL.PATIENT_LIST,
      title: 'Danh Sách Bệnh Nhân',
      icon: <IconDashboard />,
      pageItem: 'patient-list',
    },
  ];

  return (
    <>
      <div className="brand">
        <img src={logo} alt="" />
      </div>
      <hr />
      <Menu theme="light" mode="inline">
        {token &&
          lstMenuItems.map((menuItem) => {
            return (
              <Menu.Item key={menuItem.id}>
                <NavLink to={menuItem.path}>
                  <span
                    className="icon"
                    style={{
                      background: menuItem.pageItem.includes(page) ? color : '',
                    }}
                  >
                    {menuItem.icon}
                  </span>
                  <span
                    style={{
                      color: menuItem.pageItem.includes(page)
                        ? color
                        : '#000000',
                    }}
                    className="label"
                  >
                    {menuItem.title}
                  </span>
                </NavLink>
              </Menu.Item>
            );
          })}
      </Menu>
    </>
  );
}

Sidenav.propTypes = {
  color: PropTypes.string,
};

export default Sidenav;
