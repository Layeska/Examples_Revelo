import Image from 'next/image'

export default function Example1() {
    return (
        <div className='flex justify-center w-full mt-3'>
            <Image
              src='/next.svg'
              alt='Vercel Logo'
              className='w-1/5 p-10 bg-red-200 rounded-lg'
              width={80}
              height={30}
              priority
            />
        </div>
    )
}