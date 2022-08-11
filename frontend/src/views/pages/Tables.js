import {
  Card,
  CardHeader,
  CardFooter,
  Table,
  Container,
  Row,
} from "reactstrap";
// core components
import Header from "./../../components/Headers/Header.js";
import React, {useState, useEffect} from 'react';

const Tables = () => {

const [history, setHistory] = useState(null);

useEffect(() => {
  const fetchTransfers = async () => {
    const response = await fetch('/admin/history')
    const json  = await response.json()
    console.log(json)
    if (response.ok){
      setHistory(json)
    }
  }
  fetchTransfers()
}, [])

  return (
    <>
      <Header />
      <br></br>
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Transaction History</h3> 
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Rewards Program</th>
                    <th scope="col">No. of Points Redeemed</th>
                    <th scope="col">Date</th>
                    <th scope="col">Status</th>
                    <th scope="col">Confirmation Code</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {history && history.map((transfer, k) => (
                    <tr key={k}>
                      <td>{transfer.LoyaltyProgramID}</td>
                      <td>{transfer.Amount}</td>
                      <td>{transfer.TransferDate}</td>
                      <td>{transfer.OutcomeCode}</td>
                      <td>{transfer.ReferenceCode}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
       </Container>
    </>
  );
};

export default Tables;
