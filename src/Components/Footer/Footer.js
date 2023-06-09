import React, { useEffect, useState } from "react";
import './Footer.css';
import {PhoneInTalkOutlined as PhoneInTalkOutlinedIcon, LocationOnOutlined as LocationOnOutlinedIcon, EmailOutlined as EmailOutlinedIcon} from "@mui/icons-material";
import { useHistory } from "react-router-dom";
import db from '../../firebase';
import firebase from "firebase";
const Footer = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [messgaeToggle, setMessgaeToggle] = useState(false);
  const goToPage = (location,pos=0) => {
    history.push({pathname:`/${location}`,state:{position:pos}})
  }

  const addEmailToList = (e) =>{
    e.preventDefault();
    db.collection('Newsletter').doc(email).set({
      userEmail: email,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  });
  document.getElementById('email_id').value = "";
  setEmail("");
  setMessgaeToggle(true);
  setInterval(()=>{setMessgaeToggle(false)}, 3000)
  }

  return (
    <div className="footer-boundary">
      <div className="footer-container">
        <div className="Thrillo-div">
          <h1>THRILLOZEAL</h1>
          <img src="/Images/thrillozeal_logo_mobile.png"/>
          <p>
            Starting our journey in 2020, we aim to revolutionize the touring
            industry and create the best experience for all travel enthusiasts.
            For the individuals who cannot travel, we also offer a Virtual
            360-degree tour to help our users get the real feel of any place
            without being there.
          </p>
        </div>
      
      <div className="combo__link_contact">
      <div className="Links-div">
          <h1>USEFUL LINKS</h1>
          <ul>
            <li onClick={() => goToPage("",0)}>Home</li>
            <li onClick={ () => document.getElementById('destination').scrollIntoView({ behavior: "smooth"})} >Trending </li>
            <li onClick={() => goToPage("about",0)}>About Us</li>
          </ul>
        </div>
        <div className="Contact-div">
          <h1>CONTACT US</h1>
          <span className="contact-span">
            <PhoneInTalkOutlinedIcon/>
            <p>+91 83030 22306</p>
          </span>
          <span className="contact-span">
            <LocationOnOutlinedIcon/>
            <p >B 36, Nehru Colony, Dehrdun
              Uttarakhand, India 248001</p>
          </span>
          <span className="contact-span">
            <EmailOutlinedIcon/>
            <p>info@thrillozeal.com</p>
          </span>
        </div>
      </div>
        <div className="Legal">
          <h1>LEGAL</h1>
          <ul>
            <li onClick={() => goToPage("legal",100)}>Privacy Policies</li>
            <li onClick={() => goToPage("legal",200)}>Terms &amp; Conditions</li>
            <li onClick={() => goToPage("legal",300)}>Terms &amp; Conditions For Guide Registeration</li>
            <li onClick={() => goToPage("legal",400)}>Data Deletion Policy</li>
          </ul>
        </div>
        <div className="Newsletter">
          <h1>NEWSLETTER</h1>
          <ul>
            <li className="newsletter_li">Sign up for our mailing
              list</li>
            <li className="newsletter_li">We respect your
              privacy</li>
            <form className="footer-form">
              <input id="email_id" onChange={(e) => setEmail(e.target.value)} type="text" placeholder="you@awesome.com"></input>
              {messgaeToggle && <span className="thankyou__span">Thank you for subscribing to Thrillozeal Newsletter!</span>}
              {/* <span className="thankyou__span">Thank you for subscribing to Thrillozeal Newsletter!</span> */}
              <button className="submit-btn" type="submit" onClick={addEmailToList}>SUBMIT</button>
            </form>
          </ul>
        </div>
      </div>
      <div className="socials">
        <img onClick={() => window.open("https://www.facebook.com/thrillozealofficial/")} src="/Images/Facebook.png"></img>
        <img onClick={() => window.open("https://www.instagram.com/thrillozeal/")} src="/Images/Instagram.png"></img>
        <img onClick={() => goToPage("",0)} src="/Images/Twitter Circled.png"></img>
        <img onClick={() => goToPage("",0)} src="/Images/LinkedIn.png"></img>
      </div>
    </div>
  );
};
export default Footer;
