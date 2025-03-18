export type ChampionDetail = {
  id: string;
  key: string;
  name: string;
  title: string;
  image: ChampionImage;
  lore: string;
  blurb: string;
  info: ChampionInfo;
  spells: ChampionSpell[];
};

export type Champion = Pick<ChampionDetail,KeysForBasicChampionInfo>;
export type KeysForBasicChampionInfo = 'id' | 'key' | 'name' | 'title' | 'image'

export type ChampionImage = {
  full: string;
  sprite: string;
};

export type ChampionInfo = {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
};

export type ChampionSpell = {
  id: string;
  name: string;
  description: string;
  image: ChampionSpellImage;
};

export type ChampionSpellImage = {
  full: string;
};