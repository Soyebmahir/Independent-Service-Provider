import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h1 className='text-center text-success'>Basic Discussion</h1>
            <div className='d-flex justify-content-between'>

                <div>
                    <p>1. Difference between authorization and authentication ?</p>
                    <p>Authentication is telling the system about yourself by giving information about your Email and Password.</p>
                    <br />
                    <p>Authorization actually While in authorization process, person’s or user’s authorities are checked for accessing the resources. what can you do according to who you are.</p>
                </div>
                <div>
                    <p>2. Why are you using firebase? What other options do you have to implement authentication?
                    </p>
                    <p>Firebase Authentication makes it easier to get your users signed-in without having to understand the complexities behind implementing your own authentication system.It's provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app.</p>
                    <br />
                    <p>Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
                </div>
                <div>
                    <p>3. What other services does firebase provide other than authentication
                    </p>
                    <p>There are many services which Firebase provides, Most useful of them are:</p><br />
                    <div className='d-flex justify-content-between'>
                        <div>
                            <p>Cloud Firestore</p>
                            <p> Cloud Functions</p>
                            <p> Authentication</p>
                            <p>Hosting</p>
                            <p> Cloud Storage</p>
                        </div>
                        <div>
                            <p>Google Analytics</p>
                            <p>Predictions</p>
                            <p> Cloud Messaging</p>
                            <p>Dynamic Links</p>
                            <p> Remote Config</p>
                        </div>
                    </div>
                    <p>Firebase is a full package that can help in developing your mobile or web applications faster with fewer resources and more efficiency. Now, let’s look at some of the services and use of it.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;