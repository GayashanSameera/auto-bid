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
            <div>login</div>
        </Modal>
    );

};