import { Button, Container, Menu } from "semantic-ui-react";
export default function NavBar({ setFormOpen }) {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: "9px" }}
          ></img>
          Re-vents
        </Menu.Item>
        <Menu.Item name="Events" />
        <Menu.Item>
          <Button
            onClick={() => setFormOpen(true)}
            positive
            inverted
            content="Creat Event"
          />
        </Menu.Item>
        <Menu.Item position="right">
          <Button basic inverted content="login" />
          <Button
            basic
            inverted
            content="Rigister"
            style={{ marginLeft: "5px" }}
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
}
