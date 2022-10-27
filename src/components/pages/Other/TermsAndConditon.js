import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const TermsAndConditon = () => {
    return (
        <Card>
      <Card.Header>Terms and conditions </Card.Header>
      <Card.Body>
        <Card.Title>Online Course Agreement
</Card.Title>
        <Card.Text>
        An Online Course Agreement is a document posted online whereby the course provider, the entity providing the course for sale and access, makes clear all of the terms and conditions that apply to the course. A Course Agreement is not a negotiated document - in other words, the parties don't sit and come together to discuss the terms of the document. Rather, it is simply drafted by the course provider and posted online, for the participants of the course to read and agree to, with no negotiation.

        <br />

In a Course Agreement, all of the details of the actual course are covered as well as additional contractual terms to govern the parties' relationship. There are only two parties in a Course Agreement, the course provider and the participant. The agreement will detail everything related to the course, such as the course name, the course start and end dates (if applicable), the course web address, the course cost, etc. This is important so that the participant can ensure everything is accurate before signing up.
<br />

Course Agreements should also include standard contractual provisions: things like a limitation on liability and intellectual property protection for the course provider, as well as an acceptable use provision and payment terms for the participant.
<br />
        </Card.Text>
        <Button variant="primary"><link to="/singUp">Go Back Sign Up</link></Button>
      </Card.Body>
    </Card>
    );
};

export default TermsAndConditon;