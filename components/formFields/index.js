import { Input } from 'antd';


export const InputField = ({ field, form, meta, ...props }) => {
    return (
        <>
            <Input {...props} />
            {meta && meta.touched && meta.error && (
                <div className="error">{meta && meta.error}</div>
            )}
        </>
    );
};