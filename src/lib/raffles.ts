import skinAsset from "@/assets/skin-001.png.asset.json";

export type RaffleStatus = "ativa" | "em-breve" | "encerrada";

export interface Raffle {
  id: string;
  number: string;
  title: string;
  image: string;
  price: number;
  totalNumbers: number;
  soldNumbers: number;
  status: RaffleStatus;
  description: string;
}

export const raffles: Raffle[] = [
  {
    id: "001",
    number: "#001",
    title: "StatTrak™ M4A1-S | Black Lotus",
    image: skinAsset.url,
    price: 3,
    totalNumbers: 100,
    soldNumbers: 57,
    status: "ativa",
    description:
      "Concorra à exclusiva StatTrak™ M4A1-S | Black Lotus. Skin rara do Counter-Strike 2, entregue diretamente na sua conta Steam após o sorteio.",
  },
];

export const getRaffleById = (id: string) => raffles.find((r) => r.id === id);
