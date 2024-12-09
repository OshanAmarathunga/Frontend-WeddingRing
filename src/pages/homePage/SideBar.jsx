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
            <MenuItem className="text-[12px]">
              <Checkbox
                sx={{
                  color: "pink",
                  "&.Mui-checked": {
                    color: "pink",
                  }, fontFamily: "Roboto",
                  transform: "scale(0.7)"
                }}
                inputProps={{ "aria-label": "controlled" }}
              />
              Groom
            </MenuItem>
            <MenuItem className="text-[12px]">
              <Checkbox
                sx={{
                  color: "pink",
                  "&.Mui-checked": {
                    color: "pink",
                  },
                  transform: "scale(0.7)",
                  fontFamily: "Roboto",
                  
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
