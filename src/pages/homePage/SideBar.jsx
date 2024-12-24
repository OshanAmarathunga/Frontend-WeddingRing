import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import Checkbox from "@mui/material/Checkbox";
import PersonCard from "../card/PersonCard";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function SideBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex relative top-[60px]">
      {/* Mobile Toggle Button */}
      <button
        className="lg:hidden absolute top-[-50px] left-4 z-50 bg-[#393E46] p-2 rounded-full"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } lg:block fixed lg:relative z-40 bg-[#393E46] lg:ml-44 lg:mt-4 h-screen`}
      >
        <Sidebar>
          <Menu>
            <SubMenu label="I'm looking for" className="font-Roboto">
              <MenuItem className="text-[12px]">
                <Checkbox
                  sx={{
                    color: "pink",
                    "&.Mui-checked": {
                      color: "pink",
                    },
                    fontFamily: "Roboto",
                    transform: "scale(0.7)",
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

      {/* Main Content */}
      <div className="p-4">
        <PersonCard />
      </div>
    </div>
  );
}
