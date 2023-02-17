import Link from 'next/link';
import { Card, CardBody, Stack, SimpleGrid,Tabs,TabList, Tab,TabPanel,TabPanels } from "@chakra-ui/react";
import Image from "next/image";
import img from "../util/MrBeast1.png";
import img2 from "../util/MrBeast2.png";
import img3 from "../util/MrBeast3.png";

export default function Masuk() {
  return (
    <div>
      <div>
        <link
          rel="stylesheet"
          href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
        />
        <link
          rel="stylesheet"
          href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
        />

        <main className="profile-page bg-[#DBF3FA]">
          <section className="relative block h-500-px bg-[#DBF3FA]">
            <div
              className="absolute top-0 w-full h-full bg-center bg-cover bg-[#DBF3FA]"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80')",
              }}
            >
              <span
                id="blackOverlay"
                className="w-full h-full absolute opacity-50 bg-black"
              ></span>
            </div>
            <div
              className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
              style={{ transform: "translateZ(0px)" }}
            >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="text-blueGray-200 fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>
          </section>
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-80">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src="https://www.famousbirthdays.com/headshots/mr-beast-14.jpg"
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          3
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Photos
                        </span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          3
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Videos
                        </span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          89
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Subscriber
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-6">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    MrBeast
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                    Greenville, US
                  </div>
                  <div className="mb-2 text-blueGray-600">
                    <i className="fas fa-venus-mars mr-2 text-lg text-blueGray-400"></i>
                    Male, 24
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                      A creator of massive recognition, MrBeast the name taken by
                      Greenville-raised, US-based Nick Murphy writes,
                      performs and records all of his own video, giving it a
                      warm, intimate feel with a solid giving structure. An
                      creator of massive recognition.
                      </p>
                      <a href="#pablo" className="font-normal text-sky-400">
                        Show more
                      </a>
                    </div>
                  </div>
                </div>
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-4">
                  <div className="w-full px-4 mx-auto text-center">
                    <Tabs isFitted variant="enclosed" colorScheme="blue.500">
                      <TabList>
                        <Tab _selected={{ color: "white", bg: "blue.300" }}>
                          Photos
                        </Tab>
                        <Tab _selected={{ color: "white", bg: "blue.300" }}>
                          Videos
                        </Tab>
                        <Tab _selected={{ color: "white", bg: "blue.300" }}>
                          Live
                        </Tab>
                      </TabList>
                      <TabPanels>
                        <TabPanel>
                          <div className="grid grid-cols-3 grid-flow-row gap-10 justify-center">
                            <img
                              alt="..."
                              src="https://i.scdn.co/image/ab67616d00001e02c4b1650e2afa448d95e954e4"
                              className="shadow-xl rounded h-auto align-middle border-none"
                            />
                            <img
                              alt="..."
                              src="https://www.famousbirthdays.com/faces/mr-beast-image.jpg"
                              className="shadow-xl rounded h-auto align-middle border-none"
                            />
                            <img
                              alt="..."
                              src="https://cdn.justjaredjr.com/wp-content/uploads/headlines/2023/01/mrbeast-reacts-to-negative-reactions-of-him-helping-pay-for-curing-blindness.jpg"
                              className="shadow-xl rounded h-auto align-middle border-none"
                            />
                          </div>
                        </TabPanel>
                        <TabPanel>
                        <div className="grid grid-cols-3 grid-flow-row gap-6">
                        <Image src={img} width={400} height={400} alt="" unoptimized={true} />
                        <Image src={img2} width={400} height={400} alt="" unoptimized={true} />
                        <Image src={img3} width={400} height={400} alt="" unoptimized={true} />
                          {/* <img
                            src="https://wallpaperaccess.com/full/3972620.jpg"
                            className="shadow-xl rounded align-middle border-none h-72 w-96"
                          />
                          <img
                            alt="..."
                            src="https://thumbs.dreamstime.com/b/blurred-background-christmas-lights-black-yellow-light-bulbs-festive-164228452.jpg"
                            className="shadow-xl rounded align-middle border-none h-72 w-96"
                          />
                          <img
                            alt="..."
                            src="http://blog.creativelive.com/wp-content/uploads/2016/01/lights-night-unsharp-blured.jpg"
                            className="shadow-xl rounded align-middle border-none h-72 w-96"
                          /> */}
                        </div>
                        </TabPanel>
                        <TabPanel>
                          <p>Live</p>
                        </TabPanel>
                      </TabPanels>
                    </Tabs>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="relative bg-blueGray-200 pt-8 pb-6 mt-8">
            <div className="container mx-auto px-4"></div>
          </footer>
        </main>
      </div>
    </div>
  );
}
