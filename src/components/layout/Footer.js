import React from 'react'

function Footer() {
    return (
       <footer className="page-footer grey darken-4">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text logo-text">My Blog</h5>
                <p className="grey-text text-lighten-4 ">“It isn't what you have, or who you are, or where you are, or what you are doing that makes you happy or unhappy. It is what you think about.”</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text logo-text">Find Me On</h5>
                <ul>

                  <li><a className="grey-text text-lighten-3" href="#!">
                  <i className="fab fa-facebook indigo-text text-darken-1"></i>Facebook</a>
                  </li>

                  <li><a className="grey-text text-lighten-3" href="#!">
                  <i className="fab fa-instagram pink-text"></i>Instagram</a>
                  </li>
                  
                  <li><a className="grey-text text-lighten-3" href="#!">
                  <i className="fab fa-twitter blue-text"></i>Twitter</a>
                  </li>

                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container center">
              © 2020 Copyright
            </div>
          </div>
        </footer>
    )
}

export default Footer
