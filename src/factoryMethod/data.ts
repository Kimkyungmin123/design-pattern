export interface Data {
  type: string;
  attrs: { name: string; size: number };
}

export const data: Data[] = [
  { type: "Nike", attrs: { name: "a", size: 250 } },
  { type: "Nike", attrs: { name: "b", size: 240 } },
  { type: "Puma", attrs: { name: "c", size: 230 } },
  { type: "Adidas", attrs: { name: "d", size: 220 } },
  { type: "Nike", attrs: { name: "e", size: 260 } },
];
