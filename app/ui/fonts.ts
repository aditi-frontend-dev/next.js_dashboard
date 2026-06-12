import {Inter, Lusitana} from 'next/font/google';

// adding this font to body element in app/layout.tsx
export const inter = Inter({subsets: ['latin']}); // primary font

// secondary font
export const lusitana = Lusitana({
        weight: ["400", "700"],
        subsets: ['latin']
}) 
