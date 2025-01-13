import { useState } from "react";
import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./home.css";
import Navigation from "../components/Navigation";

const Home = () => {

  const [jobs, setJobs] = useState([{
    company: 'Conduent Business Services, LLC',
    jobDescription: 'About the Role: As a Transaction Processing Associate, you will provide document review and data entry support to our client. Your assistance will make a positive difference in the organization you support. You will be able to provide successful administration. As a Transaction Processing Associate, you will be responsible for: Providing production services to client operations by performing administrative tasks such as data-entry, document processing and scanning Receiving documents from both electronic and hard copy form for accurate processing Processing documents by following internal processes and identifying any gaps in required information. Identifying documents and their purpose to create a database of information. Providing great customer service. Requirements To be successful in this role you will: Have a High School Diploma or an equivalent level of education. Have legal authorization to work permanently in the United States without requiring a visa transfer or visa sponsorship. Be able to successfully pass a criminal background check and drug test. Be able to type a minimum of 45 WPM (words per minute) on a computer. Have good IT skills and the ability to learn new systems. Have a great attention to detail. Be organized and have the ability to multi-task and while adapting to changing priorities. Working with us Join a rapidly growing organization that can support your career goals. Working for you What you get: Paid Training Career Growth Opportunities Full Benefit Options Great Work Environment' 
  },
  {
    company: 'Conduent Business Services, LLC',
    jobDescription: 'About the Role: As a Transaction Processing Associate, you will provide document review and data entry support to our client. Your assistance will make a positive difference in the organization you support. You will be able to provide successful administration. As a Transaction Processing Associate, you will be responsible for: Providing production services to client operations by performing administrative tasks such as data-entry, document processing and scanning Receiving documents from both electronic and hard copy form for accurate processing Processing documents by following internal processes and identifying any gaps in required information. Identifying documents and their purpose to create a database of information. Providing great customer service. Requirements To be successful in this role you will: Have a High School Diploma or an equivalent level of education. Have legal authorization to work permanently in the United States without requiring a visa transfer or visa sponsorship. Be able to successfully pass a criminal background check and drug test. Be able to type a minimum of 45 WPM (words per minute) on a computer. Have good IT skills and the ability to learn new systems. Have a great attention to detail. Be organized and have the ability to multi-task and while adapting to changing priorities. Working with us Join a rapidly growing organization that can support your career goals. Working for you What you get: Paid Training Career Growth Opportunities Full Benefit Options Great Work Environment' 
  },
  {
    company: 'Conduent Business Services, LLC',
    jobDescription: 'About the Role: As a Transaction Processing Associate, you will provide document review and data entry support to our client. Your assistance will make a positive difference in the organization you support. You will be able to provide successful administration. As a Transaction Processing Associate, you will be responsible for: Providing production services to client operations by performing administrative tasks such as data-entry, document processing and scanning Receiving documents from both electronic and hard copy form for accurate processing Processing documents by following internal processes and identifying any gaps in required information. Identifying documents and their purpose to create a database of information. Providing great customer service. Requirements To be successful in this role you will: Have a High School Diploma or an equivalent level of education. Have legal authorization to work permanently in the United States without requiring a visa transfer or visa sponsorship. Be able to successfully pass a criminal background check and drug test. Be able to type a minimum of 45 WPM (words per minute) on a computer. Have good IT skills and the ability to learn new systems. Have a great attention to detail. Be organized and have the ability to multi-task and while adapting to changing priorities. Working with us Join a rapidly growing organization that can support your career goals. Working for you What you get: Paid Training Career Growth Opportunities Full Benefit Options Great Work Environment' 
  }])

  return (
    <div className="home">
      <Navbar />
      <Navigation />
      <Dashboard jobs={jobs}/>
      <Footer />
    </div>
  )
}

export default Home;
