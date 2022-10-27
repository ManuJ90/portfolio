import React from "react";
import git from "../assets/contact/github.webp";
import link from "../assets/contact/linkedin.webp";
import mail from "../assets/contact/mail.webp";

const name = `<Juan Manuel Scagni>`;

function Footer() {
    return (
        <footer className='bg-black p-7'>
            <div
                className='container m-auto flex w-11/12 flex-col items-center justify-between gap-5 text-white md:flex-row md:gap-0'>
                <div>
					<pre className='hover:text-tangelo hover:animate-pulse'>
						{name}
					</pre>
                </div>


                <div className='flex flex-row flex-wrap justify-center gap-4 md:flex-col'>
					<span>
						<a
                            href='https://github.com/ManuJ90'
                            target='_blank'
                            className='flex flex-row items-center gap-2 tracking-wide transition-all duration-700 ease-in-out hover:text-crimson hover:scale-105'>
							<img src={git} alt='' className='h-8 w-8 grayscale'/>
							GitHub
						</a>
					</span>
                    <span>
						<a
                            href='https://www.linkedin.com/in/juanscagni/?locale=en_US'
                            target='_blank'
                            className='flex flex-row items-center gap-2 tracking-wide transition-all duration-700 ease-in-out hover:text-crimson hover:scale-105'>
							<img src={link} alt='' className='h-8 w-8 grayscale'/>
							LinkedIn
						</a>
					</span>
                    <span>
						<a
                            href='mailto:juan.scagni@gmail.com'
                            target='_blank'
                            className='flex flex-row items-center gap-2 tracking-wide transition-all duration-700 ease-in-out hover:text-crimson hover:scale-105'>
							<img src={mail} alt='' className='h-8 w-8 grayscale'/>
							Mail
						</a>
					</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
