import React from "react";
import "./ContactPage.css";


const ContactPage = () => {
  return (
    <div className="contact-page">
    <div className="section social-page">
        <div className="header"></div>
        <div className="main">
            <div className="partition social-left">
                <span>We Would Love to Hear</span><br></br>
                <span>from you</span>
            </div>
            <div className="partition social-right">
                <p>
                    Thank you for your interest in ForHelp and our mission to uplift
                    underprivileged children. We value your thoughts, questions, and
                    feedback. Please don’t hesitate to reach out to us. Our dedicated team
                    is here to assist you.
                </p>
                <div className="social-icons">
                    <div className="icon">
                        <i className="fa-brands fa-facebook"></i>
                    </div>
                    <div className="icon">
                        <i className="fa-brands fa-twitter"></i>
                    </div>
                    <div className="icon">
                        <i className="fa-brands fa-linkedin"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="info-section">
        <div className="section info-card">
            <div>
                <p className="p1">Address</p><br></br>
                <p className="p2">Somewhere in the world</p>
            </div>
            <div className="link-icon-div">
                <div className="link-icon">
                    <div className="arrow-cont-new">
                        &#x2197;
                    </div>
                </div>
            </div>
        </div>

        <div className="section info-card">
            <div>
                <p className="p1">You Can Email Here</p><br></br>
                <p className="p2">supportforhelp.com</p>
            </div>
            <div className="link-icon-div">
                <div className="link-icon">
                    <div className="arrow-cont-new-cont-new">
                        &#x2197;
                    </div>
                </div>
            </div>
        </div>

        <div className="section info-card">
            <div>
                <p className="p1">Call us on</p><br></br>
                <p className="p2">+00 000 00 000</p>
            </div>
            <div className="link-icon-div">
                <div className="link-icon">
                    <div className="arrow-cont-new-cont-new">
                        &#x2197;
                    </div>
                </div>
            </div>
        </div>

        <div className="section info-card">
            <div>
                <p className="p1">Working Hours</p><br></br>
                <p className="p2">10:00 am - 6:00 pm</p>
            </div>
            <div className="link-icon-div">
                <div className="link-icon">
                    <div className="arrow-cont-new-cont-new">
                        &#x2197;
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="section form-section">
        <div className="collab-section">
          <div className="image">
            <img src="form-img.jpeg" alt=""></img>
          </div>
          
          <div className="section info-card">
            <div>
                <p className="p1">Partnerships and Collaborations</p><br></br>
                <p className="p2">collabshelp.com</p>
            </div>
            <div className="link-icon-div">
                <div className="link-icon">
                    <div className="arrow-cont-new-cont-new">
                        &#x2197;
                    </div>
                </div>
            </div>
        </div>
        </div>
 
        <form className="section contact-form">
          <div className="form-row">
            <div className="input-field">
                <h5>First Name</h5>
                <input type="text" id="firstname"></input>
            </div>
            <div className="input-field">
                <h5>Last Name</h5>
                <input type="text" id="lastname"></input>
            </div>
          </div>
          <div className="form-row">
            <div className="input-field">
                <h5>Email</h5>
                <input type="text" id="firstname"></input>
            </div>
            <div className="input-field">
                <h5>Phone</h5>
                <input type="text" id="lastname"></input>
            </div>
          </div>

          <div className="form-row">
                <div className="textarea-div">
                    <h5>Message</h5>
                    <textarea></textarea>
                </div>
          </div>

          <div className="form-row">
            <div className="terms">
                <input id="termncondition" type="checkbox"></input>
                <label for="termncondition">I agree with Terms of Use and Privacy
            Policy</label>
            </div>
            <div className="btn-field">
                <button className="contact-btn">Send your Message</button>
            </div>
          </div>

        </form>
    </div>
    <div className="invitation-cards-row">
        
        <div className="section invitation-cards">
            <div className="heading"><h3>Volenteer Opportunity</h3></div>
            <div className="content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sed repudiandae ut, quaerat doloremque,</div>
            <div className="btn-field">
                <div className="btn-text">Donation Page</div>
                <div className="link-icon">
                    <div className="arrow-cont-new-cont-new">
                        &#x2197;
                    </div>
                </div>
            </div>
        </div>
        <div className="section invitation-cards">
            <div className="heading"><h3>Volenteer Opportunity</h3></div>
            <div className="content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sed repudiandae ut, quaerat doloremque,</div>
            <div className="btn-field">
                <div className="btn-text">Donation Page</div>
                <div className="link-icon">
                    <div className="arrow-cont-new-cont-new">
                        &#x2197;
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default ContactPage;
