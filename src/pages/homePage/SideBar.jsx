import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import Checkbox from "@mui/material/Checkbox";

export default function SideBar() {
  return (
    <div>
      <Sidebar className="bg-pink-300"
      >
        <Menu>
          <SubMenu label="I'm looking for" className="font-Roboto">
            <MenuItem>
              <Checkbox
                sx={{
                  color: "pink",
                  "&.Mui-checked": {
                    color: "pink",
                  }, fontFamily: "Roboto"
                }}
                inputProps={{ "aria-label": "controlled" }}
              />
              Groom
            </MenuItem>
            <MenuItem>
              <Checkbox
                sx={{
                  color: "pink",
                  "&.Mui-checked": {
                    color: "pink",
                  },
                }}
                inputProps={{ "aria-label": "controlled" }}
              />
              Bride
            </MenuItem>
          </SubMenu>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}
