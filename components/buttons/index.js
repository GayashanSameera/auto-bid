import { Button } from 'antd';


export const PrimaryButton = ({ type, htmlType, buttonText, ...props }) => {
    return (
        <>
            <Button type={type} htmlType={htmlType} >{buttonText}</Button>
        </>
    );
};