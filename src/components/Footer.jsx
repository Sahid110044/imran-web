import React from "react";

export default function Footer() {
  return (
    <>
      {/* <!--================ Start Footer Area =================--> */}
      <footer className="footer-area section-padding bg-dark text-white py-5">
        <div className="container">
          <div className="row">
            {/* About Us */}
            <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
              <div className="single-footer-widget">
                <h6 className="text-uppercase">About Us</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>

            {/* Newsletter */}
            <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
              <div className="single-footer-widget">
                <h6 className="text-uppercase">Newsletter</h6>
                <p>Stay updated with our latest</p>
                <div id="mc_embed_signup">
                  <form
                    target="_blank"
                    noValidate
                    action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                    method="get"
                    className="d-flex"
                  >
                    <input
                      className="form-control me-2"
                      name="EMAIL"
                      placeholder="Enter Email"
                      onFocus={(e) => (e.target.placeholder = "")}
                      onBlur={(e) => (e.target.placeholder = "Enter Email")}
                      required
                      type="email"
                    />
                    <button className="btn btn-primary" type="submit">
                      <span className="lnr lnr-arrow-right"></span>
                    </button>
                    <div style={{ position: "absolute", left: "-5000px" }}>
                      <input
                        name="b_36c4fd991d266f23781ded980_aefe40901a"
                        tabIndex="-1"
                        defaultValue=""
                        type="text"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Instagram Feed */}
            <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
              <div className="single-footer-widget mail-chimp">
                <h6 className="mb-3 text-uppercase">Instagram Feed</h6>
                <ul className="list-unstyled d-flex flex-wrap gap-2">
                  <li>
                    <img src="img/instagram/i1.jpg" alt="" />
                  </li>
                  <li>
                    <img src="img/instagram/i2.jpg" alt="" />
                  </li>
                  <li>
                    <img src="img/instagram/i3.jpg" alt="" />
                  </li>
                  <li>
                    <img src="img/instagram/i4.jpg" alt="" />
                  </li>
                  <li>
                    <img src="img/instagram/i5.jpg" alt="" />
                  </li>
                  <li>
                    <img src="img/instagram/i6.jpg" alt="" />
                  </li>
                  <li>
                    <img src="img/instagram/i7.jpg" alt="" />
                  </li>
                  <li>
                    <img src="img/instagram/i8.jpg" alt="" />
                  </li>
                </ul>
              </div>
            </div>

            {/* Social Links */}
            <div className="col-lg-2 col-md-6 col-sm-6 mb-4">
              <div className="single-footer-widget">
                <h6 className="text-uppercase">Follow Us</h6>
                <p>Let us be social</p>
                <div className="footer-social d-flex align-items-center fs-5 gap-3">
                  <a href="#" className="text-white">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="text-white">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-white">
                    <i className="fab fa-dribbble"></i>
                  </a>
                  <a href="#" className="text-white">
                    <i className="fab fa-behance"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom d-flex justify-content-center align-items-center flex-wrap mt-4">
            <p className="footer-text m-0">© 2025 Sensative Company</p>
          </div>
        </div>
      </footer>
      {/* <!--================ End Footer Area =================--> */}
    </>
  );
}
