// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addUser } from '../../Redux/Action/ActionCart';
// import { addSession } from '../../Redux/Action/ActionSession';

// import { Link } from 'react-router-dom';
// import LoginLink from '../../Authentication/LoginLink';
// import LogoutLink from '../../Authentication/LogoutLink';
// import Name from '../../Authentication/Name';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../Redux/Action/ActionCart';
import { addSession } from '../../Redux/Action/ActionSession';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap'; // Import React Bootstrap components
import LoginLink from '../../Authentication/LoginLink';
import LogoutLink from '../../Authentication/LogoutLink';
import Name from '../../Authentication/Name';

function CustomNavbar(props) {
  const [active, setActive] = useState('Home');

  const dispatch = useDispatch();

  //Sau khi F5 nó sẽ kiểm tra nếu phiên làm việc của Session vẫn còn thì nó sẽ tiếp tục
  // đưa dữ liệu vào Redux
  if (localStorage.getItem('id_user')) {
    const action = addSession(localStorage.getItem('id_user'));
    dispatch(action);
  } else {
    //Đưa idTemp vào Redux temp để tạm lưu trữ
    localStorage.setItem('id_temp', 'abc999');
    const action = addUser(localStorage.getItem('id_temp'));
    dispatch(action);
  }

  //Get IdUser từ redux khi user đã đăng nhập
  var idUser = useSelector(state => state.Session.idUser);

  //Get idtemp từ redux khi user chưa đăng nhập
  var idTemp = useSelector(state => state.Cart.id_user);

  console.log(idUser);

  console.log(idTemp);

  const [loginUser, setLoginUser] = useState(false);
  const [nameUser, setNameUser] = useState(false);

  useEffect(() => {
    if (!idUser) {
      setLoginUser(false);
      setNameUser(false);
    } else {
      setLoginUser(true);
      setNameUser(true);
    }
  }, [idUser]);

  const handlerActive = value => {
    setActive(value);
    console.log(value);
  };

  return (
    <div className="container px-0 px-lg-3">
      <Navbar bg="navbar-light" expand="lg" className="py-3 px-lg-0">
        <Navbar.Brand as={Link} to={`/`} className="font-weight-bold text-uppercase text-dark">
          Boutique
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
        <Navbar.Collapse id="navbarNavAltMarkup">
          <Nav className="mr-auto">
            <Nav.Item onClick={() => handlerActive('Home')}>
              <Nav.Link
                as={Link}
                to={`/`}
                className={`nav-link ${active === 'Home' ? 'active' : ''}`}
              >
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item onClick={() => handlerActive('Shop')}>
              <Nav.Link
                as={Link}
                to={`/shop`}
                className={`nav-link ${active === 'Shop' ? 'active' : ''}`}
              >
                Shop
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link as={Link} to={`/cart`}>
                <i className="fas fa-dolly-flatbed mr-1 text-gray"></i> Cart
              </Nav.Link>
            </Nav.Item>
            {nameUser && <Name />}
            {loginUser ? <LoginLink /> : <LogoutLink />}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;
