import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";
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
      <div
        style={{ width: `${percent}%` }}
        className={`bg-primary h-full rounded-2xl text-white pl-4 flex items-center`}
      >
        {percent}%
      </div>
    </div>
  );
}

function ServiceBlock({ imgSrc, title }) {
  return (
    <div className="border-1 border-primary rounded flex flex-col p-9 items-center gap-5 text-center">
      <img src={imgSrc} className="w-[50%]" />
      <h1 className="text-primary text-xl">{title}</h1>

      <p className="text-white">Lorem ipsum dolor sit amet adipisicing elit.</p>
    </div>
  );
}

function NewsCard({ imgSrc, title, date }) {
  return (
    <div className="p-6 bg-bglight border-t-4 border-primary rounded flex flex-col gap-3 max-w-100">
      <img
        className="w-[100%] aspect-[1/1.4] object-cover rounded"
        src={imgSrc}
      />

      <h1 className="text-xl font-bold text-white">{title}</h1>
      <h5 className="text-primary">{date}</h5>

      <p className="text-white">
        Buddhists analyze the self into five aggregates: form (body), feeling,
        perception, mental formations, and consciousness. These are seen as
        constantly changing and interconnected, rather than a unified, permanent
        self.
      </p>
      <button className="text-white border border-primary w-fit rounded p-2 px-4 flex gap-2 items-center">
        <span className="relative top-0.5"> READ MORE</span> <Chevrons />
      </button>
    </div>
  );
}

function KITCard({ label, text, imgSrc }) {
  return (
    <div className="flex gap-6">
      <img className="w-30" src={imgSrc}></img>
      <div className="flex flex-col self-center">
        <h1 className="text-primary mb-3">{label}</h1>
        <p className="text-white">{text}</p>
      </div>
    </div>
  );
}


export default function Home() {
  
  return (
    <main className="flex flex-col max-w-screen-2xl m-auto">
     <Navbar />

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
                All that we are is the result of what we have thought: it is
                founded on our thoughts and made up of our thoughts. If a man
                speak or act with an evil thought, suffering follows him as the
                wheel follows the hoof of the beast that draws the wagon.... If
                a man speak or act with a good thought, happiness follows him
                like a shadow that never leaves him.
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
          <div className="hidden lg:block absolute z-[-1] top-[-35px] left-[-35px] w-[90%] h-[50%] border-primary border-12"></div>
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
      <section
        id="about"
        className="flex flex-col lg:flex-row py-8 sm:pt-16 px-6"
      >
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
            <h5 className="text-primary font-bold text-xl">
              Social Innovation
            </h5>
            <ProgressBar percent={85} />
          </div>

          <figure className="flex flex-2/5">
            <div className="hidden shrink-0 lg:block w-4 h-full bg-primary rounded-2xl"></div>
            <img
              className="shrink object-cover lg:pl-8"
              src="/skills.jpg"
            ></img>
          </figure>
        </div>
      </section>

      {/* Recent works */}
      <section className="bg-bglight p-6 py-8">
        <div className="flex flex-col lg:flex-row-reverse lg:items-center mt-6 lg:gap-6">
          <div className="mb-12 lg:flex-1/2 xl:ml-9">
            <h4 className="text-white flex items-center gap-2">
              <div className="h-1 w-5 bg-primary rounded my-3"></div>My
              Portfolio
            </h4>
            <h1 className="text-white text-4xl font-bold my-3">Recent Works</h1>

            <p className="text-white mt-3">
              The Sutra famously states, "Form is emptiness (śūnyatā), emptiness
              is form." It has been called "the most frequently used and recited
              text in the entire Mahayana Buddhist tradition."[2] The text has
              been translated into English dozens of times from Chinese,
              Sanskrit, and Tibetan, as well as other source languages.
            </p>
            <p className="text-white my-3">
              In the sutra, Avalokiteśvara addresses Śariputra, explaining the
              fundamental emptiness (śūnyatā) of all phenomena, known through
              and as the five aggregates of human existence (skandhas): form
              (rūpa), feeling (vedanā), volitions (saṅkhāra), perceptions
              (saṃjñā), and mind (vijñāna). Avalokiteśvara famously states,
              "Form is Emptiness (śūnyatā). Emptiness is Form", and declares the
              other skandhas to be equally empty—that is, dependently originated
            </p>
          </div>
          <figure className="flex lg:flex-1/2 flex-col gap-6 relative md:mb-50 xl:mb-20 xl:p-6">
            <img
              className="sm:grayscale md:w-[66%] md:z-1"
              src="/portfolio-1.jpg"
            />
            <img
              className="md:absolute md:w-[50%] md:right-0 md:bottom-[-20%]"
              src="/portfolio-2.jpg"
            />
          </figure>
        </div>
      </section>

      {/* why choose me */}
      <section id="services" className=" p-6 py-8 lg:p-12">
        <div className="flex flex-col lg:flex-row-reverse lg:gap-9">
          <div className="lg:flex-1/2 self-center">
            <h4 className="text-white flex items-center gap-2">
              <div className="h-1 w-5 bg-primary rounded my-3"></div>WHY CHOOSE
              ME
            </h4>
            <h1 className="text-white text-4xl font-bold my-3">
              Best Services For You
            </h1>

            <p className="text-white py-3">
              The Buddha's Eightfold Path is a set of eight interconnected
              practices that lead to the cessation of suffering, a core concept
              in Buddhism.
            </p>

            <p className="text-white py-3">
              These practices are grouped into three categories: wisdom (right
              view and right thought), virtue (right speech, right action, and
              right livelihood), and concentration (right effort, right
              mindfulness, and right concentration).
            </p>

            <button className="text-white border-1 border-primary rounded p-2 px-3 my-3">
              LEARN MORE
            </button>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-6 lg:flex-1/2">
            <ServiceBlock imgSrc={"/service-1.png"} title={"Wedding"} />
            <ServiceBlock imgSrc={"/service-2.png"} title={"Company Profile"} />
            <ServiceBlock
              imgSrc={"/service-3.png"}
              title={"Model Photoshoot"}
            />
            <ServiceBlock imgSrc={"/service-4.png"} title={"Videography"} />
          </div>
        </div>
      </section>

      {/* testimonials */}
      <section className="bg-bglight p-6 py-8 lg:p-12">
        <div className="lg:flex lg:gap-6">
          <div className="mb-6 flex-1/2">
            <h4 className="text-white flex items-center gap-2">
              <div className="h-1 w-5 bg-primary rounded my-3"></div>
              TESTIMONIALS
            </h4>
            <h1 className="text-white text-4xl font-bold my-3">
              What My Clients Say
            </h1>
            <p className="text-white my-6">
              This truth acknowledges that life, in its various stages, is
              marked by suffering, dissatisfaction, and impermanence. It's not
              just physical pain, but also the unease and frustration that arise
              from the transient nature of existence.
            </p>

            <button className="border-1 border-primary rounded text-white text-xl p-2 px-3">
              VIEW TESTIMONIALS
            </button>
          </div>

          <figure className="flex-1/2">
            <div className="flex justify-end mb-6">
              <img className="w-20" src="/testimonial-quote.png" />
            </div>
            <p className="bg-primary text-bglight rounded p-4 text-xl">
              In Buddhism, the concept of "no-self" (Anatta or Anatman) refers
              to the idea that there is no permanent, unchanging self or soul
              within any individual or phenomenon. It's not about denying the
              existence of a person, but rather about understanding that the
              self as we commonly perceive it – as a fixed, independent entity –
              is an illusion. This understanding is a core teaching in Buddhism
              and is seen as a path to liberation from suffering.
            </p>

            <div className="flex mt-6">
              <div className="border-4 w-60 h-60 border-primary rounded-[100%] flex justify-center items-center">
                <img
                  src="/client.jpg"
                  className=" object-cover w-55 h-55 rounded-[100%] border-2 border-bglight"
                />
              </div>
              <div className="self-end">
                <h5 className="text-primary">Jane Doe</h5>
                <p className="text-white">CEO at XYZ</p>
              </div>
            </div>
          </figure>
        </div>
      </section>

      {/* news */}
      <section className="p-6 py-8 lg:p-12">
        <div className="lg:flex lg:flex-row-reverse gap-6">
          <div className="flex-1/2 flex flex-col lg:justify-center">
            <h4 className="text-white flex items-center gap-2">
              <div className="h-1 w-5 bg-primary rounded my-3"></div>
              NEWS
            </h4>
            <h1 className="text-white text-4xl font-bold my-3">
              Accross The World Of Photography
            </h1>
            <p className="text-white my-6">
              Anatta is not a denial of existence but rather a strategy to
              understand how things arise and cease, including our sense of
              self. By recognizing the impermanence of all things, including our
              own sense of self, we can detach from the illusion of a fixed,
              independent entity.
            </p>

            <button className="border-1 border-primary rounded text-white text-xl p-2 px-3 mb-9 w-max">
              VIEW NEWS
            </button>
          </div>

          <figure className="flex flex-wrap gap-6 lg:flex-1/2 lg:flex-nowrap">
            <NewsCard
              date={"Dec 24, 2027"}
              imgSrc={"/news-1.jpg"}
              title={"Model Photoshoot"}
            />
            <NewsCard
              date={"Jan  24, 2028"}
              imgSrc={"/news-2.jpg"}
              title={"Company Profile"}
            />
          </figure>
        </div>
      </section>

      {/* lets talk */}
      <section className="bg-bglight p-6 py-8 lg:p-12">
        <div className="lg:flex lg:gap-9">
          <div className="mb-6 lg:flex-2/3 flex flex-col lg:justify-center">
            <h4 className="text-white flex items-center gap-2">
              <div className="h-1 w-5 bg-primary rounded my-3"></div>
              LET'S TALK
            </h4>
            <h1 className="text-white text-4xl font-bold my-3">
              Keep In Touch
            </h1>
            <p className="text-white my-6">
              This truth acknowledges that life, in its various stages, is
              marked by suffering, dissatisfaction, and impermanence. It's not
              just physical pain, but also the unease and frustration that arise
              from the transient nature of existence.
            </p>
            <button className="border-1 border-primary rounded text-white text-xl w-max p-2 px-3">
              LET'S CHAT
            </button>
          </div>
          <figure className="lg:flex-1/3">
            <img src="contact.jpg" />
          </figure>
        </div>
      </section>

      <section className=" p-6 py-8 lg:p-12">
        <div id="contact" className="lg:flex lg:gap-6 ">
          <div className="flex-1/2">
            <img src="/form.jpg" />

            <div className="flex flex-col gap-2 my-6">
              <input
                className="bg-primary rounded placeholder:text-white p-3 text-white"
                placeholder="Name"
              ></input>
              <input
                type="email"
                className="bg-primary placeholder:text-white rounded p-3 text-white"
                placeholder="Email"
              ></input>
              <textarea
                className="bg-primary text-white placeholder:text-white p-3 rounded"
                placeholder="Message"
                rows={10}
              ></textarea>
              <button className="text-center text-white border-1 rounded border-primary p-2">
                Submit
              </button>
            </div>
          </div>

          <div className="flex-1/2 self-center">
            <h4 className="text-white flex items-center gap-2">
              <div className="h-1 w-5 bg-primary rounded my-3"></div>
              LET'S TALK
            </h4>
            <h1 className="text-white text-4xl font-bold my-3">
              Keep In Touch
            </h1>
            <p className="text-white my-6">
              This truth acknowledges that life, in its various stages, is
              marked by suffering, dissatisfaction, and impermanence. It's not
              just physical pain, but also the unease and frustration that arise
              from the transient nature of existence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
              <KITCard
                imgSrc={"/contact-icon-1.png"}
                label={"Phone Number"}
                text={"9896472470"}
              />
              <KITCard
                imgSrc={"/contact-icon-2.png"}
                label={"Email Address"}
                text={"dfg31197@gmail.com"}
              />
              <KITCard
                imgSrc={"/contact-icon-3.png"}
                label={"Website"}
                text={"www.cool.com"}
              />
              <KITCard
                imgSrc={"/contact-icon-4.png"}
                label={"Address"}
                text={"India"}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
