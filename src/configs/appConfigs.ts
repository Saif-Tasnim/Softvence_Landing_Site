import { Poppins } from 'next/font/google';

export const SITE_TITLE_DEFAULT =
    'Bangladesh Tourism Network';
export const SITE_TITLE_TEMPLATE_DEFAULT = `%s - BTN`;
export const SITE_DESCRIPTION_DEFAULT =
    'A smart software solution to ensure accountability for all citizens towards the government';
export const SITE_VERIFICATION_GOOGLE_DEFAULT =
    'google-site-verification=adwdawdaw';

export const FONT_DEFAULT = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
