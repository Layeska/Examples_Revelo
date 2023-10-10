import Link from 'next/link'

export default function Home() {
    return (
        <div className='flex gap-2 m-10'>
            <Link href='about'>About</Link>
            <Link href='fqa'>Fqa</Link>
        </div>
    )
}
