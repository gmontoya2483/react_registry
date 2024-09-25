import {searchPackages} from '../../api/queries/searchPackages.ts';
import type {PackageSummary} from '../../api/types/packageSummary.ts';
import {SearchLoaderResult} from './searchLoaderResult.ts';


interface LoaderArgs {
    request: Request
}

export const searchLoader = async  ({request}: LoaderArgs):Promise<SearchLoaderResult> => {
    try {
        const {searchParams} = new URL(request.url);
        const term = searchParams.get('term');
        if(!term) {
            throw new Error('Search term must be provided');
        }

        const results:PackageSummary[] = await searchPackages(term);
        return {
            searchResults: results
        }


    } catch(e) {
        console.error('Error', e);
        return {
            searchResults: []
        };
    }


}
