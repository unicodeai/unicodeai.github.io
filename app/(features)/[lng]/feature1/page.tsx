
import { i18n, languages } from '@/i18n/i18n'

interface LangPageProps {
    params: {
        lng: string
    }
}

export async function generateStaticParams(): Promise<LangPageProps["params"][]> {
    return Object.keys(languages).map((l) => ({ lng: l }))
}

export default async function HomePage({ params }: LangPageProps) {
    i18n.locale(params.lng);
    return (
        <>
            <div> {i18n.t('intro.text')} </div>
        </>
    );
};

