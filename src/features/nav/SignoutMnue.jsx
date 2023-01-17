import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Image, Menu } from "semantic-ui-react";

function SignOutMnue({ handelSignOut }) {
  return (
    <Menu.Item position="right">
      <Image avatar spaced="right" src="/assets/user.png" />
      <Dropdown pointing="top left" text="khaled">
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to="/createEvent/"
            text="Create event"
            icon="plus"
          />
          <Dropdown.Item text="profile" icon="user" />
          <Dropdown.Item onClick={handelSignOut} text="Signout" icon="power" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
}

export default SignOutMnue;
