import './Hero.css'

function Hero() {
  return (
    <div className="Hero_body">
      <div className='Hero_title'>
      <h1>Track your Expenses & Save Money</h1>
      <p>Helps you to organize your income and expenses</p>
      <button>Try free demo </button>
    </div>
    <div className='Hero_img'>
      <img src={'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTPj1-oQKIoiU-wHrFV-3rXlEmzSLR839XrflIyoClZMSBv_Jx7'} alt="" />
    </div>
    </div>
  )
  
}

export default Hero