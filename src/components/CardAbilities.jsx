import React from "react";

function CardAbilities({ img, title, subtitle, text }) {
  return (
    <div class="flex items-center hover:scale-105 transition-all duration-700 ease-in-out w-80">
      <div class="group relative mx-auto w-80 overflow-hidden border border-crimson hover:border-none rounded-xl bg-open dark:bg-closed p-px transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-crimson hover:via-persimmon hover:to-tangelo hover:shadow-lg hover:shadow-gray-300 hover:dark:shadow-gray-800">
        <div class="group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-open/90 dark:via-closed/90 to-transparent group-hover:visible"></div>

        <div class="relative rounded-xl bg-open dark:bg-closed p-7 h-[30rem]">
          <div class="flex flex-col content-center items-center justify-center gap-7">
            <img
              src={img}
              alt="Logo"
              className="w-fit drop-shadow-xl"
            />
            <p class="text-xl font-semibold text-slate-900 dark:text-slate-300">
              {title}
            </p>
            <p class="text-lg font-semibold text-slate-800 dark:text-slate-400">
              {subtitle}
            </p>
            <p class="text-slate-700 dark:text-slate-500">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardAbilities;
