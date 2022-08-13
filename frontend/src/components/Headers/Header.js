/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import { userName, numberPoints } from "views/pages/Redeem";

const Header = () => {
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
                          Hello {userName}!
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

