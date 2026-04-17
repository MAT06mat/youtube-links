import type { LinkProps } from "../types/LinkProps";

function Link({ text, url }: LinkProps) {
    return (
        <div className="link link-text">
            {url ? (
                <a href={url} target="_blank">
                    <div className="text">{text}</div>
                </a>
            ) : (
                <div className="text">{text}</div>
            )}
        </div>
    );
}

export default Link;
