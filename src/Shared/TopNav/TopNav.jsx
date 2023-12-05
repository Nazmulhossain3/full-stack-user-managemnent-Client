import { MagnifyingGlass } from "phosphor-react";
import { Navbar, Button } from "keep-react";
import { NavLink } from "react-router-dom";
const TopNav = () => {
    return (
        <div>
           <Navbar fluid={true}>
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Container className="flex items-center">
          <Navbar.Brand>
            
          </Navbar.Brand>
          <Navbar.Divider></Navbar.Divider>
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-8"
          >
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/addUser'>AddUser</NavLink>
            <NavLink to='/myteam'>My Team</NavLink>
            <NavLink to='/usersTable'>Users Table</NavLink>
          </Navbar.Container>
          <Navbar.Collapse collapseType="sidebar">
            <Navbar.Container tag="ul" className="flex flex-col gap-5">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/addUser'>AddUser</NavLink>
            <NavLink to='/myteam'>My Team</NavLink>
            <NavLink to='/usersTable'>Users Table</NavLink>
            </Navbar.Container>
          </Navbar.Collapse>
        </Navbar.Container>

        <Navbar.Container className="flex gap-2">
          <Button size="sm" type="link">
            <span>
              <MagnifyingGlass size={20} color="#444" />
            </span>
            <span className="ml-2 text-metal-600">Search</span>
          </Button>
          <Button size="sm" type="primary">
            Contact
          </Button>
          <Navbar.Toggle />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
        </div>
    );
};

export default TopNav;