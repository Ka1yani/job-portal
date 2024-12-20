import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
  const links = [
    { name: "Find Jobs", url: "/find-jobs" },
    { name: "Find Talent", url: "/find-talent" },
    { name: "Upload Jobs", url: "/upload-jobs" },
    { name: "About Us", url: "/about-us" },
  ];

  const location = useLocation();
  return (
    <div className="flex gap-5 text-mine-shaft-300 h-full items-center">
      {links.map((link, index) => (
        <div
          key={index}
          className={` border-t-[3px] h-full flex items-center ${
            location.pathname === link.url
              ? "border-bright-sun-300 text-bright-sun-300"
              : "border-transparent"
          } `}
        >
          <Link to={link.url}>{link.name}</Link>
        </div>
      ))}
    </div>
  );
};
export default NavLinks;
