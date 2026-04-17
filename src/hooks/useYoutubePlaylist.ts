import { useEffect, useState } from "react";

interface Thumbnail {
    url: string;
    width: number;
    height: number;
}

interface ResponseProps {
    items: {
        id: string;
        snippet: {
            publishedAt: string;
            channelId: string;
            title: string;
            description: string;
            thumbnails: {
                default: Thumbnail;
                medium: Thumbnail;
                high: Thumbnail;
                standard: Thumbnail;
                maxres: Thumbnail;
            };
            channelTitle: string;
            playlistId: string;
            position: number;
            resourceId: {
                kind: string;
                videoId: string;
            };
        };
    }[];
    pageInfo: {
        totalResults: number;
        resultsPerPage: number;
    };
}

interface VideoProps {
    id: string;
    title: string;
    link: string;
    thumbnail: string;
}

interface CachedData {
    timestamp: number;
    videos: VideoProps[];
}

function useYouTubePlaylist(playlistId: string) {
    const [videos, setVideos] = useState<VideoProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<null | string>(null);

    const API_KEY = "AIzaSyBsVNKMjzmpDKAv8IEJplLm8oogd2Xs85s";
    const BASE_URL = "https://www.googleapis.com/youtube/v3/playlistItems";
    const CACHE_DURATION = 60 * 60 * 1000;

    useEffect(() => {
        const fetchPlaylistData = async () => {
            const cacheKey = `yt_playlist_${playlistId}`;
            const cached = localStorage.getItem(cacheKey);

            if (cached) {
                const parsedCache: CachedData = JSON.parse(cached);
                const isExpired =
                    Date.now() - parsedCache.timestamp > CACHE_DURATION;

                if (!isExpired) {
                    setVideos(parsedCache.videos);
                    setLoading(false);
                    return;
                }
            }

            try {
                const response = await fetch(
                    `${BASE_URL}?part=snippet&maxResults=50&playlistId=${playlistId}&key=${API_KEY}`,
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch playlist data");
                }

                const data: ResponseProps = await response.json();

                // Map the API response to a simpler format
                const formattedVideos = data.items.map((item) => ({
                    id: item.snippet.resourceId.videoId,
                    title: item.snippet.title,
                    link: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`,
                    thumbnail:
                        item.snippet.thumbnails.high?.url ||
                        item.snippet.thumbnails.default?.url,
                }));

                // Cache data
                const dataToCache: CachedData = {
                    timestamp: Date.now(),
                    videos: formattedVideos,
                };
                localStorage.setItem(cacheKey, JSON.stringify(dataToCache));

                setVideos(formattedVideos);
                setLoading(false);
            } catch (err) {
                setError((err as Error).message);
                setLoading(false);
            }
        };

        if (playlistId) {
            fetchPlaylistData();
        }
    }, [playlistId, CACHE_DURATION]);

    return { videos, loading, error };
}

export default useYouTubePlaylist;
