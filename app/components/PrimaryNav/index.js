import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import styles from './style.css';

const SubMenu = Menu.SubMenu;

export default () => (
  <Menu
    className={styles.menu}
    theme="dark"
    mode="horizontal"
    defaultSelectedKeys={['2']}
  >
    <SubMenu title={<span><Icon type="setting" />Settings</span>}>
      <Menu.Item key="setting:1"><Link to="/projects">Projects</Link></Menu.Item>
    </SubMenu>
  </Menu>
)