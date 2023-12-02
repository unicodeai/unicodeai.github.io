import { Menu } from "@/types/menu";
import { languages } from '@/i18n/i18n'

const AllFeatures = ['about', 'feature1'].reduce((accumulator, currentValue, index) => {
  let all_features = Object.keys(languages).map((lang) => {
    return {
      id: 40 + index + 1,
      title: currentValue,
      path: `/${lang}/${currentValue}.html`,
      newTab: false,
    }
  })
  return accumulator.concat(all_features)
}, []);

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Blog",
    path: "/blogs",
    newTab: false,
  },
  {
    id: 4,
    title: "Feature",
    newTab: false,
    submenu: AllFeatures
    // [
    // {
    //   id: 41,
    //   title: "About Page",
    //   path: "/about",
    //   newTab: false,
    // },
    // ],
  },
];
export default menuData;
