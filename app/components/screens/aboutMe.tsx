import Portrait from "@/public/images/aboutMe/Portrait.jpeg";
import Image from 'next/image';
import School from "@/public/svg/school.svg";
import Map from "@/public/svg/map.svg";
import GitHub from "@/public/svg/GitHub.svg";
import LinkedIn from "@/public/svg/LinkedIn.svg";

export default function AboutMe() {
    return (
        <div className='min-h-screen xl:h-screen'>
            <div className='sticky top-1/8'>
                <p className="font-bold text-6xl">About Me</p>
                <div className='grid grid-cols-2 sm:max-xl:grid-cols-6 gap-10 xl:h-[87.5%] xl:pt-10 sm:max-xl:pt-8'>
                    <span className="flex sm:max-xl:contents">
                        <Image
                            src={Portrait}
                            alt="Picture of me"
                            className="h-auto xl:w-3/10 lg:w-1/2 sm:max-xl:mx-auto mr-5 sm:max-xl:col-span-3"
                        />
                        <span className="flex flex-col gap-5 sm:max-xl:col-span-3">
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
                    <div className="sm:max-xl:mt-10 sm:max-xl:contents">
                        <p className="font-bold text-4xl mb-5 sm:max-xl:col-span-2">Competitions & Certificates</p>
                        <ul className="sm:max-xl:col-span-4">
                            <li className="text-xl mb-2">Cambridge Certificate in Advanced English C2</li>
                            <li className="text-xl mb-2">2nd place @ Knapp Coding Contest 2025</li>
                            <li className="text-xl mb-2">3nd price @ Junior Mathematical Olympiad in Carinthia & Styria 2019</li>
                            <li className="text-xl mb-2">2nd price @ Junior Mathematical Olympiad in Carinthia & Styria 2020</li>
                        </ul>
                    </div>
                    <div className="sm:max-xl:mt-10 sm:max-xl:contents">
                        <p className="font-bold text-4xl mb-5 sm:max-xl:col-span-2">Hobbies</p>
                        <ul className="sm:max-xl:col-span-4">
                            <li className="text-xl mb-2">Programming</li>
                            <li className="text-xl mb-2">Reading</li>
                            <li className="text-xl mb-2">Languages & Linguistics</li>
                            <li className="text-xl mb-2">E-guitar</li>
                            <li className="text-xl mb-2">Chess</li>
                            <li className="text-xl mb-2">Maths</li>
                            <li className="text-xl mb-2">Biking</li>
                        </ul>
                    </div>
                    <div className="sm:max-xl:mt-10 sm:max-xl:contents">
                        <p className="font-bold text-4xl mb-5 sm:max-xl:col-span-2">Languages</p>
                        <ul className="sm:max-xl:col-span-4">
                            <li className="text-xl mb-2">German (native)</li>
                            <li className="text-xl mb-2">English (C2)</li>
                            <li className="text-xl mb-2">Croatian</li>
                            <li className="text-xl mb-2">French</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
