import type { LinkProps } from "../types/LinkProps";

function Link({ text, url }: LinkProps) {
    return (
        <div className="link link-text">
            <a href={url} target="_blank">
                <div className="text">{text}</div>
            </a>
        </div>
    );
}

export default Link;
