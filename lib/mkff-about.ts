export type MkffAboutNavItem = {
  label: string;
  href: string;
  description: string;
};

export type MkffDirectorSlug =
  | "sherry-knowles"
  | "brooke-shafer"
  | "christopher-zalesky";

export type MkffDirectorProfile = {
  slug: MkffDirectorSlug;
  name: string;
  role: string;
  href: string;
  summary: string;
  focus: string[];
  /** Approved long-form biography paragraphs. Lines starting with "## " render as sub-headings. */
  bio: string[];
  photoSrc: string;
};

export const mkffAboutNavItems: MkffAboutNavItem[] = [
  {
    label: "History of MKFF",
    href: "/about/history",
    description:
      "How two family stories — one arriving through Ellis Island, one raised on a Mississippi farm — became the foundation behind Kectil.",
  },
  {
    label: "Why I Created Kectil",
    href: "/about/why",
    description:
      "Founder Sherry M. Knowles on why she built a program to nurture, network, and mentor youth in developing countries.",
  },
  {
    label: "Our Directors",
    href: "/about/directors",
    description:
      "Meet the directors of the Malmar Knowles Family Foundation and The Kectil Program.",
  },
];

export const mkffHistoryTimeline = [
  {
    label: "Family roots",
    title: "Everyone has a story",
    body: "The foundation's story runs through two families. The Malmar name was coined at Ellis Island, when a Swedish immigrant who spoke no English answered the officials with the name of his hometown, Malmö. The Knowles family raised their children on a Mississippi farm with no electricity and a one-room schoolhouse — and sent two of them on to Ph.D.s in chemistry. What both families passed down was the conviction that education and hard work open doors.",
  },
  {
    label: "The foundation",
    title: "The Malmar Knowles Family Foundation",
    body: "MKFF is a nonprofit corporation organized under the laws of Georgia, USA and Section 501(c)(3) of the Internal Revenue Code, and is the parent organization of The Kectil Program. The Malmar name stands as a tribute to the many people who, in their own ways, work to build a better life for themselves and their families.",
  },
  {
    label: "The Kectil Program",
    title: "A trust for international leadership",
    body: "Kectil — the Knowles Educational and Charitable Trust for International Leadership — was created to identify and nurture highly talented youth in developing countries who have the potential to be leaders and make a positive difference in their communities, their countries, and maybe even the world.",
  },
  {
    label: "Global Youth Index",
    title: "Sharing what young people are saying",
    body: "The Global Youth Index carries that mission forward. It publishes what youth in the Kectil community report — as aggregate, citable research — so their priorities can be heard far beyond the program itself.",
  },
] as const;

export const mkffWhyPrinciples = [
  {
    title: "Talent is everywhere; opportunity is not",
    body: "Highly talented young people can be found in every country. What many lack is training, professional exposure, and a guided network of similarly talented and passionate peers who support, nurture, teach, and learn from each other as they mature.",
  },
  {
    title: "You are bigger than yourself",
    body: "Knowing you are embraced and supported by peers in your own country and in other countries is central to a young leader's confidence — the confidence to make a positive difference in your community, your country, and the world.",
  },
  {
    title: "If you want to go far, go together",
    body: "The Kectil framework is built on the famous African proverb: if you want to go fast, go alone; if you want to go far, go together. Kectil brings talented youth together so they can go far — as a global network of peers.",
  },
] as const;

export const mkffDirectors: MkffDirectorProfile[] = [
  {
    slug: "sherry-knowles",
    name: "Sherry M. Knowles",
    role: "Founder and Board Chair",
    href: "/about/directors/sherry-knowles",
    summary:
      "In 2015, Ms. Knowles created the idea of a non-profit foundation, “The Malmar Knowles Foundation” (“MKFF”) to provide mentorship to talented youth leaders (aged 17-26) in developing countries, with a focus on leadership, innovation, inventions and entrepreneurship, mental health, gender equality and environmental sustainability.",
    focus: [
      "Founder of MKFF and The Kectil Program",
      "Intellectual property law and policy",
      "Youth leadership and mentoring",
    ],
    bio: [
      "In 2015, Ms. Knowles created the idea of a non-profit foundation, “The Malmar Knowles Foundation” (“MKFF”) to provide mentorship to talented youth leaders (aged 17-26) in developing countries, with a focus on leadership, innovation, inventions and entrepreneurship, mental health, gender equality and environmental sustainability. MKFF was organized in the State of Georgia, U.S., and recognized by the U.S. IRS as a non-profit 501(c) organization in 2016. Now, ten years later, MKFF is working in over 100 developing countries globally to mentor, train, support and strengthen youth leadership. Over this ten-year period, MKFF has touched the lives of over 10,000 youth. The dream of creating a global network of youth leaders in developing countries for a better tomorrow is being realized by hard work, dedication, and a very active Kectil Global Board of proven passionate youth leaders and volunteer representatives in many countries.",
      "Through MKFF, Ms. Knowles created The Kectil Program (www.kectil.com), which provides a one-year free-of-charge intense web-based mentorship program that expands the minds of talented youth from remote and disadvantaged developing areas and connects the youth with global leaders in the United States and other countries. The Kectil Program was first announced at the Conference on Development and Intellectual Property in April 2016, hosted by the World Intellectual Property Organization in Geneva, Switzerland. The Kectil Program was highlighted in the August 2016 issue of WIPO Magazine. MKFF sponsored a Developing Countries Youth Leadership Conference in Atlanta Georgia, July 2017 on the campus of Emory University with 23 youth from 13 countries, and in July 2019 with 32 youth from 23 countries in Atlanta, Georgia on the campus of the Georgia Institute of Technology. The Kectil Program has sponsored large in-person conferences in Armenia, Peru, Kenya, Ghana, Nigeria, Vietnam, Taiwan, India, Zambia, South Africa, and Papua New Guinea.",
      "Kectil provides a Podcast show, the Kectil World Youth Network (KWYN), that allows youth leaders to speak directly to other youth about current issues facing their communities and countries. It is the position of MKFF and Kectil that virtually all news organizations have bias, and the only way for youth to hear authentic factual unfiltered news is by speaking with each other through platforms such as KWYN.",
      "Kectil has also created the Kectil YouTube Channel that has extensive free mentoring videos and materials. Kectil also maintains in-country Kectil Centers for Youth Excellence in Kenya, Zambia Armenia and Papua New Guinea.",
      "In 2025, Kectil created the Kectil Community Projects initiative, that organized grass-roots community projects that provided youth experience and support on how to help others selflessly. In its inaugural year, KCP supported over 150 community projects in 36 developing countries. These projects have been a great success, from a project in Nigeria teaching males about mental health and non-toxic behaviors, to language classes for females in Afghanistan. The Kectil Community Projects initiative is growing even bigger in 2026, with over 400 community projects in 61 countries in progress.",
      "In 2026, Kectil also created the Global Youth IP Forum where youth leaders can learn about intellectual property, innovation and entrepreneurism. This Forum is partnered with the Global IP Alliance, a network of IP experts from around the world.",
      "## Sherry M. Knowles’ work as a Lawyer and Advisor",
      "Sherry M. Knowles is an intellectual property attorney with over 40 years of experience in global corporate and private practice. In 2011, Ms. Knowles founded the law firm of Knowles Intellectual Property Strategies, LLC (Atlanta, Georgia), which focuses solely on representing clients in a range of pharmaceutical and biotechnology intellectual property matters, including licensing, contract strategy and negotiation, patent prosecution, portfolio management, litigation strategy, and investment matters, including private and public fundraising.",
      "Ms. Knowles received her B.S., cum laude, with distinction in chemistry from Duke University and received her M.S. in organic chemistry from Clemson University. Prior to attending law school, she spent several years at SmithKline Beecham (now GlaxoSmithKline) as a pharmaceutical synthetic chemist. She received her J.D., magna cum laude, from the University of Georgia where she was a Benjamin Phillips Scholar and was elected to the Order of the Coif.",
      "From 2006-2010, Ms. Knowles was the Senior Vice President and Chief Patent Counsel at GlaxoSmithKline, where she served as the worldwide head of patents for all litigation and patent transactional matters, and managed a global department of over 200 people in 12 offices, including in the US (3 offices), Europe (7 offices), China (1 office) and Australia (1 office).",
      "At GSK, Ms. Knowles was a member of the Legal Management Team, the Product Management Board (which made decisions on whether to progress internal late-stage developmental assets as well as whether to recommend large acquisitions and license agreements to the CEO), the Technology Investment Board (which made decisions on technology acquisitions and licenses) and the Scientific Advisory Board. During her leadership at GSK, the company achieved the successful resolution of patent disputes over Requip, Valtrex, Paxil in Europe, Avodart, the U.S. re-issue of the Advair patent, and a number of Consumer Health, biologics and biopharmaceutical matters. Ms. Knowles had the responsibility for over 1900 pending GSK US applications, over 2200 granted US patents, over 14,000 pending foreign applications and over 15,000 granted foreign patents.",
      "Ms. Knowles played a key role in the case of GlaxoSmithKline and Tafas v. Dudas, 541 F. Supp. 2d 805 (E.D. Va. 2008). On October 9, 2007, GSK became the first and only company in the US to file a lawsuit to challenge the Final Rules published by the US Patent and Trademark Office on August 7, 2007. During the course of litigation, 20 amicus briefs were filed by parties in support of GSK and Dr. Tafas, including from the AIPLA, PhRMA, BIO, IPO, Washington Legal Foundation and CropLife America. The litigation concluded in October 2009, when David Kappos made the decision to withdraw the contested regulations and GSK agreed to join with the PTO in a motion to dismiss all litigation.",
      "Prior to working with GlaxoSmithKline, Ms. Knowles spent almost 20 years in private law firm practice. From 1998-2006, Ms. Knowles was counsel, then partner and thereafter an equity partner at King & Spalding, and was the founder of the Biotechnology and Pharmaceutical Patent Practice, where she represented companies, foundations and universities in connection with patent prosecution, litigation, contracts, licensing, financing and other corporate intellectual property issues relating to pharmaceutical, biotechnology and chemical inventions. Ms. Knowles created and was a lead in the team defending the patent rights in Emtricitabine (“FTC”), the most widely prescribed medicine for HIV and the cornerstone of the Gilead HIV portfolio, for Emory University, which resulted in monetized royalties to Emory of $540 million. Ms. Knowles also represented Conor Medsystems in connection with a range of litigations over its developmental cardiovascular stent products against Boston Scientific and Angiotech, which helped facilitate Conor’s acquisition by Johnson & Johnson for approx $1.4 billion.",
      "Ms. Knowles was invited to testify before the U.S. Congress Senate Judiciary Committee, Subcommittee on Intellectual Property in June 2019 on “The State of Patent Eligibility in America: Part I”, and also submitted additional responses to written deposition questions from Senators on U.S. Patent Policy. She has submitted Amicus Briefs to the U.S. Court of Appeals for the Federal Circuit and the U.S. Supreme Court on issues of U.S. patent policy.",
      "In 2008, Managing IP Magazine named Ms. Knowles one of the top 10 most influential people in Intellectual Property, referring to her as a “Patent Owner’s Advocate.” In 2010, the New Jersey Intellectual Property Lawyers Association awarded GSK, with Ms. Knowles as the representative, the Jefferson Medal for exceptional contribution to Intellectual Property. In 2010, Managing IP Magazine named the GSK Global Patent Team the “In-House IP Team of the Year” for 2009 for the constructive approach to IP in the developing world, the engagement with public policy in Europe and the successful resolution of the USPTO rules matter in the US.",
      "In November 2011, Intellectual Asset Management Magazine listed Ms. Knowles among the top fifty key individuals, companies and institutions that have shaped the IP marketplace in the last eight years. Ms. Knowles is also listed in the IAM 250 “World’s Leading IP Strategists,” published by IAM Magazine in 2011, the IAM 300 “World’s Leading IP Strategists,” published by IAM Magazine in 2012-2026 as well as the IAM 1000 “World’s Leading Patent Professionals” in 2015-2026. She was also included in the list of Top 250 Women in IP by Managing IP Magazine in 2014, 2016-2025, and Managing IP’s 2016-2026 list of “IP Stars”.",
      "In October 2022, Ms. Knowles was inducted into the first inaugural class of the IPWatchDog Hall of Fame. IPWatchDog is the most highly read patent policy blog site in the world. Ms. Knowles has also acted at as a “Patent Master” at numerous IPWatchDog Patent Masters Symposiums. Ms. Knowles has contributed patent policy articles published by IPWatchDog.",
      "Ms. Knowles was Chair of the IP Subcommittee of PhRMA in 2008, and Chair Emeritus of the PhRMA IP Subcommittees in 2009 and 2010. From 2006-2010, she was a member of InterPat, which is the association of Chief Patent Counsels of the major pharmaceutical companies, and from 2008-2010 was a member of the Executive Committee of InterPat. She was the Chair of the work stream on data exclusivity for InterPat from 2006-2010.",
      "Ms. Knowles has been very active in intellectual property matters in developing countries. Ms. Knowles helped create and headed GSK’s Knowledge Pool for the treatment of neglected tropical diseases in least developed countries. This is the first industry initiative to donate intellectual property, know how and experience to qualified projects via a pool to accelerate capacity building and the development of drugs for commercially neglected diseases. Ms. Knowles led the selection of BIO Ventures for Global Health to be the administrator of the Pool. She also played a leading role in bringing key participants to the Pool, including the Technology Innovation Agency of South Africa. Ms. Knowles executed the Memorandum of Understanding on behalf of GSK with South Africa. She was also instrumental in obtaining the participation of iThemba Pharmaceuticals (a South African emerging company partially funded by the South African government to identify new drugs to treat tuberculosis), and Emory University Institute for Drug Discovery, which focuses on treating the most neglected diseases.",
      "In December 2010, Ms. Knowles chaired a conference at the World Bank hosted by The World Bank Legal Vice Presidency on “The Role of Intellectual Property in Development” at its Headquarters in Washington D.C. The Symposium was organized in collaboration with the Legal Department of the International Finance Corporation (IFC), the Economic Policy and Debt Department of the Poverty Reduction and Economic Management Network (PREM) and the World Bank Science and Technology Innovation Global Expert Team (STI GET). The Symposium focused on the current debate about the role of intellectual property in development, with the goal to address key issues on how to employ intellectual property in investment and decision-making processes to develop legal frameworks which promote economic growth.",
      "In September 2011, Ms. Knowles was a Co-Organizing Chair of a conference in Cape Town South Africa on “Accelerating Innovation and Intellectual Property in South Africa.” The conference brought together global leaders to discuss the unique needs and opportunities involved in creating strong frameworks for innovation and domestic commercial growth in developing countries, and in particular, Africa. In November 2013, Ms. Knowles acted as the Co-chair of the conference on “Creating and Leveraging IP in Developing Countries (“CLIPDC 2013”) with Co-chairs Ms. Astrid Ludin (Commissioner of the South African Patent Office) and Ms. Mavis Nyalto (Acting Head, National IP Management Office of South Africa).",
      "Ms. Knowles was one of the two keynote speakers at the World Intellectual Property Organization (“WIPO”) Expert Forum on International Technology Transfer held in Geneva, Switzerland (February 16-18, 2015), an agency of the United Nations. She spoke on the subject of “Technology Transfer: High-Level Perspective from Developed Countries”. The Expert Forum was one of the deliverables of the multi-year WIPO “Project on Intellectual Property and Technology Transfer: Common Challenges – Building Solutions” to further facilitate access to knowledge and technology from the developed countries to developing countries including least developed countries. She was also an invited speaker at WIPO’s conference on “IP and Development” in April 2016, also in Geneva, where developing and least developed countries discussed the how to address intellectual property in their countries.",
      "Ms. Knowles is a frequent speaker on legal and policy issues relating to intellectual property, and particularly the pharmaceutical and biotechnology sectors. Ms. Knowles is the author of the article “Fixing the Legal Framework for Pharmaceutical Research” Science 327 1083 (2010), and a Response Letter to the Editor, Science 328, 1354 (2010). She is also the co-author of the articles “Vertical Disintegration in the Pharma Industry-The Role of IP”, Intellectual Asset Management Magazine, Issue 45, Jan/Feb 2011, p. 10-15; “Robin Hood, the Magna Carta and the European Convention on Human Rights”, Intellectual Asset Management Magazine, Issue 52, March/April 2012; “Monetisation Models in Biotech and Pharma”, Intellectual Asset Management Magazine, Issue 57, January/February 2013; “Headwinds for the U.S. Biopharmaceutical Industry”, Intellectual Asset Management Magazine, Issue 73, January/February 2015; and “Twenty Years after TRIPS Agreement-Are We Closer to Global Substantive Patent Harmonization?”, Intellectual Asset Management Magazine, Issue 75, December 2015/January 2016. Ms. Knowles was quoted about U.S. patent issues on page 7 of Financial Times 17 October 2017. Ms. Knowles is also the co-author of Knowles and Prosser, Unconstitutional Application of 35 U.S.C. §101 by the U.S. Supreme Court, 18 J. Marshall Rev. Intell. Prop. L. 2018.",
    ],
    photoSrc: "/sherry-knowles.jpg",
  },
  {
    slug: "brooke-shafer",
    name: "Brooke Shafer",
    role: "Director",
    href: "/about/directors/brooke-shafer",
    summary:
      "Brooke Shafer has a Masters of Marketing Research (“MMR”) from the Terry School of Business of the University of Georgia, which was the first MMR program in the United States and is internationally regarded as the standard for Marketing Research programs.",
    focus: [
      "Marketing research and data analytics",
      "Client strategy and business growth",
      "Consumer go-to-market strategy",
    ],
    bio: [
      "Brooke Shafer has a Masters of Marketing Research (“MMR”) from the Terry School of Business of the University of Georgia, which was the first MMR program in the United States and is internationally regarded as the standard for Marketing Research programs. Brooke has a B.S. in Industrial and Organizational Psychology, also from The University of Georgia.",
      "Brooke is currently the CEO at CMI and marketing research and data analytics company in Atlanta GA, based in Atlanta, Georgia. CMI is a seasoned marketing research firm that supports Fortune 500 companies with their go-to-market plans and strategic business needs. The company sends out over 13 million surveys annually and works across over 13 industries. In Brooke’s role, she leads the client strategy and is focused on the long-term success and growth of the organization.",
      "Prior to her role at CMI, she had a long-standing career at AT&T. There she most recently led the Postpaid Wireless Subscriber Base, as well as DIRECT, and DIRECTNOW Subscriber Bases and Retention Department. Brooke also led Go-To-Market Strategy for all of AT&T’s consumer product portfolio, which included, AT&T Mobility, DIRECTV, U-verse, and DIRECTVNOW. This entailed pricing and promotion strategy, acquisition targeting, and retail.",
      "Prior to her role leading Go-To-Market, Brooke led the Advertising & Retail Insights for AT&T Inc., based in Atlanta, Georgia, which is the largest advertiser in the United States. Brooke manages the consumer advertising and retail research portfolio. As such, she leads a team that is charged with analyzing AT&T and DirecTV’s advertising & communication effectiveness across all advertising mediums: TV, Digital, Social, Out of Home, Print, and more. She dedicates a portion of her time to working with top digital publishers, social platforms (such as Facebook, YouTube, and Twitter), and sponsorships to help develop new analytical capabilities for measuring the company’s covered Brands’ returns on investment.",
      "Brooke attended the XV International AIDS Conference in 2004 in Bangkok, Thailand, the first international AIDS conference held in Southeast Asia, where she had the pleasure of hearing the Closing Ceremony speech of Nelson Mandela, the last stop on his “46664” Tour to raise awareness to fight HIV.",
    ],
    photoSrc: "/brooke-shafer.jpg",
  },
  {
    slug: "christopher-zalesky",
    name: "Chris Zalesky",
    role: "Director",
    href: "/about/directors/christopher-zalesky",
    summary:
      "Dr. Chris Zalesky is an Assistant Professor at Emory University with dual appointments in Anesthesiology (Critical Care) and Emergency Medicine.",
    focus: [
      "Anesthesiology and critical care",
      "Emergency medicine",
      "Clinical research and ECMO",
    ],
    bio: [
      "Dr. Chris Zalesky is an Assistant Professor at Emory University with dual appointments in Anesthesiology (Critical Care) and Emergency Medicine. Originally from Atlanta, GA, he earned his undergraduate degree in Biology from Wake Forest University before returning to Atlanta,Georgia for medical school at the Emory University School of Medicine, where he also completed a Master's of Clinical Research.",
      "He completed his residency in Emergency Medicine at the University of Cincinnati, also serving as a Helicopter EMS Flight Physician for four years and as a Chief Resident. He then spent two years as a Fellow in the Department of Anesthesiology at Emory University, focusing on Critical Care.",
      "Clinically, he now splits his time between the Cardiovascular ICU at Emory University Hospital, and Extracorporeal membrane oxygenation (ECMO) (the ECMO Service) and the Emergency Department at Emory University Hospital Midtown (EUHM). His academic focus centers on research on critically ill patients in the ED, the ED-ICU interface, ECMO, and mechanical ventilation on ECMO.",
      "Outside of the hospital, he is married with two daughters and a son. Most of his free time is spent with his family, though he also enjoys races, cooking, 3D printing, and woodworking.",
    ],
    photoSrc: "/chris-zalesky.jpg",
  },
];

export function getMkffDirectorBySlug(slug: string) {
  return mkffDirectors.find((director) => director.slug === slug);
}
