import classNames from 'classnames';
import styles from './_index.module.scss';
import { LinksFunction, LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import commonStyles from '~/styles/common-styles.module.scss';
import { getUrlOriginWithPath } from '~/utils';
import TypescriptSvg from '../../../src/assets/svg/typescript.svg';
import ViteSvg from '../../../src/assets/svg/vite.svg';
import { CContainer, CHeader, CHeaderNav, CHeaderBrand, CButton, CLink } from '@coreui/react';
import { cilPencil } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import '@coreui/coreui/dist/css/coreui.min.css';

export const loader = ({ request }: LoaderFunctionArgs) => {
    return { canonicalUrl: getUrlOriginWithPath(request.url) };
};

export default function HomePage() {
    return (
        <div>
          <div>
            <CContainer fluid>
                <CHeader className="mb-4">
                    {/* Left Section: Brand */}
                    <CHeaderBrand href="#">CoreUI Brand</CHeaderBrand>

                    {/* Center Section: Navigation */}

                    {/* Right Section: Button */}
                    <CHeaderNav className="ms-auto">
                        <CButton color="primary" variant="outline">
                            <CIcon icon={cilPencil} className="me-2" />
                            Edit
                        </CButton>
                    </CHeaderNav>
                </CHeader>
                <CHeaderNav className="mx-auto">
                    <CLink href="#" className="text-decoration-none">
                        Home
                    </CLink>
                    <CLink href="#" className="text-decoration-none ms-4">
                        About
                    </CLink>
                    <CLink href="#" className="text-decoration-none ms-4">
                        Contact
                    </CLink>
                </CHeaderNav>
            </CContainer>
        </div>

            <div className={styles.root}>
                <h2 className={styles.title}>Welcome to your App Homepage 🎉</h2>
                <span>
                    Double click to edit App component
                    <br />
                    &amp; drag here elements from + Add <b>Elements</b> Panel
                </span>
                <p className={styles.paragraph}>
                    This project is using <img src={ViteSvg} width="12" />+
                    <img src={TypescriptSvg} width="12" />
                    Visit vitejs.dev to learn more.{' '}
                </p>
            </div>
        </div>
    );
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
    const title = 'Blank Starter';
    const description = 'Welcome to the Blank Starter';
    const imageUrl = 'https://website-starter.com/og-image.png';

    return [
        { title },
        {
            name: 'description',
            content: description,
        },
        {
            tagName: 'link',
            rel: 'canonical',
            href: data?.canonicalUrl,
        },
        {
            property: 'robots',
            content: 'index, follow',
        },
        {
            property: 'og:title',
            content: title,
        },
        {
            property: 'og:description',
            content: description,
        },
        {
            property: 'og:image',
            content: imageUrl,
        },
        {
            name: 'twitter:card',
            content: 'summary_large_image',
        },
        {
            name: 'twitter:title',
            content: title,
        },
        {
            name: 'twitter:description',
            content: description,
        },
        {
            name: 'twitter:image',
            content: imageUrl,
        },
    ];
};

export const links: LinksFunction = () => {
    return [
        {
            rel: 'icon',
            href: '/favicon.ico',
            type: 'image/ico',
        },
    ];
};
