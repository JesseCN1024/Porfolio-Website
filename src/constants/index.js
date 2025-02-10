import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  fpt,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  dotnet,
  postgres
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend ReactJs",
    icon: web,
  },
  {
    title: "Backend .NET",
    icon: mobile,
  },
  {
    title: "Mobile React Native",
    icon: backend,
  },
  {
    title: "Promt Engineering",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "ReactJS/Native",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: ".NET Core",
    icon: dotnet,
  },
  {
    name: "Postgres",
    icon: postgres,
  },
  {
    name: "NodeJS",
    icon: nodejs,
  },
  {
    name: "Git/Github",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Fullstack Developer Intern",
    company_name: "FPT Software",
    icon: fpt,
    iconBg: "#383E56",
    date: " Oct 2024 - Jan 2025",
    points: [
      "Study real life SDLC and project management process Agile/Scrum.",
      "Get training on technical skills: C#, ASP .NET Web API , PostgresSQL, Docker, Postman, Swagger,... ",
      "Build a micro-services booking system including multiple services, and many features: Token Validation, Custom Authorization, Middleware Error Exception,...",
      "Receive code reviews and constructive feedback.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "Khoa is always enthusiast and eager to learn new things. I'm glad to be his mentor.",
    name: "Minh Nguyen",
    designation: "Software Engineer",
    company: "FPT Software",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQFnuCwHZg8jhg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723532832762?e=1744848000&v=beta&t=2iGjyMhT-v8QG9G3l-IdADyoGRJlVDJW9jOxZTqGVvo",
  },
  {
    testimonial:
      "I believe Khoa will succeed as he's always seeking for help if needed, and he's a quick learner.",
    name: "Duc Le",
    designation: "Lecturer",
    company: "University of Information Technology",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQEdEndoMStIbw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1701092524968?e=1744848000&v=beta&t=nNiMJ5brvZiAFzLZD7WwPlWcNxYQDdcdr79MD4IXATE",
  },
  {
    testimonial:
      "Was a team member of Khoa in school, he's a good team leader and able to manage the team project well.",
    name: "Vinh Ho",
    designation: "Backend Developer",
    company: "TMA Solutions",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQH1ZTtGQLDCMA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715335094096?e=1744848000&v=beta&t=iMos5TMUwHPFu-S34zaoYn_BWqc0VZbokYZkQ6Bqluo",
  },
];

const projects = [
  {
    name: "MiniMarket",
    description:
      "GreenMart aims to create a seamless and user-friendly online platform for customers to conveniently purchase a wide range of grocery products from the comfort of their homes. This project is driven by the increasing demand for online shopping and the need for a reliable and efficient solution for grocery shopping.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "router",
        color: "orange-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "blue-text-gradient",
      },
      {
        name: "boostrap",
        color: "orange-text-gradient",
      },
    ],
    images: [
      "https://private-user-images.githubusercontent.com/100943944/411455821-0ee48976-897c-4e7b-bfbd-3935776a6e8b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzkxNzQ1MTQsIm5iZiI6MTczOTE3NDIxNCwicGF0aCI6Ii8xMDA5NDM5NDQvNDExNDU1ODIxLTBlZTQ4OTc2LTg5N2MtNGU3Yi1iZmJkLTM5MzU3NzZhNmU4Yi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMjEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDIxMFQwNzU2NTRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xYjVmZGE3NzE3MGMwMzQ4NWY4ODgxMDUyMjRiNGJjYmI1NDA3ZDc0MzEzZjJlZmUyYWY4MjZhM2M3MWRmOWUzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.XvmpU1oHIYAPIjIEYOf4gFqRYcywogrliz6RItepapU",
      "https://private-user-images.githubusercontent.com/100943944/411455847-a610fc52-9346-4ac7-9e79-dc965ee68666.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzkxNzQ1MTQsIm5iZiI6MTczOTE3NDIxNCwicGF0aCI6Ii8xMDA5NDM5NDQvNDExNDU1ODQ3LWE2MTBmYzUyLTkzNDYtNGFjNy05ZTc5LWRjOTY1ZWU2ODY2Ni5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMjEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDIxMFQwNzU2NTRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kNDVkZTA1NGVmZWVjNjQ2MjYwZDExZDdlYWY5NmJiYTBiY2YyMTgxNDdiYWVmNjAzZjEzYmMyYjg2MzA0YzBkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.xK6bL6kOne7h5u4OTz5d3rtXkWgt_YeN-VbOCsdhNBY",
      "https://private-user-images.githubusercontent.com/100943944/411455877-34dcf47f-82a1-4404-9d62-a86ab51ffe17.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzkxNzQ1MTQsIm5iZiI6MTczOTE3NDIxNCwicGF0aCI6Ii8xMDA5NDM5NDQvNDExNDU1ODc3LTM0ZGNmNDdmLTgyYTEtNDQwNC05ZDYyLWE4NmFiNTFmZmUxNy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMjEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDIxMFQwNzU2NTRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wNDJlYjBjNDAyZjBlMWI0MWYxZDQyZWY0YzE3OTFmMjE0MTYxOWVhNDIwOTczYjdjMmY1YTUzNTQ0NGM3ZTAwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.jDlLkZ-fLph5U7jbuBGKwsmHa5sSRNZGYcYtVEkiaU0",
      "https://private-user-images.githubusercontent.com/100943944/411455945-2c9d5fc8-9eca-445f-a921-4a3905f69710.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzkxNzQ1MTQsIm5iZiI6MTczOTE3NDIxNCwicGF0aCI6Ii8xMDA5NDM5NDQvNDExNDU1OTQ1LTJjOWQ1ZmM4LTllY2EtNDQ1Zi1hOTIxLTRhMzkwNWY2OTcxMC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMjEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDIxMFQwNzU2NTRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00NzljMjQ0NzA2NjgyNWM0YTNjZGJjYzA0ZDZkYzExZGQwMTdmOTkyNDMxNjA2ZjY1YTE5NTYzZGY5ZWM5ZjJhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.dR2DjVRbQnMNCgh8Wy-UjFLBDUlHVta9K_h9cHsgmZ8",
      "https://private-user-images.githubusercontent.com/100943944/411455983-43a08563-e2aa-41da-b112-80353666a52e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzkxNzQ1MTQsIm5iZiI6MTczOTE3NDIxNCwicGF0aCI6Ii8xMDA5NDM5NDQvNDExNDU1OTgzLTQzYTA4NTYzLWUyYWEtNDFkYS1iMTEyLTgwMzUzNjY2YTUyZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMjEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDIxMFQwNzU2NTRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hYzhhM2JjZGFhNjBkMDNiNWQ4MjRhOTBiNGRiYzYwYjJmYjczYjBiOTRiNjZiZWMzZDU4YTM5NDZkNDYxNzYzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.rb94ev-zzZi6Lr6SHawB480IzqCJNiT51ecSmfI4lIc",
      "https://private-user-images.githubusercontent.com/100943944/411456037-c9a3aa88-48a5-4c1d-85c9-124109cf429d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzkxNzQ1MTQsIm5iZiI6MTczOTE3NDIxNCwicGF0aCI6Ii8xMDA5NDM5NDQvNDExNDU2MDM3LWM5YTNhYTg4LTQ4YTUtNGMxZC04NWM5LTEyNDEwOWNmNDI5ZC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMjEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDIxMFQwNzU2NTRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03NzA5YWFkYjRmMzBjZGE0NTAyY2RiZTlmYzcxMzE2ZTMyYTEwZjVkZGEyMDVmZGUzNzFiOWVlZjIwNmZlMDU5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.Fk-NEGisoZlEhYYw2DF3hAIeacdJLj1JMF_89XJFpIk",
      "https://private-user-images.githubusercontent.com/100943944/411456097-ae51a6c1-8ab2-4571-92d8-60161ee4098d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzkxNzQ1MTQsIm5iZiI6MTczOTE3NDIxNCwicGF0aCI6Ii8xMDA5NDM5NDQvNDExNDU2MDk3LWFlNTFhNmMxLThhYjItNDU3MS05MmQ4LTYwMTYxZWU0MDk4ZC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMjEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDIxMFQwNzU2NTRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zZmQxNWE1YzI3NTg2MWU2ZDM5YWJlYjc1NzMxNjVmNTU2OGUzMTViZjJmOTc2NjZmNzU3OTRmZjY5ZGJjNGExJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.Rn-Arcp73D79ukeTUSaKMPiQu06AHclUgsRKyGvgKPQ",
    ],
    source_code_link: "https://github.com/Team-DVGs/MiniMarket3",
  },
  {
    name: "Bach Hoa Xanh Clone App",
    description:
      "This project is a crafted cloned of the 'BachHoaXanh' e-commerce app, built using React Native. It features 90% of the original app's functionality",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "orange-text-gradient",
      },
      {
        name: "nativewind",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "blue-text-gradient",
      },
    ],
    images: [
      "https://private-user-images.githubusercontent.com/100943944/411468399-66bcbb2c-e93b-4c42-a12f-8bb962c33e72.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzkxNzY4ODcsIm5iZiI6MTczOTE3NjU4NywicGF0aCI6Ii8xMDA5NDM5NDQvNDExNDY4Mzk5LTY2YmNiYjJjLWU5M2ItNGM0Mi1hMTJmLThiYjk2MmMzM2U3Mi5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMjEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDIxMFQwODM2MjdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05NDk4YzQ4M2Q0N2RiYmJiMzllMjk1YWFlOGVkMjhmYjY4MzQ0N2M1OGVmMWJjNDVhM2RlMDhiNTcwYWZkYzVhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.IuAWXW8PcD4BNTap9Xj3vaRFysMSRfVTTs2qasyVSh8",
      "https://private-user-images.githubusercontent.com/100943944/411468461-c1ecbaec-6e21-4acd-9d38-ff19113c79fc.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzkxNzY4ODcsIm5iZiI6MTczOTE3NjU4NywicGF0aCI6Ii8xMDA5NDM5NDQvNDExNDY4NDYxLWMxZWNiYWVjLTZlMjEtNGFjZC05ZDM4LWZmMTkxMTNjNzlmYy5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMjEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDIxMFQwODM2MjdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03NmU3ODEwMzcxMmUwODc1OTg1NTg2ZmY2ZDMzMTMwMjVkNmE3Y2RjYTBmN2MwN2MzNDkwOWQ0MzY0YzVhN2NmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.H--G2weQVHiRM3iIvaMVnsrKH2XDUlMVSr1-yoKrJW8",
      "https://private-user-images.githubusercontent.com/100943944/411468456-511d522d-9863-4b3a-823a-0b8190dadae2.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzkxNzY4ODcsIm5iZiI6MTczOTE3NjU4NywicGF0aCI6Ii8xMDA5NDM5NDQvNDExNDY4NDU2LTUxMWQ1MjJkLTk4NjMtNGIzYS04MjNhLTBiODE5MGRhZGFlMi5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMjEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDIxMFQwODM2MjdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03YzIwZjFlNTZjNzIxOGU1NWQ2OTZlYTJhZTQ3YjgzNTY4N2Q2YTA2MjI0ZjU2YjJlNzI4Mjc5MjBhMGEyMmI3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.94jjueyQCJ-x_IucmGHZ3jKSrm5J_2bCtR5TvQnbrKs",
      "https://private-user-images.githubusercontent.com/100943944/411468785-667c054a-4ec4-4f7c-9b25-36f22d4f7ef4.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzkxNzY4ODcsIm5iZiI6MTczOTE3NjU4NywicGF0aCI6Ii8xMDA5NDM5NDQvNDExNDY4Nzg1LTY2N2MwNTRhLTRlYzQtNGY3Yy05YjI1LTM2ZjIyZDRmN2VmNC5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMjEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDIxMFQwODM2MjdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zMWY5OTZjYjNjMzk4Y2NhNzMwMWYwZTc4ODYzYTU1Mzc2NzExMTg3NTIxOWU3NDUyYmQyODcwZTdiMTA5YjA3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.AwsnYcxGOmhG7-l0xATw_sYdoC63h0Z6XUr_BYDmHNc",
      "https://private-user-images.githubusercontent.com/100943944/411468780-90cb1bce-a365-46eb-8acc-654a37c4388d.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzkxNzY4ODcsIm5iZiI6MTczOTE3NjU4NywicGF0aCI6Ii8xMDA5NDM5NDQvNDExNDY4NzgwLTkwY2IxYmNlLWEzNjUtNDZlYi04YWNjLTY1NGEzN2M0Mzg4ZC5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMjEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDIxMFQwODM2MjdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01Zjk1OGE4MDZkZmRmYmM3YjdhMTE2OWM4YjJlNGZiMTM3ZGIyMWE5ODc2ODc1MzY1ZmVkZjllODA5N2E0NDQyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.6JVjy9YKRp8HsuEeEra9zkGDT5FBXJyQYn-cxVVE1-U",
      "https://private-user-images.githubusercontent.com/100943944/411468903-f5f5547d-458b-4d24-9198-6a3d5aba7bfb.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzkxNzY4ODcsIm5iZiI6MTczOTE3NjU4NywicGF0aCI6Ii8xMDA5NDM5NDQvNDExNDY4OTAzLWY1ZjU1NDdkLTQ1OGItNGQyNC05MTk4LTZhM2Q1YWJhN2JmYi5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMjEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDIxMFQwODM2MjdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04MDQyNzZmM2UxMGU2YTVlNjRjZjUwZDk0ZWRiZTM2MDc0OTc0MjQ4N2E5MGNkMjU4ODNhMzUxMDZjMGQxZjM1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.Poxeq8vlahViKcq4WOAZ9lF7c_a6JulDWzEKR6leEVY",
    ],
    source_code_link:
      "https://github.com/NT118-MiniMarketProject/MiniMarket_FE",
  },
  {
    name: "Deployment Booking",
    description:
      "A mock booking system for booking source code deployment time range supporting multiples group to work on a same AWS environment without encountering conflicts. Users can book a time range they want to deploy their code, efficently manage shared resources.",
    tags: [
      {
        name: ".net core",
        color: "blue-text-gradient",
      },
      {
        name: "c#",
        color: "blue-text-gradient",
      },
      {
        name: "microservices",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
      {
        name: "postgres",
        color: "blue-text-gradient",
      },
    ],
    images: [
      "https://github.com/JesseCN1024/DeploymentBookingSystem/raw/master/assets/img/2025-01-11-21-36-28.png",
      "https://github.com/JesseCN1024/DeploymentBookingSystem/raw/master/assets/img/2025-01-12-10-02-21.png",
      "https://github.com/JesseCN1024/DeploymentBookingSystem/raw/master/assets/img/2025-01-12-09-58-08.png",
      "https://github.com/JesseCN1024/DeploymentBookingSystem/raw/master/assets/img/2025-01-12-10-05-10.png",
    ],
    source_code_link: "https://github.com/JesseCN1024/DeploymentBookingSystem",
  },
  {
    name: "Van Life",
    description:
      "VanLife is a web app to help people find their best van for a memorible trip. This client-side based website represents a van booking site for people to book a suitable van for their trip.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "router",
        color: "orange-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
    ],
    images: [
      "https://github.com/JesseCN1024/VanLife/raw/master/assets/images/2023-10-09-16-06-33.png",
      "https://github.com/JesseCN1024/VanLife/raw/master/assets/images/2023-10-09-16-07-08.png",
      "https://github.com/JesseCN1024/VanLife/raw/master/assets/images/2023-10-09-16-07-22.png",
      "https://github.com/JesseCN1024/VanLife/raw/master/assets/images/2023-10-09-16-07-59.png",
      "https://github.com/JesseCN1024/VanLife/raw/master/assets/images/2023-10-09-16-08-46.png",
    ],
    source_code_link: "https://github.com/JesseCN1024/VanLife",
  },
];

export { services, technologies, experiences, testimonials, projects };
