import React, {useState } from 'react';
import axios from "axios";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col,
  } from "reactstrap";
  // core components




const AddProgram = () => {
    const [programName, setProgramName] = useState("GoJet Points")
    const [programID, setProgramID] = useState("GOPOINTS")
    const [programCurrency, setProgramCurrency] = useState("GoPoints")
    const [processTime, setProcessTime] = useState(0)
    const [minExAmount, setMinExAmount] = useState(0)
    const [exchangeRate, setExchangeRate] = useState(0)
    const [memberFormat, setMemberFormat] = useState("123456789a")
    const [enrollLink, setEnrollLink] = useState("https://www.gojet.com/member/")
    const [tcLink, setTCLink] = useState("https://www.gojet.com/aa/about-us/en/gb/terms-and-conditions.html")
    const [imageLink, setImageLink] = useState("")
    const [description, setDescription] = useState("Company Description")
    

    function handleSubmit(event){
        event.preventDefault();
        
        const program = {
            programName: programName,
            programID: programID,
            programCurrency: programCurrency,
            processTime: processTime,
            minExAmount: minExAmount,
            exchangeRate: exchangeRate,
            memberFormat: memberFormat,
            enrollLink: enrollLink,
            tcLink: tcLink,
            imageLink: imageLink,
            description: description
        }

        axios.post('http://localhost:3001/createprogram', program)

        setProgramName("GoJet Points");
        setProgramID("GOPOINTS");
        setProgramCurrency("GoPoints");
        setProcessTime(0);
        setMinExAmount(0);
        setExchangeRate(0);
        setMemberFormat("123456789a");
        setEnrollLink("https://www.gojet.com/member/");
        setTCLink("https://www.gojet.com/aa/about-us/en/gb/terms-and-conditions.html");
        setImageLink("");
        setDescription("Company Description");
    } 

    return (
        <>
        
        <Container className="mt--7" >
            <Row>
            <Col className="order-xl-2 mb-5 mb-xl-0" xl="8">
                <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                </CardHeader>
                <CardBody>
                    <Form>
                    <h6 className="heading-small text-muted mb-4">
                        
                    </h6>
                    <h6 className="heading-small text-muted mb-4">
                        Program Information
                    </h6>
                    <div className="pl-lg-4">
                        <Row>
                        <Col lg="6">
                            <FormGroup>
                                <label
                                className="form-control-label"
                                htmlFor="input-program-name"
                                >
                                Loyalty Program Name
                                </label>
                                <Input
                                className="form-control-alternative"
                                id="input-program-name"
                                placeholder={programName}
                                type="text"
                                onChange={event => setProgramName(event.target.value)}
                                />
                            </FormGroup>
                        </Col>
                        <Col lg="6">
                            <FormGroup>
                                <label
                                className="form-control-label"
                                htmlFor="input-program-id"
                                >
                                Loyalty Program ID
                                </label>
                                <Input
                                className="form-control-alternative"
                                id="input-program-id"
                                placeholder={programID}
                                type="text"
                                onChange={event => setProgramID(event.target.value)}
                                />
                            </FormGroup>
                        </Col>
                        </Row>
                        <Row>
                        <Col lg="6">
                            <FormGroup>
                                <label
                                className="form-control-label"
                                htmlFor="input-currency-name"
                                >
                                Loyalty Currency Name
                                </label>
                                <Input
                                className="form-control-alternative"
                                id="input-currency-name"
                                placeholder={programCurrency}
                                type="text"
                                onChange={event => setProgramCurrency(event.target.value)}
                                />
                            </FormGroup>
                        </Col>
                        <Col lg="6">
                            <FormGroup>
                                <label
                                className="form-control-label"
                                htmlFor="input-processing-time"
                                >
                                Processing Time in Hours
                                </label>
                                <Input
                                className="form-control-alternative"
                                id="input-processing-time"
                                placeholder={processTime}
                                type="text"
                                onChange={event => setProcessTime(event.target.value)}
                                />
                            </FormGroup>
                        </Col>
                        </Row>
                        <Row>
                        <Col lg="6">
                            <FormGroup>
                                <label
                                className="form-control-label"
                                htmlFor="input-min-exchange-amount-time"
                                >
                                Minimum Exchange Amount
                                </label>
                                <Input
                                className="form-control-alternative"
                                id="input-min-exchange-amount-time"
                                placeholder={minExAmount}
                                pattern="[0-9]*"
                                type="number"
                                onChange={event => setMinExAmount(event.target.value)}
                                />
                            </FormGroup>
                        </Col>
                        <Col lg="6">
                            <FormGroup>
                                <label
                                className="form-control-label"
                                htmlFor="input-exchange-rate-time"
                                >
                                Exchange Rate
                                </label>
                                <Input
                                className="form-control-alternative"
                                id="input-exchange-rate-time"
                                placeholder={exchangeRate}
                                pattern="[0-9]*"
                                type="number"
                                onChange={event => setExchangeRate(event.target.value)}
                                />
                            </FormGroup>
                        </Col>
                        </Row>
                        <Row>
                        <Col lg="6">
                            <FormGroup>
                                <label
                                className="form-control-label"
                                htmlFor="input-member-format-time"
                                >
                                Member format
                                </label>
                                <Input
                                className="form-control-alternative"
                                id="input-member-format-time"
                                placeholder={memberFormat}
                                type="text"
                                onChange={event => setMemberFormat(event.target.value)}
                                />
                            </FormGroup>
                        </Col>
                        </Row>
                    </div>
                    <hr className="my-4" />
                    <h6 className="heading-small text-muted mb-4">
                        Information Links
                    </h6>
                    <div className="pl-lg-4">
                        <Row>
                        <Col md="12">
                            <FormGroup>
                                <label
                                className="form-control-label"
                                htmlFor="input-enrollment-link"
                                >
                                Enrollment Link
                                </label>
                                <Input
                                className="form-control-alternative"
                                id="input-enrollment-link"
                                placeholder={enrollLink}
                                type="link"
                                onChange={event => setEnrollLink(event.target.value)}
                                />
                            </FormGroup>
                        </Col>
                        </Row>
                        <Row>
                        <Col md="12">
                            <FormGroup>
                                <label
                                className="form-control-label"
                                htmlFor="input-enrollment-link"
                                >
                                Terms & Conditions Link
                                </label>
                                <Input
                                className="form-control-alternative"
                                id="input-enrollment-link"
                                placeholder={tcLink}
                                type="link"
                                onChange={event => setTCLink(event.target.value)}
                                />
                            </FormGroup>
                        </Col>
                        <Col md="12">
                            <FormGroup>
                                <label
                                className="form-control-label"
                                htmlFor="input-image-link"
                                >
                                Company Logo Image Link
                                </label>
                                <Input
                                className="form-control-alternative"
                                id="input-image-link"
                                placeholder={imageLink}
                                type="link"
                                onChange={event => setImageLink(event.target.value)}
                                />
                            </FormGroup>
                        </Col>
                        </Row>
                    </div>
                    <hr className="my-4" />
                    <h6 className="heading-small text-muted mb-4">Description</h6>
                    <div className="pl-lg-4">
                        <FormGroup>
                        <label>Description</label>
                        <Input
                            className="form-control-alternative"
                            placeholder={description}
                            rows="4"
                            defaultValue=""
                            type="textarea"
                            onChange={event => setDescription(event.target.value)}
                        />
                        </FormGroup>
                    </div>
                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Add New Loyalty Program
                    </Button>
                    </Form>
                </CardBody>
                </Card>
            </Col>
            </Row>
        </Container>
        </>
    );
    };

    export default AddProgram;
  