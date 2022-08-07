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
import React, {useEffect} from "react";

// reactstrap components
import { Card, Container, Row } from "reactstrap";

// core components
import Header from "components/Headers/Header.js"; 


const SFTPSend = () => {

  useEffect(() => {
    const fetchPrograms = async () => {
      const response = await fetch('/admin/sendsftp')
      const json  = await response.json()
      console.log(json)

      if (response.ok){
        
      }
    }
    fetchPrograms()
  }, [])

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow border-0">
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default SFTPSend;
