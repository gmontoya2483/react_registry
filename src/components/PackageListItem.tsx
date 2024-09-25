import {Link} from 'react-router-dom';

interface PackageSummaryProps {
    pack

}

export default function PackageListItem({pack}: PackageSummaryProps) {

    const renderedKeywords = (pack.keywords || []).map((keyword) =>{
        return (
            <div key={keyword} className='border py-0.5 px-1 text-xs bg-slate-200 rounded shadow'>
                {keyword}
            </div>
        );
    });

    return (
        <div className="border p-4 rounded flex justify-between items-center">
            <div className="flex flex-col gap-2">
                <Link className="text-xl font-bold" to={`/packages/${pack.name}`}>
                    {pack.name}
                </Link>
                <p className="text-sm text-gray-500">
                    {pack.description}
                </p>
                <div className="flex gap-2.5 flex-wrap">
                    {renderedKeywords}
                </div>
            </div>
            <div className='mr-6'>

                <Link className="py-2 px-3 rounded bg-black text-white text-lg shadow" to={`/packages/${pack.name}`}>
                   View
                </Link>


            </div>

        </div>
    );
}
