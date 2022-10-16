import { useRouter } from 'next/router';
import { Empty } from 'antd';

import { InformationContainer, OutstandingStatement } from '../../containers/information';
import DashboadWrapper from '../../components/wrappers/dashboadWrapper';

export default function Dashboad(props) {
    const router = useRouter();
    const { params = [] } = router.query;

    console.log('params', params);
    return (
        <DashboadWrapper>
            {
                !params.length ? (
                    <InformationContainer />
                ) : params.length && params.includes("outstanding-statement") ?
                    (<OutstandingStatement />)
                    : (
                        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                    )
            }
        </DashboadWrapper>
    );
}