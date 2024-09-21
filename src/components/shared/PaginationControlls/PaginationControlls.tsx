import { Button } from '@/components/ui/button';
import { FC, useEffect, useState } from 'react';


interface IPaginationControllsProps {
    searchParams: URLSearchParams;
    setSearchParams: React.Dispatch<React.SetStateAction<URLSearchParams>>;
    updateSearchParams: (key: string, val: string) => void;
    carsCount: number;
}

const PaginationControlls: FC<IPaginationControllsProps> = ({ searchParams, updateSearchParams, carsCount }) => {
    const [currentPage, setCurrentPage] = useState(Number(searchParams.get("page") || "1"));
    const [totalPages, setTotalPages] = useState<number>(carsCount || 1);


    useEffect(() => {
        if (!carsCount) {
            setTotalPages(1);
        } else {
            setTotalPages(carsCount % 8 === 0 ? carsCount / 8 : Math.floor(carsCount / 8) + 2);
        }
    }, [carsCount])

    const handlePageChange = (pageNumber: string) => {
        updateSearchParams("page", pageNumber);
        setCurrentPage(Number(pageNumber));
    }

    return (
        <div className='flex items-center justify-center flex-wrap gap-2'>
            <Button onClick={() => currentPage > 1 && handlePageChange((currentPage - 1).toString())} variant={"secondary"} isArrowIcon={false}>Prev</Button>
            {
                [...Array(totalPages)].map((_, index) => (
                    <Button onClick={() => handlePageChange((index + 1).toString())} variant={currentPage === (index + 1) ? "secondaryActive" : "secondary"} key={index} isArrowIcon={false}>{index + 1}</Button>
                ))
            }

            <Button onClick={() => currentPage < totalPages && handlePageChange((currentPage + 1).toString())} variant={"secondary"} isArrowIcon={false}>Next</Button>
        </div>
    );
};

export default PaginationControlls;