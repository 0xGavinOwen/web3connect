import Link from 'next/link';
import { Card, CardBody, Stack, SimpleGrid } from "@chakra-ui/react";

export default function Landing () {
    return (
        <div>
            {/* banner */}
           <div className="bg-[#DBF3FA]">
                <div className="min-h-96 px-4 pt-8 ">
                    <div className="flex items-center max-w-7xl m-auto">
                        <div>
                            <h1 className="text-[#FB2576] text-7xl font-Volkhov font-bold">
                                The Next <br></br> Content Subscription Platform <br></br> On WEB3
                            </h1>
                            <p className="text-[#6D67E4] text-xl font-Poppins font-medium py-5">
                                Introducing our newest platform for seeing unique contents!
                                <br /> Explore a diverse content which is made by diverse people around the world!
                                <br />
                                All verified on the blockchain for authenticity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* card */}

            <div className="bg-[#DBF3FA] h-[650px]">
                <div className="bg-[#DBF3FA] flex justify-center gap-5 ">

                    <Link href="/login">
                        <Card className="mt-[70px] bg-[#F0DEFD] rounded-full" >
                            <div className="relative w-40 h-40 bg-[#F0DEFD]">
                                <img alt="..."
                                    src="https://www.famousbirthdays.com/headshots/mr-beast-14.jpg"
                                    //src={imageURL}
                                    className="shadow-xl rounded-full h-auto align-middle border-none" />
                            </div>
                            <div className="items-center justify-center bg-[#F0DEFD]">
                                <div className="text-center p-1">
                                    <p className=' text-[#6D67E4] text-xl font-Poppins font-medium'>Mr</p>
                                </div>
                                <div className="text-center p-2">
                                    <p className=' text-[#6D67E4] text-xl font-Poppins font-medium'>Beast</p>
                                </div>
                            </div>
                        </Card>
                    </Link>

                    <Link href="/profile">
                        <Card className="mt-[70px] bg-[#F0DEFD] rounded" >
                            <div className="relative w-40 h-40 bg-[#F0DEFD]">
                                <img alt="..."
                                    src="https://avatars.githubusercontent.com/u/89936242?height=180&v=4&width=180"
                                    //src={imageURL}
                                    className="shadow-xl rounded-full h-auto align-middle border-none" />
                            </div>
                            <div className="items-center justify-center bg-[#F0DEFD]">
                                <div className="text-center p-1">
                                    <p className=' text-[#6D67E4] text-xl font-Poppins font-medium'>Brian</p>
                                </div>
                                <div className="text-center p-2">
                                    <p className=' text-[#6D67E4] text-xl font-Poppins font-medium'>Joseph</p>
                                </div>
                            </div>
                        </Card>
                    </Link>

                    <Link href="/profile">
                        <Card className="mt-[70px] bg-[#F0DEFD] rounded" >
                            <div className="relative w-40 h-40 bg-[#F0DEFD]">
                                <img alt="..."
                                    src="https://www.meshcc.com/wp-content/uploads/2022/02/Alex-Foord-e1644436249973.jpg"
                                    //src={imageURL}
                                    className="shadow-xl rounded-full h-auto align-middle border-none" />
                            </div>
                            <div className="items-center justify-center bg-[#F0DEFD]">
                                <div className="text-center p-1">
                                    <p className=' text-[#6D67E4] text-xl font-Poppins font-medium'>Alex</p>
                                </div>
                                <div className="text-center p-2">
                                    <p className=' text-[#6D67E4] text-xl font-Poppins font-medium'>Foord</p>
                                </div>
                            </div>
                        </Card>
                    </Link>
                </div>
            </div>
        </div>
    )
}