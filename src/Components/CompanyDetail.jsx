import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import SingleSearch from "./SingleSearch"
import uniqid from "uniqid"

const CompanyDetail = (props) => {
  
  const [ jobs, setJobs ] = useState([])
  
  const handleFetch = async () => {
    try {
      let response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?company_name=${props.match.params.companyName}&limit=6`)
      let jobsData = await response.json();
      setJobs(jobsData.data)
      console.log(jobsData.data)
    } catch (e) {
      console.log(e);
      return e;
    }    
  }

  useEffect(() => handleFetch(), [])
 

    return (
      <Container className="m-auto">
        <Row>
           
            {jobs.map(jobData => <SingleSearch key={uniqid()} data={jobData} />)}
                     
        </Row> 
      </Container>
    );
  
}

export default CompanyDetail;