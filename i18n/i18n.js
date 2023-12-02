
import rosetta from 'rosetta';
import { usePathname, useSearchParams } from 'next/navigation'

export const languages = {
    en: {
        hello: "hello1",
        intro: {
            welcome: 'Welcome, {{username}}!',
            text: 'I hope you find this useful.',
        },
        support(obj) {
            let hour = Math.floor(Math.random() * 3) + 9;
            let str = `For questions, I'm available on ${obj.date.toLocaleDateString()}`;
            str += `, any time after ${hour}:00.`
            return str;
        }
    },
    ds: {
        hello: "hello2"
    }
}
export const locale = () => {
    const pathname = usePathname()
    let lang = pathname.split("/")[1]
    if (lang && Object.keys(languages).includes(lang)) {
        return lang
    }
    return "en"
}

export const i18n = rosetta(languages);
