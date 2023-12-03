
import rosetta from 'rosetta';


export const languages = {
    en: {
        Menu: {
            Home: 'Home',
            About: "About",
            Blog: "Blog",
            Feature: 'Features',
            Component:"Components",
            Contact:"Contact"
        }
    },
    cn: {
        Menu: {
            Home: '首页',
            About: "关于",
            Blog: "博客",
            Feature: '功能',
            Component:"组件",
            Contact:"联系我们"
        },
    }
}
export const locale = (pathname) => {
    let lang = pathname.split("/")[1]
    if (lang && Object.keys(languages).includes(lang)) {
        return lang
    }
    return "en"
}

export const i18n = rosetta(languages);
