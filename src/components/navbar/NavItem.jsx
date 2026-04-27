import { Link, useLocation } from "react-router-dom";
import NavDropdown from "./NavDropdown";

function NavItem({ label, path, items }) {

  const location = useLocation();

  const baseStyle = `
    transition
    px-1
    pb-1
    cursor-pointer
    font-medium
    tracking-tight
  `;

  const activeStyle = `
    border-b
    border-primary
    text-primary
    
  `;

  const isActive =
    location.pathname === path ||
    items?.some(item => location.pathname === item.path);

  const className = isActive
    ? `${baseStyle} ${activeStyle}`
    : `${baseStyle} hover:text-primary`;

  // dropdown item
  if (items) {
    return (
      <NavDropdown
        label={label}
        items={items}
        className={className}
      />
    );
  }

  // normal link
  return (
    <Link to={path} className={className}>
        {label} 
    </Link>
  );
}

export default NavItem;