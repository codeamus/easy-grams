import { useRouter, Href } from 'expo-router';

export const useAppNavigation = () => {
  const router = useRouter();

  const navigateTo = (path: Href) => {
    router.push(path);
  };

  const replaceTo = (path: Href) => {
    router.replace(path);
  };

  const goBack = () => {
    router.back();
  };

  return {
    navigateTo,
    replaceTo,
    goBack,
  };
};
