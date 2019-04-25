import React, { Component } from 'react';
import styles from './Sidebar.module.css';
import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem/MenuItem';
import SubMenu from './Menu/MenuItem/SubMenu/SubMenu';
import SubMenuItem from './Menu/MenuItem/SubMenu/SubMenuItem/SubMenuItem';
import menuIcon from './menu-icon.svg';
import emptyIcon from './empty-icon.svg';
import fullIcon from './full-icon.svg';

class Sidebar extends Component {
  render() {
    return (
      <div className={styles.sidebar}>
        <Menu>
          <MenuItem title="Wool fabric" icon={menuIcon}>
            <SubMenu>
              <SubMenuItem title="Men" icon={emptyIcon} isActive />
              <SubMenuItem title="Women" icon={fullIcon} />
              <SubMenuItem title="Kids" icon={emptyIcon} isActive />
            </SubMenu>
          </MenuItem>
          <MenuItem title="Coton" icon={menuIcon}>
            <SubMenu>
              <SubMenuItem title="Makers" icon={emptyIcon} isActive />
              <SubMenuItem title="heavy" icon={emptyIcon} />
            </SubMenu>
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default Sidebar;
