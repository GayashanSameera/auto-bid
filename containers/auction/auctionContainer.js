import { Row } from 'antd';
import { SmallCard } from "../../components/cards";
import DetailContainer from "./detailContainer";

const sampleDate = [
    {
        id: "1",
        title: "Europe Street beat 1",
        description: "Japanese Auction",
        src: "/Group-1837.png"
    },
    {
        id: "2",
        title: "Europe Street beat 2",
        description: "Heavy Duty Machinery Auction",
        src: "/Group-2072.png"
    },
    {
        id: "3",
        title: "Europe Street beat 3",
        description: "Heavy Duty Machinery Auction",
        src: "/Group-2072.png"
    }
]


function AuctionContainer(props) {
    const { params } = props;
    return (
        <>
            {
                !params.length ?
                    (<Row>
                        {
                            sampleDate.map((item, index) => (
                                <SmallCard item={item} key={index} onclickNavigate={`/auction/auction-details/${item.id}`} />
                            ))
                        }
                    </Row>)

                    : params.includes('auction-details') ? (

                        <DetailContainer params={params} sampleDate={sampleDate} />

                    ) : null

            }

        </>
    );
}
export default AuctionContainer;