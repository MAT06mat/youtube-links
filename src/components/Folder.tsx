import { useState } from "react";
import type { FolderProps } from "../types/FolderProps";
import ItemList from "./ItemList";
import ChevronRight from "../assets/svg/chevron-right";

function Folder({ text, list, shortDesc, desc }: FolderProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={"folder" + (isOpen ? " open" : "")} title={shortDesc}>
            <button
                className="dropdown"
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <div className="title-area">
                    <span>{text}</span>
                    {shortDesc && (
                        <small className="short-desc">{shortDesc}</small>
                    )}
                </div>

                <ChevronRight />
            </button>
            <div className="list-wrapper">
                <ItemList list={list} desc={desc} />
            </div>
        </div>
    );
}

export default Folder;
