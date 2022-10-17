import React from 'react';
// import { Modal, Row, Button } from 'antd';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import styles from './Contact.module.css'
import {InputField} from "../../components/formFields";
import {Breadcrumb} from "../../components/breadcrumb";

export default function Contact() {

    return (
        <>
            <Breadcrumb/>
            <div className="section is-auction">
                <div className="page-padding">
                    <div className="container-large">
                        <div className="padding-vertical padding-xlarge">
                            <div className="contact-wrapper">
                                <div className="w-layout-grid grid-2-column is-contact">
                                    <div id="w-node-_6dd01b4f-e8e1-fc3f-0cd4-0d9a5632ba37-bdd1eb58" className="package-content-left">
                                        <div className="contact-form-content">
                                            <div className="margin-bottom margin-medium">
                                                <h1 >Get in touch with us</h1>
                                            </div>
                                            <div className="margin-bottom margin-medium">
                                                <h4 className="text-weight-semibold text-weight-normal">Please fill the form below for any queries</h4>
                                            </div>

                                            <Formik
                                                initialValues={{ name:'', country:'', message: ''}}
                                            >
                                                {(props) => (
                                            <div className="form is-contact">
                                                <div className="form-group">
                                                    <div className="form-label-wrapper">
                                                        <p className="text-size-regular text-style-muted">Name </p>
                                                        <div className="required-field">*</div>
                                                    </div>
                                                    <div className="w-embed">
                                                        <Field type="text" className={`${styles.input_field} form-control`} id="name" name="name" placeholder="Enter your name" />
                                                    </div>
                                                    </div>
                                                <div className="form-group">
                                                    <div className="form-label-wrapper">
                                                        <p className="text-size-regular text-style-muted">Country</p>
                                                        <div className="required-field">*</div>
                                                    </div>
                                                    <div className="w-embed">
                                                        <Field className={`${styles.input_field} form-select`} name="country" as="select" >
                                                            <option selected="">Select</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </Field>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="form-label-wrapper">
                                                        <p className="text-size-regular text-style-muted">Category</p>
                                                        <div className="required-field">*</div>
                                                    </div>
                                                    <div className="w-embed">
                                                        <Field className={`${styles.input_field} form-select`}  name="category" as="select">
                                                            <option selected="">Select</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </Field>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="form-label-wrapper">
                                                        <p className="text-size-regular text-style-muted">Message</p>
                                                    </div>
                                                    <div className="w-embed">
                                                        <Field as="textarea" name="message" className={`${styles.input_field} form-control`}rows="8" placeholder="Type your message here" id=""></Field>
                                                    </div>
                                                </div>
                                                <a href="#" className="button w-button">Submit</a>
                                                </div>
                                                )}
                                               </Formik>
                                            </div>
                                        </div>
                                    <div id="w-node-_6dd01b4f-e8e1-fc3f-0cd4-0d9a5632ba38-bdd1eb58" className="package-content-right">
                                        <div className="contact-content-wrapper">
                                            <div className="contact-details-card-wrapper">
                                                <div className="margin-bottom margin-xxsmall">
                                                    <p className="text-size-small text-color-gold">Location</p>
                                                </div>
                                                <p className="text-size-large text-color-white">Kobe Motors LLC Tokyo, Japan, XXXXX</p>
                                            </div>
                                            <div className="contact-details-card-wrapper">
                                                <div className="margin-bottom margin-xxsmall">
                                                    <p className="text-size-small text-color-gold">General Inquiries</p>
                                                </div>
                                                <p className="text-size-large text-color-white">Call Auto Bid 360 USA Call Auto Bid 360 USA</p>
                                            </div>
                                            <div className="contact-details-card-wrapper is-last">
                                                <div className="margin-bottom margin-xxsmall">
                                                    <p className="text-size-small text-color-gold">General Inquiries</p>
                                                </div>
                                                <p className="text-size-large text-color-white">Call Auto Bid 360 USA Call Auto Bid 360 USA</p>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="section is-con">
                    <div className="w-layout-grid grid-2-column is-gap-zero is-guide">
                        <div id="w-node-_84bde293-d850-4fc8-c835-7d6d8e90c5e8-bdd1eb58" className="padding-xhuge"></div>
                        <div id="w-node-_84bde293-d850-4fc8-c835-7d6d8e90c5e9-bdd1eb58"
                             className="grid-content-right stylesystem_color-sample background-color-lightgrey padding-xhuge is-center"></div>
                    </div>
                    <div className="page-padding">
                        <div className="container-large">
                            <div className="home-hero_component">
                                <div className="w-layout-grid grid-2-column is-gap-zero">
                                    <div id="w-node-_84bde293-d850-4fc8-c835-7d6d8e90c5ee-bdd1eb58"
                                         className="grid-content-left padding-xhuge is-center is-mobile-guide"><img
                                        src="/Image-8.png" loading="lazy" alt=""
                                        className="image-size-1 margin-bottom margin-small" />
                                        <h3 className="text-weight-semibold text-align-center">Auction Sheet</h3>
                                        <div className="margin-bottom margin-small">
                                            <h1 className="heading-xxlarge outline-text-display text-align-center">Guide</h1>
                                        </div>
                                        <a href="#" className="button w-button">Explore</a>
                                    </div>
                                    <div id="w-node-_84bde293-d850-4fc8-c835-7d6d8e90c5f7-bdd1eb58"
                                         className="grid-content-right padding-xhuge is-center is-bottom is-mobile-guide">
                                        <div className="instruction-wrap margin-bottom margin-large">
                                            <div className="instruction-text-wrapper">
                                                <h1 className="heading-xxlarge">How <br/>to bid</h1>
                                            </div>
                                            <div className="step-line padding-left padding-medium">
                                                <div className="line-wrap">
                                                    <div className="progress-line-shadow"></div>
                                                    <div className="progress-line-content">
                                                        <div className="progress-line"></div>
                                                        <div className="progress-circle"></div>
                                                    </div>
                                                </div>
                                                <div className="padding-left padding-medium">
                                                    <p className="text-size-regular text-weight-bold text-style-allcaps margin-bottom margin-medium">Register</p>
                                                    <p className="text-size-regular text-weight-bold text-style-allcaps margin-bottom margin-medium">Deposit</p>
                                                    <p className="text-size-regular text-weight-bold text-style-allcaps margin-bottom margin-medium">Bid</p>
                                                    <p className="text-size-regular text-weight-bold text-style-allcaps margin-bottom margin-medium">Result</p>
                                                    <p className="text-size-regular text-weight-bold text-style-allcaps margin-bottom margin-medium">Invoice</p>
                                                    <p className="text-size-regular text-weight-bold text-style-allcaps margin-bottom margin-medium">Payment</p>
                                                    <p className="text-size-regular text-weight-bold text-style-allcaps margin-bottom margin-medium">Shipment</p>
                                                    <p className="text-size-regular text-weight-bold text-style-allcaps">Delivery</p>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#" className="button w-button">Explore</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}