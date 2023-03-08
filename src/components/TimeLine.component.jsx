import timeLineElements from "../data/timeLineElements";

const TimeLine = () => {
  return (
    <section className="rounded-xl bg-platinum dark:bg-richGray dark:text-gray-100">
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:shadow before:bg-crimson before:shadow-crimson before:dark:bg-lava before:dark:shadow-lava">
              <h3 className="text-3xl mb-5 font-semibold uppercase font-nunito">
                MY EXPERIENCE
              </h3>
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-400 before:dark:bg-gray-800">
              {timeLineElements.map((element) => (
                <div
                  key={element.id}
                  className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:shadow before:bg-crimson before:shadow-crimson before:dark:bg-lava before:dark:shadow-lava"
                >
                  <h3 className="text-xl font-semibold tracking-wide">
                    {element.title}
                  </h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-400">
                    {element.time}
                  </time>
                  <p className="mt-3">{element.p1}</p>
                  <p className="mt-3">{element.p2}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeLine;
