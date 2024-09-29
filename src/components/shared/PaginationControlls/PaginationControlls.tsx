import { Button } from '@/components/ui/button';
import { FC, useEffect, useState } from 'react';


interface IPaginationControllsProps {
    searchParams: URLSearchParams;
    setSearchParams: React.Dispatch<React.SetStateAction<URLSearchParams>>;
    itemsCount: number;
}

const PaginationControlls: FC<IPaginationControllsProps> = ({ searchParams, itemsCount, setSearchParams }) => {
    const [currentPage, setCurrentPage] = useState(Number(searchParams.get("page") || "1"));
    const [totalPages, setTotalPages] = useState<number>(itemsCount || 1);

    useEffect(() => {
        if (!itemsCount) {
            setTotalPages(1);
        } else {
            setTotalPages(itemsCount % 8 === 0 ? itemsCount / 8 : Math.floor(itemsCount / 8) + 1);
        }
    }, [itemsCount])

    const handlePageChange = (pageNumber: string) => {
        setCurrentPage(Number(pageNumber));
        setSearchParams(prevParams => {
            const newParams = new URLSearchParams(prevParams);
            newParams.set("page", pageNumber);
            return newParams
        })
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