import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import "./styles/global";
import GlobalStyle from "./styles/global";
import baseData from "./testData.json";
import Home from "./pages/Home";
import { Page, Profile } from "./styles/app";
import ExpandedButton from "./components/ExpandButton";
import Avatar from "./images/avatar/leo.png";
import { Menu, Dropdown, Icon } from "antd";

const App = () => {
  const sidebarState = useState(true);
  const [collapse, setCollpase] = sidebarState;
  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://localhost:3000/"
        >
          Preferencias
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://localhost:3000/"
        >
          Logout
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <React.Fragment>
      <Sidebar menuItemList={baseData.menuitemList} state={sidebarState} />
      <Profile>
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" href="http://localhost:3000/">
            <ExpandedButton image={Avatar} text="Leônidas M." />
          </a>
        </Dropdown>
      </Profile>
      <Page collapse={collapse}>
        <Home />
      </Page>

      <GlobalStyle />
    </React.Fragment>
  );
};

export default App;
