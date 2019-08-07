import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import "./styles/global";
import colors from "./styles/colors";
import GlobalStyle from "./styles/global";
import baseData from "./testData.json";
import { Page, Profile, ProfileItem, LoadingContainer } from "./styles/app";
import ExpandedButton from "./components/ExpandButton";
import { Menu, Dropdown } from "antd";
import { useAuth0 } from "./react-auth0-wrapper";
import { Redirect, Link, Switch, Route } from "react-router-dom";
import { Preferences, Home, Providers } from "./pages"
import Loader from 'react-loader-spinner';


const App = (props) => {
  const { logout, loading, user  } = useAuth0();


  const sidebarState = useState(true);
  const [collapse] = sidebarState;

  if(loading) return (<LoadingContainer><Loader type="Triangle"color={colors.primary} height="100"	 width="100"/></LoadingContainer>)

  const menu = (
    <Menu>
      <Menu.Item>
        <Link to={`${props.match.path}/profile`}>
          <ProfileItem >
              Preferências
          </ProfileItem>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <ProfileItem
          onClick={ () => logout() }
        >
          Logout
        </ProfileItem>
      </Menu.Item>
    </Menu>
  );

  return (
    <React.Fragment>

      <Sidebar menuItemList={baseData.menuitemList} state={sidebarState} match={props.match}/>
      <Profile>
        <Dropdown overlay={menu}>
          <div className="ant-dropdown-link">
            <ExpandedButton image={ user.picture } text={ user.nickname } />
          </div>
        </Dropdown>
      </Profile>
      <Page collapse={collapse}>
        <Switch>
          <Route path={ `${props.match.path}/home` }  component={ Home } />
          <Route path={ `${props.match.path}/profile` } component={ Preferences } />
          <Route path={ `${props.match.path}/providers` } component={ Providers } />

          <Redirect from="*" to={ `${props.match.path}/home` } />
        </Switch>
      </Page>

      <GlobalStyle />
    </React.Fragment>
  );
};



export default App;
