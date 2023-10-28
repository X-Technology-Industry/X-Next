import type { FC } from 'react';

interface ErrorProps {
    statusCode?: number;
    getInitialProps?:any
}

const Error: FC<ErrorProps> = ({ statusCode }) => {
    return <section>
             <p className="text-center text-[64px] font-bold capitalize  text-zinc-800 my-24">
                {statusCode
                ? `An error occurred on server`
                : 'An error occurred on client'}
            </p>
            <p className="text-center text-[64px] font-bold capitalize  text-zinc-800 my-24">Woops!</p>
            <p className="text-center text-[64px] font-bold capitalize  text-zinc-800 ">{'Something went wrong:('}</p>
            <p className="text-base font-normal not-italic text-center text-gray-700 mb-6 mt-24">
                Have you tried turning it off and on again?
            </p>
    </section>
}


export const getServerSideProps = async ({ res, err }: { res: any; err: any }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { props: { statusCode } };
  };


export default Error;
