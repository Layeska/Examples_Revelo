import Image from 'next/image'
import ImagenPrueba from '@/public/img/imagenPrueba.jpg'

export default function About() {
    return (
        <div className='flex justify-center w-full mt-3'>
            <Image
              src={ImagenPrueba}
              alt='Image generated with AI'
              className='w-1/5 p-2 bg-red-200 rounded-lg'
            />
        </div>
    )
}