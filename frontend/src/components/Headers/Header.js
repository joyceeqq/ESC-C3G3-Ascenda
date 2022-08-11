// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import React, {useState, useEffect } from 'react'

const Header = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [numberPoints, setNumberPoints] = useState(0);

  useEffect(() => {
    const fetchMember = async () => {
      const response = await fetch('/admin/memberdetails');
      const json  = await response.json();
      console.log(json);
      if (response.ok){
        setFirstName(json[0].firstName);
        setLastName(json[0].lastName);
        setNumberPoints(json[0].numberPoints);
      }
    }
    fetchMember()
  }, [])
  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body" >
            {/* Card stats */}
            <Row>
              <Col d-flex p-2>
                
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                      <div className={"h-3/5 w-1/4 flex flex-col"}> 

                      <div className="col">
                        <CardTitle
                          tag="h2"
                          className=" font-weight-bold mb-0"
                        >
                          Hello {firstName} {lastName}!
                        </CardTitle>

                      </div>
                      </div>
                      <div className={"h-3/5 w-1/4 flex flex-col"}> 
                        <span className="h4 text-muted mb-0">
                          Number of Points Available : {numberPoints}
                        </span>
                      
                      </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
