import "../Footer/Footer.css";

function Footer() {
  return (
    <footer className="footer container">

      <div className="top">

        <div>
          <h2 className='logo'>Pense</h2>
        </div>

        <div>
          <h3>LINKS</h3>
          <p>Home</p>
          <p>About us</p>
          <p>Careers</p>
          <p>Pricing</p>
          <p>Features</p>
          <p>Blog</p>
        </div>

        <div>
          <h3>LEGAL</h3>
          <p>Terms of use</p>
          <p>Terms of conditions</p>
          <p>Privacy policy</p>
          <p>Cookie policy</p>
        </div>

        <div>
          <h3>NEWSLETTER</h3>

          <div className="inputBox">
            <input type="text" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>

      </div>

      <hr />

      <div className="bottom">
        <p>Privacy & Terms</p>
        <p>Copyright © 2022 xpence</p>
        <p>Icons</p>
      </div>

    </footer>
  );
}

export default Footer;