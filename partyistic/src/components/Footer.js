               
//               </div>
//               <div className="col">
//                 <h4>Contact Us</h4>
//                 <ul className="list-unstyled">
//                   <li><FaFacebook /> Facebook</li>
//                   <li><FaTwitter /> Twitter</li>
//                   <li><FaInstagram/> Instegram</li>
//                   <li><FaGithub /> Github</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div>&copy; {new Date().getFullYear} Partyistic INC.| All right reserved | Terms OF Service | Privacy </div>


//         </div>
//       </div>

//         </>
//       );
    
//   }
  
import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import './Footer.css'
export class Footer extends Component {
  render() {
    return (
      <>
        <title>Untitled</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css"></link>
        <link rel="stylesheet" href="assets/css/style.css"></link>
        <div className="footer-basic">

          <div className="social"><a href="#"><i className="icon ion-social-instagram"></i></a><a href="#"><i className="icon ion-social-snapchat"></i></a><a href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i className="icon ion-social-facebook"></i></a></div>
          <ul className="list-inline">
            <li className="list-inline-item"><a href="#">Home</a></li>
            <li className="list-inline-item"><a href="#">Services</a></li>
            <li className="list-inline-item"><a href="#">About</a></li>
            <li className="list-inline-item"><a href="#">Terms</a></li>
            <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
          </ul>
          <p className="copyright">Partyistic © 2021</p>
        </div>
      </>
    );
  }
}

export default Footer;