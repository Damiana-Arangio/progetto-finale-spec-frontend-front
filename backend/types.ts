export type Wine = {
    title: string;
    category: "rosso" | "bianco" | "rosato";
    type: "fermo" | "frizzante" | "spumante";
    image: string;
    region: string;
    grape: string;
    year: number;
    price: number;
    alcohol: number;
    description: string;
};