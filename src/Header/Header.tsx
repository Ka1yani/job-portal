import { Avatar, Indicator } from "@mantine/core";
import { Anchor, Bell, Settings } from "tabler-icons-react";
import NavLinks from "./NavLinks";
const Header = () => {
  return (
    <div className="w-full  bg-mine-shaft-950 text-white h-28 flex justify-between items-center">
      <div className="flex gap-1 text-bright-sun-300">
        <Anchor className="h-10 w-8" strokeWidth={2.5} />
        <div className="text-3xl font-semibold">
            JobHook
        </div>
      </div>
      {NavLinks()}
      <div className="flex gap-3 items-center">
        <div className="flex items-center gap-1">
          <div>Samiksha</div>
          <Avatar
            src="avatar1.png"
            alt="it's me"
          />
        </div>
        <div className="bg-mine-shaft-900 p-1.5 rounded-full">
          <Settings strokeWidth={1.5} />
        </div>
        <div className="bg-mine-shaft-900 p-1.5 rounded-full">
          <Indicator color="bright-sun.4" offset={6} size={8} processing>
            <Bell strokeWidth={1.5} />
          </Indicator>
        </div>
      </div>
    </div>
  );
};
export default Header;
