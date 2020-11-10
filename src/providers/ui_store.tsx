import { Store } from 'pullstate';

export interface IUIStore {
  isDarkMode: boolean;
}

export const UIStore = new Store<IUIStore>({
  isDarkMode: true,
});
