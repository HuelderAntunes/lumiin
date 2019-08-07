import React from "react";
import { Container, Brand, Menu, MenuItem, CollapseButton } from "./styles";
import Logo from "../../images/brand/logo.png";
import { Icon } from "react-icons-kit";
import * as FontAwesome from "react-icons-kit/fa";
import { Link } from "react-router-dom";

const Sidebar = props => {
  const [collapse, setCollapse] = props.state;

  return (
    <Container collapse={collapse}>

      <CollapseButton onClick={() => setCollapse(!collapse)}>
        <Icon icon={FontAwesome.alignJustify} />
      </CollapseButton>
      <Brand src={Logo} className="brand-logo" alt="Brand Logo" />
      <Menu>
        {props.menuItemList.map((menuItem, index) => {
          return (
            <MenuItem active={menuItem.active} key={index}>
              <Link to={`${ props.match.path }/${ menuItem.route }`}>
                <Icon
                  icon={FontAwesome[menuItem.icon] || FontAwesome["thLarge"]}
                  size={20}
                />
                {!collapse ? <span>{menuItem.title}</span> : ""}
              </Link>
            </MenuItem>
          );
        })}
      </Menu>
    </Container>
  );
};

export default Sidebar;
