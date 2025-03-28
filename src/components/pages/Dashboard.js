import React, { useState } from 'react';
import fullLogo from '../../assets/fullLogo.png'
import {sendEmail} from '../../services/httpService';
const Dashboard = () => {

    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        console.log(formData);
        e.preventDefault();
        try {
            const response = await sendEmail(formData);
           debugger;
            console.log(response);

            if (response.ok) {
                alert('Form submitted successfully!');
            } else {
                alert('Failed to submit the form. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <>
            {/* <label>
  Material 3
  <md-checkbox checked></md-checkbox>
</label> */}

            {/* <md-outlined-button>Back</md-outlined-button>
<md-filled-button>Next</md-filled-button> */}
            <section className="heroCard d-flex align-items-center">
                <div className="container">
                    <div className="row g-4 justify-content-start align-items-end">
                        <div className="col-xl-6 pe-xl-5 col-lg-7 col-md-10 col-sm-12 col-12">
                            <div className='bannerHeading'>
                                <h1 className='mb-4'>Always on, always ready—AI that works as hard as you do.</h1>
                                <p className='mb-4 pe-xl-3'>Say hello to BrainyAgent.ai—the chatbot that redefines user interactions with intelligent, seamless, and human-like conversations.</p>
                                <div className='d-flex flex-wrap gap-3'>
                                    <md-filled-tonal-button>Get Started Free</md-filled-tonal-button>
                                    <md-outlined-button>Schedule a Demo</md-outlined-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='WhySec'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                            <div className='sectionHeading'>
                                <h2>AI so good, you’ll forget it’s not human (but it never forgets you)</h2>
                            </div>
                        </div>
                        <div className='col-xl-5 col-lg-6 offset-xl-1 col-md-6 col-sm-12 col-12'>
                            <div className='sectionContent'>
                                <p className='m-0'>
                                    Brainyagent.ai goes beyond support. It’s a fully customizable, interactive layer tailored to your product, making it easier to:
                                </p>
                                <ul>
                                    <li>Navigate vast, complex databases with ease.</li>
                                    <li>Extract key insights from your dashboards in seconds.</li>
                                    <li>Provide intuitive, user-friendly interactions for even the most advanced systems.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='keyFeature'>
                <div className='container'>
                    <div className='row g-4'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                            <div className='sectionHeading'>
                                <h2>Key features</h2>
                            </div>
                        </div>
                        <div className='col-xl-7 col-lg-10 col-md-12 col-sm-12 col-12'>
                            <div className='row g-4'>
                                <div className='col-lg-6 col-md-6 col-sm-12 col-12 d-flex flex-column gap-4'>
                                    <md-list>
                                        <md-list-item>
                                            <div className='listCard'>
                                                <h3 className='card-title h6 m-0'>💡 Intelligent Conversational AI</h3>
                                                <p className='m-0'>Understands user intent and delivers precise responses.</p>
                                            </div>
                                        </md-list-item>
                                    </md-list>

                                    <md-list>
                                        <md-list-item>
                                            <div className='listCard'>
                                                <h3 className='card-title h6 m-0'>🔗 Flexible API Integration</h3>
                                                <p className='m-0'>Integrates smoothly with existing systems, databases, and APIs.</p>
                                            </div>
                                        </md-list-item>
                                    </md-list>

                                    <md-list>
                                        <md-list-item>
                                            <div className='listCard'>
                                                <h3 className='card-title h6 m-0'>🌎 Global Language Support</h3>
                                                <p className='m-0'>Understands user intent and delivers precise responses.</p>
                                            </div>
                                        </md-list-item>
                                    </md-list>
                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-12 col-12 d-flex flex-column gap-4'>

                                    <md-list>
                                        <md-list-item>
                                            <div className='listCard'>
                                                <h3 className='card-title h6 m-0'>📊 Data-Driven Insights</h3>
                                                <p className='m-0'>Understands user intent and delivers precise responses.</p>
                                            </div>
                                        </md-list-item>
                                    </md-list>
                                    <md-list>
                                        <md-list-item>
                                            <div className='listCard'>
                                                <h3 className='card-title h6 m-0'>🔒 Secure & Reliable</h3>
                                                <p className='m-0'>Industry-grade security protocols to ensure data protection and compliance.</p>
                                            </div>
                                        </md-list-item>
                                    </md-list>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ background: '#F8F9FF' }}>
                <div className='container'>
                    <div className='row g-lg-5 g-md-4 g-sm-3 g-3'>
                        <div className='col-lg-6 col-md-7 col-sm-12 col-12'>
                            <div className='sectionHeading bannerHeading'>
                                <h2 className='mb-lg-4 mb-md-3 mb-3 pb-lg-2'>Why hire when you can chat smarter?</h2>
                                <p className='m-0' style={{ color: '#171C1F' }}>Cut costs, save time, and amaze your users with BrainyAgent.ai. It's everything your business needs to get smarter, faster.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-5 col-sm-12 col-12'>
                            <form onSubmit={handleSubmit}>
                                <div className='w-100 d-flex flex-column gap-3 mb-3'>
                                <md-outlined-text-field
                                        class="input"
                                        label="Full Name"
                                        name="fullname"
                                        value={formData.fullname}
                                        onInput={handleInputChange}
                                    ></md-outlined-text-field>
                                    <md-outlined-text-field
                                        class="input"
                                        label="Email Address"
                                        name="email"
                                        value={formData.email}
                                        onInput={handleInputChange}
                                    ></md-outlined-text-field>
                                    <md-outlined-text-field
                                        class="input"
                                        rows="3"
                                        type="textarea"
                                        label="How Can We Help You?"
                                        name="message"
                                        value={formData.message}
                                        onInput={handleInputChange}
                                    ></md-outlined-text-field>
                                </div>
                                <md-filled-button class="formButton">Let’s Talk</md-filled-button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Dashboard;