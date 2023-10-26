import { User  } from "./users";

export type FaqItem = {
  active: number | null;
  handleToggle: (index: number) => void;
  faq: User;
};
