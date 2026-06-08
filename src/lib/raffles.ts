import caparifaAsset from "@/assets/caparifa.png.asset.json";
import uspAsset from "@/assets/usp.png.asset.json";
import fireAsset from "@/assets/fire.png.asset.json";
import karambitAsset from "@/assets/karambit.png.asset.json";

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
  winningNumber?: number;
}

export const raffles: Raffle[] = [
  {
    id: "001",
    number: "#004",
    title: "StatTrak™ M4A1-S | Black Lotus",
    image: caparifaAsset.url,
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
    title: "USP-S | Printstream",
    image: uspAsset.url,
    price: 10,
    totalNumbers: 100,
    soldNumbers: 100,
    status: "encerrada",
    description: "Rifa encerrada.",
    winner: "Francieli Bueno",
    winningNumber: 42,
  },
  {
    id: "e002",
    number: "#E002",
    title: "AK-47 | Fire Serpent",
    image: fireAsset.url,
    price: 5,
    totalNumbers: 100,
    soldNumbers: 100,
    status: "encerrada",
    description: "Rifa encerrada.",
    winner: "Gabrielle Baldo",
    winningNumber: 17,
  },
  {
    id: "e001",
    number: "#E001",
    title: "Karambit | Doppler",
    image: karambitAsset.url,
    price: 7,
    totalNumbers: 100,
    soldNumbers: 100,
    status: "encerrada",
    description: "Rifa encerrada.",
    winner: "Jefferson André",
    winningNumber: 88,
  },
];

export const getRaffleById = (id: string) => raffles.find((r) => r.id === id);
