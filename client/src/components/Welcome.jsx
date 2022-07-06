//import {AIFillPlayCircle} from 'react-icons/ai';
//import {SiEthereum} from 'react-icons/si';
//import {BsInfoCircle} from 'react-icons/bs';

import {Loader} from './';

const Welcome = () => {

    const connectWallet = () => {

    }

    return  (
        <div className='flex w-full justify-center items-center pt-12'>
            <div className='flex md:flex-row flex-col items-start justify-between md:p-2- py-12 px-4'>
                <div className='flex flex-1 justify-start flex-col md:mr-10 p-10'>
                    <h1 className='font-serif font-bold text-5xl  decoration-4 text-white py-2 text-center' >
                        A social medial platform where<br/> 
                         you can send crypto to your friends <br/>
                        and mint, buy and sell NFT
                        
                    </h1>
                    <p className='text-center font-bold mt-10 mb-5 text-white font-medium md:w-0/12 w-11/12'>
                        Connect, transfer, Create
                    </p>
                    <button 
                    type='button'
                    onClick={connectWallet}
                    className='flex py-4 px-2 justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]'
                    > <p className='text-white  text-base font-semibold'> Connect Wallet</p>
                    </button>

                    <div cl>

                    </div>
                </div>
            </div>
        </div>
    );

}

export default Welcome;