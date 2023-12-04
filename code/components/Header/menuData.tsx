import { Menu } from "@/lib/types/menu";
import { languages, locale, i18n } from '@/lib/i18n/i18n'


export const getMenuData = (pathname) => {
  const lang = locale(pathname)
  i18n.locale(lang)
  const prefix = lang === 'en' ? "" : `/${lang}`
  const menuData: Menu[] = [
    {
      id: 1,
      title: i18n.t("Menu.Home"),
      path: prefix ? prefix : "/",
      newTab: false,
    },
    {
      id: 2,
      title: i18n.t("Menu.About"),
      path: prefix ? `${prefix}/about` : `/en/about`,
      newTab: false,
    },
    {
      id: 33,
      title: i18n.t("Menu.Blog"),
      path: `/blogs`,
      newTab: false,
    },
    {
      id: 33,
      title: i18n.t("Menu.Component"),
      path: `/components`,
      newTab: false,
    },
    {
      id: 4,
      title: i18n.t("Menu.Feature"),
      newTab: false,
      submenu: [
        {
          id: 41,
          title: "About",
          path: `${prefix}/about`,
          newTab: false,
        }
      ],
    },
  ];
  return menuData
}
