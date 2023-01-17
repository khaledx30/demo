import React from "react";
import { Button, Menu } from "semantic-ui-react";

function SignIntMnue({ setAuoth }) {
  return (
    <Menu.Item position="right">
      <Button onClick={() => setAuoth(true)} basic inverted content="login" />
      <Button basic inverted content="Rigister" style={{ marginLeft: "5px" }} />
    </Menu.Item>
  );
}

export default SignIntMnue;
