import "./Navbar.css"

function Navbar() {
  return (
    <div>
      <div className='navbar'>
        <h1 className='navbar--title'>pense</h1>
      <div className='navbar_links'>
        <a className='navbar_links--link' href="">Features</a>
        <a className='navbar_links--link' href="">About us</a>
        <a className='navbar_links--link' href="">Pricing</a>
        <a className='navbar_links--link' href="">Feedback</a>
      </div>
      <div className='navbar_btn'>
        <button className='navbar_btn--btn1'>Request a demo</button>
      </div>
      </div>
    </div>
  )
}

export default Navbar
