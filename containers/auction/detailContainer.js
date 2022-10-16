import { useEffect, useState } from "react";

import { SmallCard } from "../../components/cards";

const DetailContainer = (props) => {
    const { params, sampleDate } = props;
    const [selectedItem, setSelectedItem] = useState({});

    useEffect(() => {
        if (params.length && sampleDate.length) {
            const item = sampleDate.find(a => a && a.id === params[params.length - 1])
            setSelectedItem(item);
        }

    }, [params])

    return (
        <SmallCard item={selectedItem} />
    );

};

export default DetailContainer;