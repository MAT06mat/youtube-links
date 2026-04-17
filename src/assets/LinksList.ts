import type { ItemProps } from "../types/ItemProps";

export const LinksList: ItemProps[] = [
    {
        type: "playlist",
        id: "PLk0SXGPX9sLSackL00pWN-3LRGxynElbF",
        title: "INS'Anomalies",
    },
    {
        type: "playlist",
        id: "PLk0SXGPX9sLT7a2Uigw15XD72KMx5B4vg",
        title: "Chansons studieuses",
    },
    {
        type: "folder",
        text: "Autres",
        list: [
            {
                type: "video",
                videoId: "NH1cJScB6oU",
                title: "Cette salle en Mirzakhani à 22h00...",
            },
            {
                type: "video",
                videoId: "3E0HKJSCLYQ",
                title: "Ce qui se produit quand on reste à la BMC après 22h00",
            },
        ],
    },
];
