import {getFeaturedPackages} from '../../api/queries/getFeaturedPackages';
import {PackageDetails} from '../../api/types/packageDetails';


export interface HomeLoaderResult {
    featuredPackages: PackageDetails[];
}

export const homeLoader = async ():Promise<HomeLoaderResult> => {

    const featuredPackages: PackageDetails[] = await getFeaturedPackages();

    return {
        featuredPackages
    }
}
