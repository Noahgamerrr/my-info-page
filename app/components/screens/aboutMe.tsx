import Portrait from "@/public/images/aboutMe/Portrait.jpeg";
import Image from 'next/image';
import School from "@/public/svg/school.svg";
import Map from "@/public/svg/map.svg";
import GitHub from "@/public/svg/GitHub.svg";
import LinkedIn from "@/public/svg/LinkedIn.svg";

export default function AboutMe() {
    return (
        <div className='min-h-screen xl:h-screen max-lg:mb-12'>
            <div className='sticky top-1/8'>
                <p className="font-bold text-3xl lg:text-6xl">About Me</p>
                <div className='grid grid-cols-2 max-xl:grid-cols-6 max-md:gap-5 md:gap-10 xl:h-[87.5%] xl:pt-10 max-xl:pt-8'>
                    <span className="flex max-xl:contents">
                        <Image
                            src={Portrait}
                            alt="Picture of me"
                            className="h-auto xl:w-3/10 lg:w-1/2 max-xl:mx-auto mr-5 max-xl:col-span-3"
                        />
                        <span className="flex flex-col gap-5 max-xl:col-span-3">
                            <div>
                                <Image
                                    src={Map}
                                    alt="Location"
                                    className="inline mr-5 size-6"
                                />
                                <span>Austria</span>
                            </div>
                            <div>
                                <Image
                                    src={School}
                                    alt="School"
                                    className="inline mr-5 size-6"
                                />
                                <span>HTL Villach</span>
                            </div>
                            <div>
                                <Image
                                    src={GitHub}
                                    alt="GitHub"
                                    className="inline mr-5 size-6"
                                />
                                <span>Noahgamerrr</span>
                            </div>
                            <div>
                                <Image
                                    src={LinkedIn}
                                    alt="LinkedIn"
                                    className="inline mr-5 size-6"
                                />
                                <span>arsicn</span>
                            </div>
                        </span>
                    </span>
                    <div className="md:max-xl:mt-10 max-xl:contents">
                        <p className="font-bold text-xl lg:text-4xl md:mb-5 max-md:col-span-6 md:max-xl:col-span-2">Competitions & Certificates</p>
                        <ul className="max-md:col-span-6 max-xl:col-span-4 max-md:pt-0">
                            <li className="text-sm md:text-xl mb-2">Cambridge Certificate in Advanced English C2</li>
                            <li className="text-sm md:text-xl mb-2">2nd place @ Knapp Coding Contest 2025</li>
                            <li className="text-sm md:text-xl mb-2">3nd price @ Junior Mathematical Olympiad in Carinthia & Styria 2019</li>
                            <li className="text-sm md:text-xl mb-2">2nd price @ Junior Mathematical Olympiad in Carinthia & Styria 2020</li>
                        </ul>
                    </div>
                    <div className="md:max-xl:mt-10 max-xl:contents">
                        <p className="font-bold text-xl lg:text-4xl md:mb-5 max-md:col-span-6 max-xl:col-span-2 max-md:mt-5">Hobbies</p>
                        <ul className="max-md:col-span-6 max-xl:col-span-4">
                            <li className="text-sm md:text-xl mb-2">Programming</li>
                            <li className="text-sm md:text-xl mb-2">Reading</li>
                            <li className="text-sm md:text-xl mb-2">Languages & Linguistics</li>
                            <li className="text-sm md:text-xl mb-2">E-guitar</li>
                            <li className="text-sm md:text-xl mb-2">Chess</li>
                            <li className="text-sm md:text-xl mb-2">Maths</li>
                            <li className="text-sm md:text-xl mb-2">Biking</li>
                        </ul>
                    </div>
                    <div className="md:max-xl:mt-10 max-xl:contents">
                        <p className="font-bold text-xl lg:text-4xl md:mb-5 max-md:col-span-6 max-xl:col-span-2 max-md:mt-5">Languages</p>
                        <ul className="max-md:col-span-6 max-xl:col-span-4">
                            <li className="text-sm md:text-xl mb-2">German (native)</li>
                            <li className="text-sm md:text-xl mb-2">English (C2)</li>
                            <li className="text-sm md:text-xl mb-2">Croatian</li>
                            <li className="text-sm md:text-xl mb-2">French</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
