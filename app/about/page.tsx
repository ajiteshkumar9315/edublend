import React from 'react'
import Gallery from '@/components/sub_cards/gallery'
import './about.css'

const About = () => {
  return (
    <>
    <div className="container">
      <h1 className="head">ABOUT US</h1> <br />
      {/* <br /> */}
      <h1 className='topic'>For the New Age Skills</h1> 
      <p className="subtop">Welcome to Edublends Academy - Pioneering</p>
      <p className="subtop">Your Path to Professional Mastery</p> 
{/* <br /> */}
<p className="subtop">At Edublends Academy, we envision education as a bridge to the future :-</p> 
portal where ambitious learners meet the evolving demands of the modern professional world. Founded with the intent to blend cutting-edge technology with practical, real-world applications, we stand as a beacon of innovation in skill development and career enhancement. <br />
<p className="subtop">Our Mission: Empowering Aspirations, Nurturing Talent:- </p>
Our mission is to provide comprehensive, industry-aligned educational experiences. We focus on specialized training programs in fields like Data Science, AI, Cybersecurity, and more, ensuring our learners are not just educated but empowered. With a curriculum designed to foster practical proficiency and intellectual growth, our learners are equipped to excel in their chosen careers. <br />
{/* <br /> */}
<p className="subtop">Our Vision: Shaping the Future, One Learner at a Time:-</p> 
At Edublends Academy, we don’t just teach; we transform. Our vision is to create a world where education transcends traditional boundaries, fostering an environment where innovation, creativity, and critical thinking flourish. We aspire to be the catalyst for our learners, propelling them to new professional heights. <br />
{/* <br /> */}
<p className="subtop"> Join Us on Your Journey to Success:-</p> 
Whether you are a working professional seeking to upgrade your skills, a student aspiring to enter the corporate world, or simply a lifelong learner, Edublends Academy is your partner in growth and success. Explore our programs and take the first step towards realizing your potential.
Welcome to the Edublends family - where your future begins. <br />
<br />
<h1 className='chair'>Chairman</h1>
<br />
<img src="./images/chairman.webp" alt="" className='chair_img'/>
<p className="chairman">Currently working as the Group Adviser in Raj Kumar Goel Group of Institutions, Ghaziabad, UP, India consisting of a large number of institutions including RKGIT, and RKGITM which are specifically for technical and professional courses. Prior to this position, he functioned as Group Director (R&D) after relinquishing the charge of responsibility of the Director of Raj Kumar Goel Institute of Technology, Ghaziabad, a leading self financed educational institution of Ghaziabad.
<br />
Dr Prasad served the Govt of India for more than 37 years in various capacities including as Adviser (Technology Development) in the Deptt of S&T, Min of S&T and handled matters related to Recognition of in-house R&D labs, Tax Incentives for R&D in industry, Intellectual Property Rights and Networking for R&D in Drugs and Pharma Sector, Instrument Development etc. He headed the divisions dealing with implementation of Water and Solar Missions of the DST, GOI.
<br />
He was nominated to function as Member in the Governing Boards of many institutions including PDIL, a PSU. Participated in discussions arranged by OECD, UNESCO, UNCTAD, ESCAP and other international bodies across the world.</p>
<br />
<h1 className='dire'>Directors</h1>
<div className="img-row">
<img src="./images/director1.webp" alt="" className='dire_img'/>
<img src="./images/director2.webp" alt="" className='dire_img'/>
</div>
<br />
<h1 className='memb'>Honorable Members</h1>
<div className="img-row">
<img src="./images/hm1.png" alt="" className='img-memb'/>
<img src="./images/hm2.png" alt="" className='img-memb'/>
<img src="./images/hm3.png" alt="" className='img-memb'/>
</div>
<br />
<div className="img-row">
<img src="./images/hm4.png" alt="" className='img-memb'/>
<img src="./images/hm6.png" alt="" className='img-memb'/>
<img src="./images/hr7.png" alt="" className='img-memb'/>
</div>
<br />
</div>
    </>
  )
}

export default About
