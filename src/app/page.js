import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col max-w-screen-2xl m-auto">
      <nav className="flex justify-between items-center gap-6 p-6 ">
        <h5 className="text-primary text-xl">JD</h5>
        <ul className="hidden sm:flex gap-5 text-white">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="flex">
          <div className="bg-primary px-2 rounded flex flex-col gap-1 justify-center">
            <div className="bg-white h-0.5 w-6 rounded"></div>
            <div className="bg-white h-0.5 w-3.5 mt-0.5 rounded"></div>
          </div>
          <button
            target="#"
            className="text-white border-primary border-1 p-1 pt-1.5 px-1.5 rounded ml-2"
          >
            BOOK NOW
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col lg:flex-row lg:gap-12 lg:mt-18 gap-6 p-6 ">
        <div className="mb-12 lg:flex-2/3 flex flex-col lg:justify-center">
          <h4 className="text-white flex items-center gap-2">
            <div className="h-1 w-5 bg-primary rounded my-2"></div>PROFFESSIONAL
            PHOTOGRAPHER
          </h4>
          <h1 className="text-white text-6xl font-bold my-3">John Doe</h1>

          <div className="flex my-6 lg:mt-12">
            <div className="hidden lg:block bg-primary w-14 h-[105%] rounded-2xl mr-6"></div>
            <div>
              <ul className="flex gap-6 mb-6">
                <li>
                  <a href="#">
                    <img src="/facebook.png" width={25} height={25} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/twitter.png" width={25} height={25} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/youtube.png" width={25} height={25} />
                  </a>
                </li>
              </ul>

              <p className="mb-6 text-white lg:pr-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <a
                href="#"
                className="border-primary border-1 p-2 rounded text-white"
              >
                VIEW PORTFOLIO
              </a>
            </div>
          </div>
        </div>
        <figure className="relative lg:flex-1/3">
          <div className="hidden lg:block absolute z-[-1] top-[-35px] left-[-35px] w-100 h-100 border-primary border-12"></div>
          <div className="overflow-hidden rounded-lg">
            <img className="" src="/showcase.jpg" />
          </div>
        </figure>
      </section>

      {/* quote */}
      <div className="bg-[#323232] text-center p-12 lg:p-18">
        <h2 className="text-white text-2xl">
          "We've learned to fly the air like birds, we've learned to swim the seas like fish, and yet we haven't learned to walk the earth as brothers and sisters."
        </h2>
        <p className="text-white font-bold mt-6">- Martin Luther King, Jr., Love</p>
      </div>
    </main>
  );
}
