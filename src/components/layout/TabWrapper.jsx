import React from 'react';
import { Tabs } from 'antd';
import PropTypes from 'prop-types';

function TabWrapper({ children, ...props }) {
  return (
    <div className="">
      <div className="">
        <Tabs {...props}>{children}</Tabs>
      </div>
    </div>
  );
}

TabWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default TabWrapper;
