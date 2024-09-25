import type {PackageDetails} from '../types/packageDetails.ts';

const FEATURED_PACKAGES = [
    'react',
    'typescript',
    'esbuild',
    'vite'
];

export const getFeaturedPackages = async () => {

    const promises = FEATURED_PACKAGES.map(async (feature) => {
        const res =  await fetch(`https://registry.npmjs.org/${feature}`);
        return res.json();
    });

    const data = await Promise.all(promises);

    return data as PackageDetails[];

}
