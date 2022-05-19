export interface Game {
    gameId: string;
    players: Player[];
    freeCards: PockerCard[];
}

export enum PlayerType {
    Bot,
    Human
}

export interface Player {
    id: string;
    name: string;
    type: PlayerType;
    cards: PockerCard[];
}

export interface PockerCard {
    name: string;
    rank: number;
    iconPath: string;
}