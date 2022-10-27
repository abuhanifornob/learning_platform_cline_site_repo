import React from 'react';

const Blog = () => {
    return (
        <>
    
        <div className='m-4'>
            <div className="row">
                <div className=" col-12 col-lg-4">
                    <div id="list-example" className="list-group">
                        <a className="list-group-item list-group-item-action" href="#list-item-1">what is cors?</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-2"> Why are you using firebase? What other options do you have to implement authentication?</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-3">How does the private route work?</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-4">What is Node? How does Node work?</a>
                    </div>
                </div>
                <div className="col-12 col-lg-8">
                    <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" className="scrollspy-example" tabindex="0">
                        <h4 id="list-item-1">What is CORS?</h4>
                        <p>
                            Cross-Origin Resource Sharing (CORS) is an HTTP-based security mechanism controlled and enforced by the client (web browser). It allows a service (API) to indicate any origin other than its own from which the client can request resources. It has been designed in response to the same-origin policy (SOP) that restricts how a website (HTML document or JS script) loaded by one origin can interact with a resource from another origin. CORS is used to explicitly allow some cross-origin requests while rejecting others.
                            <br /><br />
                            CORS is implemented primarily in web browsers, but it can also be used in API clients as an option. It's present in all popular web browsers like Google Chrome, Firefox, Opera, and Safari. The standard has been accepted as a W3C Recommendation in January 2014. Based on that, we can assume that it is implemented in all currently available and other than listed web browsers.</p>
                        <h4 id="list-item-2">Why are you using firebase? What other options do you have to implement authentication?
                        </h4>
                        <p>
                            <h5 className='ms-5 mt-2'>Why are you using firebase?</h5>
                            The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.
                            <br /><br />
                            <h5 className='ms-5 mt-2'> What other options do you have to implement authentication?</h5>
                            1.Prove MFA <br />
                            2. Duo Access <br />
                            3. HID Global IAM <br />
                            4. ESET Secure Authentication <br />
                            5. Ping Identity <br />
                            6. TypingDNA Verify 2FA <br />
                            7. Thales SafeNet Trusted Access <br />
                            8. Entrust Identity Enterprise <br />
                            9. Okta Adaptive Multi-Factor Authentication <br />
                            10 SecureAuth Identity Platform
                        </p>
                        <h4 className='mt-5' id="list-item-3">How does the private route work?</h4>
                        <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
                        <h4 className='mt-5' id="list-item-4">What is Node? How does Node work?</h4>
                        <p>
                            <h5 className='ms-2 mt-2'>What is Node?</h5>
                            It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensiv.

                            <br />
                            <h5 className='ms-2 mt-2'>How does Node work?</h5>
                            Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request. <br />

                           <span>Node.js basically works on two concept</span> <br />

                           1. Asynchronous <br />
                           2. Non-blocking I/O

                        </p>

                    </div>
                </div>
            </div>
        </div>

        </>
    );
};

export default Blog;