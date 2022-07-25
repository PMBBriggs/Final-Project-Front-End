import '../styles/Footer.css'

export default function Footer(){
    return(<div className="Footer">
        <div className='socialTags'>
            <i className="fa-brands fa-facebook-square"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
        </div>
        <div className='subscribe'>
            <label htmlFor="emailInput">Subscribe to our newsletter!</label>
            <input type="text" placeholder="Your Email here..." id='emailInput'/>
        </div>
        <button>Subscribe</button>
    </div>)
}