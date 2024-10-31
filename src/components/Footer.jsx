import './style.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="leftFooter">
        <p>Information</p>
        <ul>
          <li>About JobSeek</li>
          <li>Contact</li>
          <li>Notices</li>
          <li>Careers</li>
        </ul>
      </div>
      <div className="middleFooter">
        <p>Social</p>
        <u>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>X</li>
          <li>Pinterest</li>
          <li>WhatsApp</li>
        </u>
      </div>
      <div className="rightFooter">
        <p>Legal</p> 
        <ul>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
          <li>Data Privacy</li>
        </ul>   
      </div>
    </div>
  )
}

export default Footer
