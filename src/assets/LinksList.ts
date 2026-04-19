import type { ItemProps } from "../types/ItemProps";

export const LinksList: ItemProps[] = [
    {
        type: "playlist",
        id: "PLk0SXGPX9sLSackL00pWN-3LRGxynElbF",
        title: "INS'Anomalies",
        desc: "Une série sur l'INSA et la réussite, avec un soupçon de comédie et de fantastique.",
        shortDesc: "Une série sur l'INSA",
    },
    {
        type: "playlist",
        id: "PLk0SXGPX9sLT7a2Uigw15XD72KMx5B4vg",
        title: "Chansons studieuses",
        desc: "Des chansons sur les matières de l'INSA, dans leurs bons comme leurs mauvais côtés.",
        shortDesc: "Chansons sur l'INSA",
    },
    {
        type: "folder",
        text: "Autres",
        desc: "Des vidéos humoristiques sur à peu près n'importe quel sujet en lien avec l'INSA.",
        shortDesc: "Autres vidéos",
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
