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
  winner?: string;
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
  {
    id: "e003",
    number: "#E003",
    title: "AWP | Dragon Lore",
    image: skinAsset.url,
    price: 10,
    totalNumbers: 200,
    soldNumbers: 200,
    status: "encerrada",
    description: "Rifa encerrada.",
    winner: "@player_br",
  },
  {
    id: "e002",
    number: "#E002",
    title: "AK-47 | Fire Serpent",
    image: skinAsset.url,
    price: 5,
    totalNumbers: 150,
    soldNumbers: 150,
    status: "encerrada",
    description: "Rifa encerrada.",
    winner: "@cs_pro",
  },
  {
    id: "e001",
    number: "#E001",
    title: "Karambit | Doppler",
    image: skinAsset.url,
    price: 7,
    totalNumbers: 120,
    soldNumbers: 120,
    status: "encerrada",
    description: "Rifa encerrada.",
    winner: "@skinhunter",
  },
];

export const getRaffleById = (id: string) => raffles.find((r) => r.id === id);
