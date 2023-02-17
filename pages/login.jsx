import { ConnectWallet, useAddress, Web3Button } from "@thirdweb-dev/react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

// replace this with your contract address
const contractAddress = "0x66FeD3eFe73A77f131C25A4E695a3219879158A1";

export default function Login() {
  const address = useAddress(); // Get the user's address

  return (
    // <div className={styles.container}>
    //   <h1 className={styles.h1}>Auth - NFT Gated Content</h1>
    //   <p className={styles.explain}>
    //     Serve exclusive content to users who own an NFT from your collection,
    //     using{" "}
    //     <b>
    //       <a
    //         href="https://portal.thirdweb.com/building-web3-apps/authenticating-users"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         className={styles.purple}
    //       >
    //         Auth
    //       </a>
    //     </b>
    //     !
    //   </p>

    //   <p className={styles.explain}>
    //     You cannot access the{" "}
    // <Link className={styles.purple} href="/">
    //   main page
    // </Link>{" "}
    //     unless you own an NFT from our collection!
    //   </p>

    //   <hr className={styles.divider} />

    // <>
    //   {address ? (
    //     <p>
    //       Welcome, {address?.slice(0, 6)}...{address?.slice(-4)}
    //     </p>
    //   ) : (
    //     <p>Please connect your wallet to continue.</p>
    //   )}

    //   <ConnectWallet accentColor="#F213A4" />

    //   <p>
    //     For demo purposes, you can claim an NFT from our collection below:
    //   </p>

    //   <Web3Button
    //     contractAddress={contractAddress}
    //     action={(contract) => contract.erc1155.claim(0, 1)}
    //     accentColor="#F213A4"
    //   >
    //     Claim NFT
    //   </Web3Button>
    // </>
    // </div>

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
                  <div className="py-6 px-3 mt-32 sm:mt-0">
                    <div
                      className="w-[100px] bg-sky-400 active:bg-sky-400 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      <Link className={styles.purple} href="/">
                        main page
                      </Link>{" "}
                      
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                  <div className="flex justify-center py-4 lg:pt-4 pt-8">
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        3
                      </span>
                      <span className="text-sm text-blueGray-400">Photos</span>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        3
                      </span>
                      <span className="text-sm text-blueGray-400">Videos</span>
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
                      <Tab _selected={{ color: "white", bg: "blue.300" }}>
                        Subscription Plan
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
                      <TabPanel>
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg justify-center">
                          <div className="justify-center">
                            <div className="flex flex-wrap justify-center">
                              <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                <div className="py-6 px-3 mt-32 sm:mt-0">
                                  <>
                                    {address ? (
                                      <p>
                                        Welcome, {address?.slice(0, 6)}...
                                        {address?.slice(-4)}
                                      </p>
                                    ) : (
                                      <p>
                                        Please connect your wallet to continue.
                                      </p>
                                    )}

                                    <ConnectWallet accentColor="#F213A4" />

                                    <p>
                                      For demo purposes, you can claim an NFT
                                      from our collection below:
                                    </p>

                                    <Web3Button
                                      contractAddress={contractAddress}
                                      action={(contract) =>
                                        contract.erc1155.claim(0, 1)
                                      }
                                      accentColor="#F213A4"
                                    >
                                      Claim NFT
                                    </Web3Button>
                                  </>
                                </div>
                              </div>
                              <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                  <div className="mr-4 p-3 text-center">
                                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                      0.03 ETH
                                    </span>
                                    <span className="text-sm text-blueGray-400">
                                      1-Month Subscription Plan
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
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
  );
}
