import React, { useEffect } from 'react';
import '../component/successstories.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';


const SuccessStories = () => {
    useEffect(() => {
      // Set the title of the page
      document.title = "Success Stories";
    }, []);
     // Main Div

    return(
        <div>
                {/* START FIRST SECTION*/}
         <div className="container1">
         <div className="earth">
          <DotLottieReact
            src="https://lottie.host/8bea9605-ad89-4ee5-8597-7d7b37ebd390/0eqaRBoRL7.lottie"
            loop
            autoplay
            style={{ width: '50%', height: '50%' }}
          />
        </div>
            <h1 className="first-header">
                <span className="highlight1">Stories of </span> <br />
                 <span className="highlight2">Hope and Resilience</span>
            </h1>
            <p className="first-para">
            Explore heartwarming and inspiring stories of children whose lives have beon positively impacted by ForHelp's initiatives. 
            Witness the transformative journey. of young souls as they overcome odversity. discover their potential, and chase their dreams. 
            These stories of hope and resilience showcase the profound difference that compassion 
            and support con make in the lives of underprivileged children
            </p>


            <div class="button-container">
<button class="animated-button">
  <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
  <span class="text">Join the Movement</span>
  <span class="circle"></span>
  <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg><a href="#"></a>
</button>

<button>Support Our Cause <a href="#"></a></button>
</div>
         </div>
          
 {/* END FIRST SECTION*/}




 {/* START SECOND SECTION*/}
 <div class="container2">

 <h1 className="second-header">
    Inspiring Transformations
</h1>

<p className="second-para">
Witness the transformative journey of young souls as they overcome adversity, discover their potential, and chase their dreams. 
These stories of hope and resilience showcase the profound difference that compassion and support can make in the lives of 
underprivileged children.
</p>

<div className="card-container2">
  {/* <!-- Card 1 --> */}
  <div class="card">
    <div class="cardinner">
      <div class="card-image">
      <div class="background-img">
      <img src= '/images/charity.png' alt="Decorative" style={{ width: '13rem', height: '13rem' }}>
          </img>
      
          </div>
      </div>
      <div class="table-row">
        <div class="table-cell">Name</div>
        <div class="table-cell age">Age</div>
        <div class="table-cell">Country</div>
      </div>
      <div class="table-row">
        <div class="table-cell"><strong>Sofia</strong></div>
        <div class="table-cell age"><strong>10 Years</strong></div>
        <div class="table-cell"><strong>Kenya</strong></div>
      </div>
    </div>
    <div class="card-details">
      <p class="text-title">Finding Hope Amidst Destruction</p>
      <p class="text-body">Sofia, a bright and determined young girl from a rural village in Kenya, faced significant challenges accessing education.</p>
    </div>
    <button class="card-button">Read Full Story<a href="#"></a></button>
  </div>

  {/* <!-- Card 2 --> */}
  <div class="card">
    <div class="cardinner">
      <div class="card-image">
      <div class="background-img">

      <img src= '/images/charity2.png' alt="Decorative" style={{ width: '14rem', height: '13rem' }}>
      </img>

      </div>

      </div>
      <div class="table-row">
        <div class="table-cell">Name</div>
        <div class="table-cell age">Age</div>
        <div class="table-cell">Country</div>
      </div>
      <div class="table-row">
        <div class="table-cell"><strong> Raj</strong></div>
        <div class="table-cell age"><strong>12 Years</strong></div>
        <div class="table-cell"><strong>India</strong></div>
      </div>
    </div>
    <div class="card-details">
      <p class="text-title">Healing Through Music</p>
      <p class="text-body">Raj, a soft-spoken boy from a troubled background, struggled to express himself.
      Through ForHelp's Music Therapy program.</p>
    </div>
    <button class="card-button">Read Full Story<a href="#"></a></button>
  </div>

  {/* <!-- Card 3 --> */}
  <div class="card">
    <div class="cardinner">
      <div class="card-image">
      <div class="background-img">
      <img src= '/images/charity3.png' alt="Decorative" style={{ width: '13rem', height: '13rem' }}>
      </img>
      </div>
      </div>
      <div class="table-row">
        <div class="table-cell">Name</div>
        <div class="table-cell age">Age</div>
        <div class="table-cell">Country</div>
      </div>
      <div class="table-row">
        <div class="table-cell"><strong>Maria</strong></div>
        <div class="table-cell age"><strong>8 Years</strong></div>
        <div class="table-cell"><strong>Brazil</strong></div>
      </div>
    </div>
    <div class="card-details">
      <p class="text-title">Empowered to Dream Big</p>
      <p class="text-body">Maria, an orphaned girl with a difficult past, found a loving home in ForHelp's orphanage in Brazil.</p>
    </div>
    <button class="card-button">Read Full Story<a href="#"></a></button>
  </div>
<br />
<a
        href="#"
        class="btn btn-show-all"
        target="_blank"
        >View More Stories</a>
</div>

</div>
 {/* END SECOND SECTION*/}




 {/* START THIRD SECTION*/}

 <div class="container3">

 <h1 className="third-header">
 Amplifying Change Through Donations
</h1>

<p className="third-para">
Discover the remarkable impact of your donations on ForHelp's mission to empower underprivileged children. 
Your support plays a pivotal role in driving positive change across various initiatives.
</p>

<div className="card-container">
<div class="card2">
  <div class="card-image-container">
  <div className="camp">
  <DotLottieReact
            src="https://lottie.host/cdcc378f-1033-4077-afd1-4fff3038a185/Tkpk6kB9r9.lottie"
            loop
            autoplay
            style={{ width: '410px', height: '230px', margin: '0 auto' }}
          />
</div>

  </div>
  <p class="card-title">Program Expansion
  </p>
  <p class="card-des">
  Donations enable organizations to expand their programs and reach more individuals in need. 
  With increased funding, they can extend their services, support additional beneficiaries. 
  and make a significant impact on the community.
  </p>
</div>



<div class="card2">
  <div class="card-image-container">
    <div className="love">
  <DotLottieReact
            src="https://lottie.host/a24f8454-2f9c-48e0-a6fd-8d1fd1c02877/NKu7y5kZ6G.lottie"
            loop
            autoplay
            style={{ width: '410px', height: '230px', margin: '0 auto' }}
          />
</div>


  </div>
  <p class="card-title">Enhanced Services
  </p>
  <p class="card-des">
  Donations allow organizations to enhance the quality and scope of their services. 
  They can invest in better facilities, resources, and equipment, ensuring that beneficiaries receive 
  the best possible support and care.
  </p>
</div>


<div class="card2">
  <div class="card-image-container">
  <div className="hands">
  <DotLottieReact
            src="https://lottie.host/15e2f48e-5ec9-4442-95b2-23f26a380f5c/pXLLhRCodm.lottie"
            loop
            autoplay
            style={{ width: '410px', height: '230px', margin: '0 auto' }}
          />
</div>
  </div>
  <p class="card-title">Empowering Beneficiaries
  </p>
  <p class="card-des">
  Donations empower individuals and communities by providing them with resources, education, and opportunities to improve their lives. 
  This empowerment encourages self-sufficiency and fosters a sense of pride and ownership.
  </p>
</div>

</div>

<a
        href="#"
        class="btn btn-show-all"
        target="_blank"
        >View More Impacts</a>

</div>
 {/* END THIRD SECTION*/}



 {/* START FOURTH SECTION*/}

 <div class="container4">

<h1 className="fourth-header">
Our Case Studies
</h1>

<p className="fourth-para">
Discover the remarkable impact of your donations on ForHelp's mission to empower underprivileged children. 
Your support plays a pivotal role in driving positive change across various initiatives.
</p>

<div className="card-container4">

<div class="card4">
  <div class="card-image-container4">

  <div className="edu">
  <DotLottieReact
            src="https://lottie.host/71eef79f-0e75-4d4d-97e7-eecafd64d504/JzIahQ9bfD.lottie"
            loop
            autoplay
            style={{ width: '410px', height: '230px', margin: '0 auto' }}
          />
</div>

  </div>

  <div className="card-info">
  <FontAwesomeIcon icon={faClock} /> &nbsp;
 5 Min Read &nbsp;|&nbsp; <FontAwesomeIcon icon={faCalendarDays} /> &nbsp; July 15,2023
</div>

  <p class="card-title">A Journey of Resilience

  </p>
  <p class="card-des">
  This case study follows the inspiring story of Aisha, a determined young girl from a rural village in Kenya, 
  who faced significant obstacles in accessing education. 
  Through ForHelp's Education Sponsorship program, Aisha received the necessary resources, 
  including school fees and supplies, to pursue her dreams.
  </p>

  <a
        href="#"
        class="button-in"
        >View Case Study</a>
</div>

<div class="card4">
  <div class="card-image-container4">

  <div className="art">
  <DotLottieReact
            src="https://lottie.host/59aec32f-3f35-42ee-998d-9b1e267c6ac4/uUPCS9f9jQ.lottie"
            loop
            autoplay
            style={{ width: '410px', height: '230px', margin: '0 auto' }}
          />
</div>

  </div>
  <div className="card-info">
  <FontAwesomeIcon icon={faClock} /> &nbsp;
 4 Min Read &nbsp;|&nbsp; <FontAwesomeIcon icon={faCalendarDays} /> &nbsp; August 5,2023
</div>
  <p class="card-title">Healing Through Art - The Story of Raj

  </p>
  <p class="card-des">
  Raj. a soft-spoken boy from a troubled background in India, struggled to express himself emotionally. 
  This case study delves into how ForHelp's Music Therapy program provided 
  Raj with an outlet for his emotions and a newfound passion for music.
   Through the healing power of music and emotional support.
  </p>
  <a
        href="#"
        class="button-in"
        >View Case Study</a>
</div>


</div>
<a
        href="#"
        class="btn btn-show-all"
        target="_blank"
        >View More Case Studies</a>
</div>
 {/* END FOURTH SECTION*/}





{/* START FIFTH SECTION*/}

<div class="container5">

  <h1 className= "fifth-header">Donate Now and Help Level Up the Lives of Children in Need</h1>
  <p className="fifth-para ">Your donation will help provide essential services to children in need,
     such as education, healthcare, nutrition, and enrichment.</p>
     <div className="style-container">

  <div className="donate-container">
    
        Click here to donate now and help level up the lives of children in need.
     
<button href="#" class="donate-button" >
Donate Now
  <span class="button__icon-wrapper">
    <svg
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="button__icon-svg"
      width="10"
    >
      <path
        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
        fill="currentColor"
      ></path>
    </svg>

    <svg
      viewBox="0 0 14 15"
      fill="none"
      width="10"
      xmlns="http://www.w3.org/2000/svg"
      class="button__icon-svg button__icon-svg--copy"
    >
      <path
        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
        fill="currentColor"
      ></path>
    </svg>
  </span>
</button>
  </div>
  </div>

</div>





 {/* END FIFTH SECTION*/}




        </div>
    );  
};

export default SuccessStories;