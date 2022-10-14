import { Modal, Row, Col } from 'antd';

export const LoginModal = (props) => {
    const { show, closeLoginModal } = props;
    return (
        <Modal
            visible={show}
            footer={null}
            maskClosable={false}
            onCancel={closeLoginModal}
        >
            <div>
                <Row>
                    <h1>Login</h1>
                </Row>
                <Row>
                    <p>If you have an account, sign in with your email address.</p>
                </Row>
            </div>
        </Modal>
    );

};