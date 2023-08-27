import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "/public/assets/images/logo.svg";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Project",
    href: "/project",
  },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Our Services",
    href: "/services",
  },
  {
    name: "Team",
    href: "/team",
  },
];

const email = [
  {
    imgURl: "/assets/icons/email.svg",
    label: "Mail Us!",
    mailID: "techinal@tphsrmist.com",
  },
];

const contacts = [
  {
    imgURl: "/assets/icons/phone.svg",
    label: "6393221408",
    content: "",
  },
  {
    imgURl: "/assets/icons/phone.svg",
    label: "9352917041",
    content: "",
  },
];

const socials = [
  {
    imgURl: "/assets/icons/instagram.svg",
    link: "https://www.instagram.com/0xsrmist/",
  },
  {
    imgURl: "/assets/icons/twitter.svg",
    link: "https://twitter.com/0xsrmist",
  },
  {
    imgURl: "/assets/icons/linkedin.svg",
    link: "https://www.linkedin.com/company/tph-srmist",
  },
  {
    imgURl: "/assets/icons/mail.svg",
    link: "mailto:techinal@tphsrmist.com",
  },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-white pb-8">
      <div className="flex flex-col md:flex-row justify-between md:items-center pt-8 px-8 max-w-[1420px] mx-auto">
        <div className="flex md:justify-center items-center mr-10 mb-10 md:mb-0">
          <Image
            src={Logo}
            alt="TPH x SRMIST Logo"
            className="min-w-[] w-[375px] h-[130px]"
            width={100}
            height={100}
          />
        </div>
        <div className="flex ml-2 md:ml-0 justify-evenly">
          <ul className="mr-8">
            <h3 className="text-2xl lg:text-3xl mb-1.5">Explore</h3>
            {links.map((link, index) => (
              <li
                key={index}
                className="py-2.5 text-md sm:text-lg lg:text-xl sm:w-max"
              >
                <div>{link.name}</div>
              </li>
            ))}
          </ul>
          <ul className="ml-8">
            <h3 className="text-2xl lg:text-3xl mb-1.5">Get in touch</h3>
            <li className="flex py-2.5 text-md sm:text-lg lg:text-xl">
              <Image
                src="/assets/icons/email.svg"
                alt="Email"
                className="w-4 h-4 md:w-6 md:h-6 xl:w-8 xl:h-8"
                width={30}
                height={30}
              />
              <Link href={`mailto:${email[0].mailID}`} className="ml-3">
                {email[0].label}
              </Link>
            </li>
            {contacts.map((contact, index) => (
              <li
                key={index}
                className="flex py-2.5 text-md sm:text-lg lg:text-xl sm:w-max"
              >
                <Image
                  src={contact.imgURl}
                  alt={contact.label}
                  className="w-4 h-4 md:w-6 md:h-6 xl:w-8 xl:h-8"
                  width={30}
                  height={30}
                />
                <Link href={`tel:${contact.content}`} className="ml-3">
                  {contact.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-center mt-16">
        <ul className="flex justify-evenly w-full md:w-max">
          {socials.map((social, index) => (
            <li key={index} className="md:mx-10">
              <Link
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={social.imgURl}
                  alt={social.imgURl}
                  className="w-[50px] h-[50px] md:h-[72px] md:w-[72px]"
                  width={20}
                  height={20}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
