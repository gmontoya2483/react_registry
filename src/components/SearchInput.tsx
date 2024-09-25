import {useState } from 'react';
import {useNavigate, Form} from 'react-router-dom';
import {VscSearch} from 'react-icons/vsc';

export default function SearchInput() {
    const [term, setTerm] = useState<string>('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Submit!!!')
        navigate(`/search?term=${term}`);
        setTerm('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='relative'>
                <div className='absolute inset-y-0 flex items-center pl-3'>
                    <VscSearch className="h-5 w-5 text-gray-500"/>
                </div>
                <input
                    className="pl-10 py-2 w-full border-0 shadow-none hover:bg-gray-50"
                    placeholder="Search Packages"
                    value={term}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTerm(e.target.value)}
                />

            </div>

        </form>
    );


    // return (
    //     <Form action='/search' method='GET'>
    //         <input
    //             name='term'
    //         />
    //     </Form>
    // );
}
