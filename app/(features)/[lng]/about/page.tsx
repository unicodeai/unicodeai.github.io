
import { i18n, languages } from '@/i18n/i18n'
import React from 'react';
import Layout from '@/app/layout';
interface LangPageProps {
    params: {
        lng: string
    }
}

export async function generateStaticParams(): Promise<LangPageProps["params"][]> {
    return Object.keys(languages).map((l) => ({ lng: l }))
}



// const MyPage = ({ params }: LangPageProps) => {
//   return (
//     <Layout>
//       <div>
//         <h1>Page Content</h1>
//         {/* Other page-specific content */}
//       </div>
//     </Layout>
//   );
// };

// export default MyPage
const CustomFragment = ({ extraparam, children }) => {
    // 在这里可以使用 extraParam
    return <>{React.Children.map(children, child => React.cloneElement(child, { extraparam }))}</>;
};

export default async function HomePage({ params }: LangPageProps) {
    i18n.locale(params.lng);
    return (
        <React.Fragment>
            <div>xcc</div>
        </React.Fragment>
    );
};
