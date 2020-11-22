import { addMessages, getLocaleFromNavigator, init, isLoading, _ } from 'svelte-i18n';
import en from './en.json';
import pt from './pt.json';


addMessages('en', en);
addMessages('pt', pt);

init({
  fallbackLocale: 'pt',
  initialLocale: getLocaleFromNavigator(),
});

export { _, isLoading };
