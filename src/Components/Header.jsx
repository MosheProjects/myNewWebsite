import { Link } from "react-router-dom";
import genPerson from "../Images/gen-person.jpg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useCurrenUserInfo } from "../Context/CurrenUserInfoContext";
import { useAuth } from "../Context/AuthContext";
import "./styles/header.css";
import { useFirestore } from "../Context/FireStoreContext";
import { useEffect } from "react";

export default function Header() {
  const { currenUserInfoState, setCurrenUserInfoState } = useCurrenUserInfo();
  const { logout, currentUser } = useAuth();
  console.log(currentUser);
  const { getDataFS } = useFirestore();

  useEffect(() => {
    if (currenUserInfoState?.sofer) {
      getDataFS("Sellers", currentUser.email).then((data) => [
        setCurrenUserInfoState(data),
      ]);
    } else if (currenUserInfoState?.sofer === false) {
      getDataFS("Customers", currentUser.email).then((data) => {
        setCurrenUserInfoState(data);
      });
    }
  }, []);

  return (
    <Navbar expand="md" dir="rtl" className="navbar-main">
      <Container fluid>
        <Link to="/" className="navbar-brand">
          <h1 className="bg-white border border-2 rounded p-2">
            סת"ם הכי מהודר
          </h1>
        </Link>
        <Navbar.Toggle aria-controls="navbar-collapse" />
        <Navbar.Collapse id="navbar-collapse">
          <Nav className="navbar-nav ml-auto">
            <Link to="/" className="nav-link">
              דף הבית
            </Link>
            <Link to="/about" className="nav-link">
              אודות האתר
            </Link>
            <Link to="/sofrim" className="nav-link">
              סופרי סת"ם{" "}
            </Link>
            {currenUserInfoState && (
              <Link to="/userDetailes" className="nav-link">
                מידע אישי
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
        <Dropdown className="user-dropdown ml-2">
          <Dropdown.Toggle className="dropdown-toggle">
            <div className="user-avatar">
              <img
                src={genPerson}
                alt="User avatar"
                className={currenUserInfoState ? null : "grayscale"}
              />
            </div>
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu">
            <div className="user-menu">
              {currenUserInfoState ? (
                <>
                  <p className="user-name">{`שלום ${currenUserInfoState.pName}`}</p>

                  <Link className="text-decoration-none" to={"/"}>
                    <button
                      className="dropdown-item user-link "
                      onClick={logout}
                    >
                      יציאה
                    </button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login" className="dropdown-item user-link">
                    כניסה
                  </Link>
                  <Link to="/signup" className="dropdown-item user-link">
                    הרשמה
                  </Link>
                </>
              )}
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
}
