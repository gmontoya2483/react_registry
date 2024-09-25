import {useLoaderData} from 'react-router-dom';
import type {SearchLoaderResult} from './searchLoaderResult';
import PackageListItem from '../../components/PackageListItem.tsx';

export default function SearchPage() {

    const {searchResults} = useLoaderData() as SearchLoaderResult;

    const renderedResults = searchResults.map(
        (pack)=> <PackageListItem key={pack.name} pack={pack}/>
    );



    return (
        <div>
            <h1 className="text-2xl font-bold my-6">Search Results</h1>
            <div className="space-y-4 mt-4">
                {renderedResults}
            </div>

        </div>);
}
