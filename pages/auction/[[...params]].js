import { useRouter } from 'next/router';
import { Empty } from 'antd';

import { AuctionContainer } from '../../containers/auction';
import DashboadWrapper from '../../components/wrappers/dashboadWrapper';

export default function Dashboad(props) {
    const router = useRouter();
    const { params = [] } = router.query;

    console.log('params', params);
    return (
        <DashboadWrapper>
            {
                !params.length || (params.length && params.includes("auction-details")) ? (
                    <AuctionContainer params={params} />
                ) : (
                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                )
            }
        </DashboadWrapper>
    );
}