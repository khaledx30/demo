import { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";
import SignIntMnue from "./SigninMnue";
import SignOutMnue from "./SignoutMnue";
export default function NavBar({ setFormOpen }) {
  const [authanticted, setAuoth] = useState(false);
  const history = useHistory();

  function handelSignOut() {
    setAuoth(false);
    history.push("/");
  }

  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} exact to="/" header>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: "9px" }}
          ></img>
          Re-vents
        </Menu.Item>
        <Menu.Item as={NavLink} exact to="/events" name="Events" />
        <Menu.Item as={NavLink} exact to="/test" name="test" />
        {authanticted && (
          <Menu.Item as={NavLink} to="createEvent">
            <Button positive inverted content="Create Event" />
          </Menu.Item>
        )}
        {authanticted ? (
          <SignOutMnue handelSignOut={handelSignOut} />
        ) : (
          <SignIntMnue setAuoth={setAuoth} />
        )}
      </Container>
    </Menu>
  );
}
