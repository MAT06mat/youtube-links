import type { ItemProps } from "../types/ItemProps";
import Item from "./Item";

interface Props {
    list: ItemProps[];
    desc?: string;
}

function ItemList({ list, desc }: Props) {
    return (
        <div className={"item-list"}>
            {desc && <p className="long-desc">{desc}</p>}
            {list.map((item, i) => (
                <Item item={item} key={i} />
            ))}
        </div>
    );
}

export default ItemList;
