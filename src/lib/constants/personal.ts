import type { SocialLink } from "@/types";

export const PERSONAL = {
  name: "공성현",
  nameEn: "SeongHyun Kong",
  firstName: "SeongHyun",
  lastName: "Kong",
  title: "Secretary General, Korea Accelerator Association (K-AIA)",
  titles: [
    "Venture Investment Expert",
    "Accelerator Operations Expert",
    "Technology Commercialization Expert",
    "Startup Incubation Expert",
  ],
  bio: `As Secretary General of the Korea Accelerator Association (K-AIA), I oversee policy response, member support, and investment network development within the domestic accelerator ecosystem. I also serve as Startup Grind Seoul Chapter Director, bridging connections with the global entrepreneurship community.

I have accumulated nearly 20 years of experience in technology commercialization, venture investment, and startup incubation. From my roles as a Senior Research Fellow at the KAIST Regional Cooperation Center and General Manager at the Seoul City-commissioned Yangjae R&CD Innovation Hub, I bring field-centered expertise in nurturing early-stage startups and facilitating investment connections.

As an Adjunct Professor at Korea University's Graduate School of Entrepreneurship, I teach a core course on startup investment and am committed to developing the next generation of entrepreneurship and investment professionals.`,
  email: "sh.kong@k-aia.or.kr",
  phone: "010-9317-6588",
  location: "Seoul / Daejeon / Sejong",
  available: true,
  resumeUrl: "/전문가 이력서_공성현.pdf",
} as const;

export const EDUCATION = [
  {
    school: "Korea University of Technology and Education (Graduate School)",
    degree: "M.S. in Management of Technology (MOT)",
    period: "2010.02 ~ 2014.06",
  },
  {
    school: "Gyeongsang National University",
    degree: "B.A. in Psychology",
    period: "1998.03 ~ 2005.02",
  },
] as const;

export const CAREER = [
  {
    org: "Korea Accelerator Association (K-AIA)",
    role: "Secretary General",
    period: "2019.04 ~ Present",
    current: true,
  },
  {
    org: "Startup Grind Seoul Chapter",
    role: "Director",
    period: "2021.09 ~ Present",
    current: true,
  },
  {
    org: "Yangjae R&CD Innovation Hub (Seoul City)",
    role: "General Manager",
    period: "2017.06 ~ 2019.02",
    current: false,
  },
  {
    org: "KAIST Regional Cooperation Center (formerly Innovation Center)",
    role: "Senior Research Fellow",
    period: "2012 ~ 2019",
    current: false,
  },
  {
    org: "ETRI Holdings, New Technology Business Division",
    role: "Assistant Manager",
    period: "2010 ~ 2012",
    current: false,
  },
  {
    org: "Business Strategy Research Institute, Corporate Strategy Team",
    role: "Senior Associate",
    period: "2008 ~ 2010",
    current: false,
  },
] as const;

export const CREDENTIALS = [
  { label: "Minister's Commendation, Ministry of SMEs and Startups", year: "2025" },
  { label: "Adjunct Professor, Korea University Graduate School of Entrepreneurship (Startup Investment)", year: "2022" },
  { label: "Board Member, Korea Venture Startup Association", year: "2022~" },
  { label: "Steering Committee, Daejeon Technopark Startup Growth Campus", year: "2022" },
  { label: "Technology Commercialization Award (Mayor of Daejeon)", year: "2016" },
  { label: "Converting Technology to Wealth @ UT-Austin Training", year: "2015" },
  { label: "Venture Capitalist 15th Training Program / Registered", year: "2013" },
  { label: "Certified Business & Technology Valuator (Korea Business & Technology Valuation Association)", year: "2012" },
  { label: "Certified Civil Engineer (Human Resources Development Service of Korea)", year: "2005" },
] as const;

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/seonghyun-kong",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:sh.kong@k-aia.or.kr",
    icon: "mail",
  },
];
