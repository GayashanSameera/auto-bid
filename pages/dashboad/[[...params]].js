import { useRouter } from 'next/router';
import DashboadWrapper from '../../components/wrappers/dashboadWrapper';

export default function Dashboad(props) {

    const router = useRouter();

    console.log('router', router);

    return (
        <DashboadWrapper>
            <div>
                content
            </div>
        </DashboadWrapper>
    );
}