import { useFont } from "@/hook/useFont"

export default function Example2() {
    const font = useFont()

    return (
        <div className={`w-full mt-5 ${font.className}`}>
            <p className='text-center'>Example of a paragraph to use in Next.js</p>
        </div>
    )
}