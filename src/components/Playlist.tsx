import useYouTubePlaylist from "../hooks/useYoutubePlaylist";
import type { ItemProps } from "../types/ItemProps";
import type { PlaylistProps } from "../types/PlaylistProps";
import Folder from "./Folder";

function Playlist({ id, title, shortDesc, desc }: PlaylistProps) {
    const { videos, loading, error } = useYouTubePlaylist(id);

    let itemList: ItemProps[] = videos.map((video) => ({
        type: "video",
        videoId: video.id,
        title: video.title,
    }));

    if (loading) {
        itemList = [
            { type: "link", text: "Chargement...", url: "" },
            ...itemList,
        ];
    }

    if (error) {
        itemList = [
            {
                type: "link",
                text: `Error: ${error}`,
                url: "",
            },
            ...itemList,
        ];
    }

    itemList = [
        {
            type: "link",
            url: `https://www.youtube.com/playlist?list=${id}`,
            text: "Lien vers la playlist YouTube",
        },
        ...itemList,
    ];

    return (
        <Folder
            type="folder"
            text={title}
            shortDesc={shortDesc}
            desc={desc}
            list={itemList}
        />
    );
}

export default Playlist;
