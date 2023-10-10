import { Poppins } from 'next/font/google'

const fontPoppins = Poppins({
    weight: [ '700'],
    style: ['normal'],
    subsets: ['latin']
})

export const useFont = () => {
    return fontPoppins
}

