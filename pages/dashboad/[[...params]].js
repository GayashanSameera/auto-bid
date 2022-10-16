import { useRouter } from 'next/router';
import { Empty } from 'antd';

import DashboadContainer from '../../containers/dashboad';
import InformationContainer from '../../containers/information/information';
import DashboadWrapper from '../../components/wrappers/dashboadWrapper';

export default function Dashboad(props) {

    const router = useRouter();

    const { params = [] } = router.query;

    console.log('router', router);

    return (
        <DashboadWrapper>
            {
                !params.length ? (
                    <DashboadContainer />
                ) : params.includes("update-information") ? (
                    <InformationContainer />
                ) : (
                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                )
            }
        </DashboadWrapper>
    );
}