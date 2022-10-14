import { Modal, Row, Button } from 'antd';
import { Field, Formik, Form } from "formik";

import { InputField } from '../formFields';
import Spinner from '../spinners';

import styles from './loginModal.module.css';

export const LoginModal = (props) => {
    const { show, closeLoginModal, requestVerify, isAuthenticating } = props;

    return (
        <Modal
            visible={show}
            footer={null}
            maskClosable={false}
            onCancel={closeLoginModal}
            className={styles.loginModal}
        >
            <div>
                <Row>
                    <h1 className={styles.loginHeader}>Login</h1>
                </Row>
                <Row>
                    <span>If you have an account, sign in with your email address.</span>
                </Row>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={(values, actions) => {
                        requestVerify(values);
                    }}
                >
                    {(props) => (
                        <Form>
                            <Row className={styles.labelRow}>
                                <label className={styles.loginLabel}>Email Address</label>
                            </Row>
                            <Row>
                                <Field component={InputField} type="email" name="email" placeholder="Enter Email Address" />
                            </Row>
                            <Row className={styles.labelRow}>
                                <label className={styles.loginLabel}>Password</label>
                            </Row>
                            <Row>
                                <Field name="password" placeholder="Enter Password" component={InputField} />
                            </Row>

                            <Row className={styles.labelRow}>
                                <Button type="primary" htmlType="submit">
                                    {isAuthenticating ? (<><Spinner /> Submitting ....</>) : "Submit"}
                                </Button>
                            </Row>
                        </Form>
                    )}
                </Formik>
            </div>
        </Modal>
    );

};

