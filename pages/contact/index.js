import React from 'react';
// import { Modal, Row, Button } from 'antd';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import styles from './Contact.module.css'
import {InputField} from "../../components/formFields";

export default function Contact() {

    return (
        <>
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

</>
    )
}