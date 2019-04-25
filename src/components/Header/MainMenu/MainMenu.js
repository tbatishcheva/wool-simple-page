import React, { Component } from 'react';
import styles from './MainMenu.module.css';
import MainMenuItem from './MainMenuItem/MainMenuItem';
import profileIcon from './profile.svg';
import favoriteIcon from './favorite.svg';
import settingIcon from './setting.svg';
import SecurityIcon from './security.svg';
import Label, { COLOR_RED } from '../../Label/Label';

class MainMenu extends Component {
  render() {
    return (
      <div className={styles.mainMenu}>
        <MainMenuItem icon={profileIcon} title="Profile" isActive={false} />
        <MainMenuItem icon={favoriteIcon} title="Favorite" isActive />
        <MainMenuItem icon={settingIcon} title="Setting" isActive={false} />
        <MainMenuItem icon={SecurityIcon} title="Security" isActive={false}><Label color={COLOR_RED} isLarge={false}>2</Label></MainMenuItem>
      </div>
    );
  }
}

export default MainMenu;
