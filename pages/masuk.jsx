import Link from 'next/link';
import { Card, CardBody, Stack, SimpleGrid,Tabs,TabList, Tab,TabPanel,TabPanels } from "@chakra-ui/react";

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
                        src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
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
                    Jenna Stones
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                    Los Angeles, California
                  </div>
                  <div className="mb-2 text-blueGray-600">
                    <i className="fas fa-venus-mars mr-2 text-lg text-blueGray-400"></i>
                    Female, 20
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        An artist of considerable range, Jenna the name taken by
                        Melbourne-raised, Brooklyn-based Nick Murphy writes,
                        performs and records all of his own music, giving it a
                        warm, intimate feel with a solid groove structure. An
                        artist of considerable range.
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
                          <div className="grid grid-cols-3 grid-flow-row gap-6">
                            <img
                              alt="..."
                              src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                              className="shadow-xl rounded h-auto align-middle border-none"
                            />
                            <img
                              alt="..."
                              src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                              className="shadow-xl blur rounded h-auto align-middle border-none"
                            />
                            <img
                              alt="..."
                              src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                              className="shadow-xl blur rounded h-auto align-middle border-none"
                            />
                          </div>
                        </TabPanel>
                        <TabPanel>
                          <div className="grid grid-cols-3 grid-flow-row gap-6">
                            <video
                              src="https://www.youtube.com/watch?v=zBjJUV-lzHo"
                              className="autoplay loop muted shadow-xl rounded h-auto align-middle border-none"
                            />
                            <img
                              alt="..."
                              src="https://www.axis.com/sites/axis/files/2021-12/video_thumb.png"
                              className="shadow-xl rounded h-auto align-middle border-none"
                            />
                            <img
                              alt="..."
                              src="https://www.axis.com/sites/axis/files/2021-12/video_thumb.png"
                              className="shadow-xl rounded h-auto align-middle border-none"
                            />
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
