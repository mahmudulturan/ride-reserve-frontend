import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { RxCross1 } from "react-icons/rx";

const PaymentErrorPage: FC = () => {
    const { id } = useParams();
    return (
        <div className='flex items-center justify-center' style={{ minHeight: 'calc(100vh - 116px)' }}>
            <div className='text-center space-y-2'>
                <div className='flex items-center justify-center my-3'>
                    <span className='py-10 bg-red-400 rounded-full flex items-center justify-center size-20'>
                        <RxCross1 className='size-10 text-white' />
                    </span>
                </div>
                <h1 className='text-5xl font-bold'>Error!</h1>
                <p className='text-3xl font-light'>Your payment was failed. Your transaction ID is {id}</p>
            </div>
        </div>
    );
};

export default PaymentErrorPage;