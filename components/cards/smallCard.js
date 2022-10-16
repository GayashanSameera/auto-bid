import { Card } from 'antd';
import Link from "next/link";

const { Meta } = Card;

export default function SmallCard(props) {
    const { item, onclickNavigate } = props;

    const content = (
        <Card
            hoverable
            style={{
                width: 240,
            }}
            cover={<img alt="example" src={item.src} />}
        >
            <Meta title={item.title} description={item.description} />
        </Card>
    );

    return (
        <>
            {
                onclickNavigate ?
                    (
                        <Link href={onclickNavigate}>
                            {content}
                        </Link>
                    ) : content
            }
        </>
    );
}