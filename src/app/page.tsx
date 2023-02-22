import Image from "next/image";
import { Outfit } from '@next/font/google'

const outfit = Outfit({ subsets: ['latin'] })

export default function Home() {
    return (
        <main className={`${outfit.className} bg-grey h-full px-6 py-[85px] grid place-items-center`}>
            <div className="bg-white p-4 rounded-[20px] text-center max-w-[320px]">
                <div className={"relative w-[288px] h-[288px] mx-auto"}>
                    <Image className={"rounded-[10px]"} src={"/images/image-qr-code.png"} alt={"Qr code"} fill/>
                </div>

                <h1 className={"font-bold text-[22px] px-4 leading-[28px] mt-6"}>Improve your front-end skills by building projects</h1>
                <p className={"pb-6 text-darkGrey mt-4 px-5 text-[15px] tracking-[0.1875px] leading-[19px]"}>Scan the QR code to visit Frontend Mentor and take your coding
                    skills to the next level</p>
            </div>
        </main>
    )
}
