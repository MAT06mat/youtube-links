import type { ItemProps } from "./ItemProps";

export type FolderProps = {
    type: "folder";
    text: string;
    list: ItemProps[];
    desc?: string;
    shortDesc?: string;
};
