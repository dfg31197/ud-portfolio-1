import Image from "next/image";
function Chevrons() {
  return (
    <div className="flex">
      <div className="w-3 h-3 border border-r-2 border-b-2 border-r-primary border-b-primary border-l-0 border-t-0 -rotate-45"></div>
      <div className="w-3 h-3 border border-r-2 border-b-2 border-r-primary border-b-primary border-l-0 border-t-0 -rotate-45 relative -left-1"></div>
    </div>
  );
}

function ProgressBar({ percent }) {
  return (
    <div className="bg-[#323232] h-7 w-full rounded-2xl mt-2 mb-8 lg:mb-12">
      <div style={{width: `${percent}%`}} className={`bg-primary h-full rounded-2xl text-white pl-4 flex items-center`}>{percent}%</div>
    </div>
  );
}
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
      <section className="bg-[#323232] text-center p-12 lg:p-18">
        <h2 className="text-white text-2xl">
          "We've learned to fly the air like birds, we've learned to swim the
          seas like fish, and yet we haven't learned to walk the earth as
          brothers and sisters."
        </h2>
        <p className="text-white font-bold mt-6">
          - Martin Luther King, Jr., Love
        </p>
      </section>

      {/* About */}
      <section className="flex flex-col lg:flex-row py-8 sm:pt-16 px-6">
        <div className="mb-6 lg:flex-2/3 lg: pr-12 self-center lg:mb-0">
          <h4 className="text-white flex items-center gap-2">
            <div className="h-1 w-5 bg-primary rounded my-3"></div>ABOUT ME
          </h4>
          <h1 className="text-white text-4xl font-bold my-3">
            Professional Photographer
          </h1>
          <p className="text-white mb-4 mt-8">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text,
          </p>

          <p className="text-white mb-6">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source.
          </p>
          <div className="hidden lg:block h-4 w-[80%] rounded-2xl bg-primary mb-6"></div>
          <h4 className="text-primary text-xl font-bold">My Awards</h4>
          <ul className="*:flex *:items-center *:my-2">
            <li>
              <Chevrons /> <span className="ml-2 text-white">Award 1</span>
            </li>
            <li>
              <Chevrons /> <span className="ml-2 text-white">Award 2</span>
            </li>
            <li>
              <Chevrons /> <span className="ml-2 text-white">Award 3</span>
            </li>
          </ul>
        </div>
        <figure className="lg:flex-1/3">
          <img src="/about.jpg" className="rounded" />
        </figure>
      </section>

      {/* collage */}
      <section className="bg-[#323232] p-6 py-8 lg:p-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <figure className="sm:col-span-2 lg:row-span-2">
            <img src="/gallery-1.jpg" className="object-cover h-full w-full" />
          </figure>
          <figure className="sm:aspect-[1/1.4]">
            <img src="/gallery-2.jpg" className="object-cover h-full w-full" />
          </figure>
          <figure className="sm:aspect-[1/1.4]">
            <img src="/gallery-3.jpg" className="object-cover h-full w-full" />
          </figure>
          <figure className="sm:aspect-[1/1.4]">
            <img src="/gallery-4.jpg" className="object-cover h-full w-full" />
          </figure>
          <figure className="sm:aspect-[1/1.4]">
            <img src="/gallery-5.jpg" className="object-cover h-full w-full" />
          </figure>
        </div>
      </section>

      {/* skills */}
      <section className=" p-6 py-8 lg:p-12">
        <div className="flex flex-col lg:flex-row-reverse">
          <div className="flex-3/5 lg:ml-12">
            <h4 className="text-white flex items-center gap-2">
              <div className="h-1 w-5 bg-primary rounded my-3"></div>ABOUT ME
            </h4>
            <h1 className="text-white text-4xl font-bold my-3">
              I Am Experienced In The Following Fields
            </h1>

            <p className="text-white my-2 mt-4">
              Spring comes, the grass grows by itself.
            </p>
            <p className="text-white my-2 mb-6 lg:mb-8">
              Form is emptiness, emptiness is form.
            </p>

            <h5 className="text-primary font-bold text-xl">Photography</h5>
            <ProgressBar percent={95} />
                 <h5 className="text-primary font-bold text-xl">Design Thinking</h5>
            <ProgressBar percent={90} />
                          <h5 className="text-primary font-bold text-xl">Videography</h5>
            <ProgressBar percent={80} />
                 <h5 className="text-primary font-bold text-xl">Social Innovation</h5>
            <ProgressBar percent={85} />
          </div>
 
          <figure className="flex flex-2/5">
            <div className="hidden shrink-0 lg:block w-4 h-full bg-primary rounded-2xl"></div>
            <img className="shrink object-cover lg:pl-8" src="/skills.jpg"></img>
          </figure>
        </div>
      </section>
    </main>
  );
}
