import type { VideoProps } from "../types/VideoProps";

function Video({ videoId, title }: VideoProps) {
    const url = `https://www.youtube.com/watch?v=${videoId}`;
    const src = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;

    return (
        <div className="link">
            <a href={url} target="_blank">
                <img src={src} className="thumbnail" title={title} />
                <div className="text">{title}</div>
            </a>
        </div>
    );
}

export default Video;
