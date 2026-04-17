import type { LinkProps } from "./LinkProps";
import type { FolderProps } from "./FolderProps";
import type { VideoProps } from "./VideoProps";
import type { PlaylistProps } from "./PlaylistProps";

export type ItemProps = FolderProps | LinkProps | VideoProps | PlaylistProps;
