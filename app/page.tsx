import localFont from 'next/font/local';
import { Timeline } from './components/timeline/timeline';

const interFont = localFont({
    src: [
        {
            path: './fonts/Inter/Inter-VariableFont_opsz,wght.ttf',
            style: 'normal'
        },
        {
            path: './fonts/Inter/Inter-Italic-VariableFont_opsz,wght.ttf',
            style: 'italic'
        }
    ]
});

const gentiumFont = localFont({
    src: [
        {
            path: './fonts/GentiumPlus/GentiumPlus-Regular.ttf',
            style: 'normal'
        },
        {
            path: './fonts/GentiumPlus/GentiumPlus-Italic.ttf',
            style: 'italic'
        }
    ]
})

const titles = ["Work experience", "Technologies", "Projects", "About me"]

export default function Home() {
  return (
    <main className={`min-h-screen w-full flex flex-row py-32 px-16 sm:items-start ${interFont.className}`}>
        <Timeline titles={titles}/>
        <div className='mx-auto'>
            <p className={`text-9xl italic ${gentiumFont.className}`}>Noah Arsić</p>
            <p className={`text-3xl italic ${gentiumFont.className}`}>est. 2005</p>
            <p className="text-6xl mt-10">Passionate software developer</p>
        </div>
      </main>
  );
}
