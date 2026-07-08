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
      "Everyone has a story. Our parents, grandparents, ancestors, the places and situations they were from and the places and situations we grew up in help create the fabric of our lives.",
  },
  {
    label: "Why I Created Kectil",
    href: "/about/why",
    description:
      "Many people have asked me over the past year why I created The Kectil Program. I answer that it is “The Project and the Challenge.”",
  },
  {
    label: "Our Directors",
    href: "/about/directors",
    description:
      "Meet the directors of the Malmar Knowles Family Foundation and The Kectil Program.",
  },
];

/**
 * Verbatim MKFF/Kectil copy supplied by the client (Sherry Knowles).
 * Body text must not be paraphrased, shortened, or retitled — styling is the
 * site's, the words are hers. Sources: kipsllc.com/kectil-website ("KECTIL
 * ABOUT US", July 5 2026), her "The Project and the Challenge" letter (same
 * email), and the About MKFF page she wrote for kectil.com (2017).
 */
export type MkffContentBlock =
  | { kind: "p"; text: string }
  | { kind: "quote"; text: string }
  | { kind: "list"; items: readonly string[] }
  | { kind: "image"; src: string; alt: string; width: number; height: number };

export type MkffContentSection = {
  /** Heading exactly as the client wrote it; omitted for untitled intro/closing passages. */
  title?: string;
  blocks: readonly MkffContentBlock[];
};

/** "The Kectil Program" write-up (Mission, Kectil Code, The Kectil Program, Who Can Apply). */
export const mkffAboutKectilSections: readonly MkffContentSection[] = [
  {
    title: "Mission",
    blocks: [
      {
        kind: "p",
        text: "The Kectil Program was created to identify and nurture highly talented youth in developing countries who have the potential to make a positive difference in their communities and countries.",
      },
      {
        kind: "p",
        text: "We accomplish our Mission Statement by (i) facilitating innovative leadership training and (ii) providing a means to allow these highly talented youth become part of a guided network with other similarly talented and passionate youth in developing countries who will support, nurture, teach and learn from each other as they mature.",
      },
      {
        kind: "p",
        text: "The Kectil Framework embodies both of the goals of the famous African proverb:",
      },
      {
        kind: "quote",
        text: "“If you want to go fast, go alone; if you want to go far, go together.”",
      },
    ],
  },
  {
    title: "Kectil Code",
    blocks: [
      {
        kind: "p",
        text: "The Kectil Code is the framework of the Kectil Program. Each participant is required to comply with the Kectil Code.",
      },
      {
        kind: "list",
        items: [
          "Each participant shall be referred to as a Kectil Colleague and shall treat others as Colleagues.",
          "Each Kectil Colleague will give equal respect to every other Kectil Colleague regardless of nationality, religion, culture or gender.",
          "Each Kectil Colleague will discuss ideas and contributions of other Kectil Colleagues with positive, collaborative and respectful comments.",
          "Each Kectil Colleague will honor the Developing Country Youth Leadership Network by creating positive, lasting bonds with other Kectil Colleagues with the intent to stay connected and positively support each other toward future leadership that adds value to the local and national community.",
          "Each Kectil Colleague will carry out all the assignments of the program.",
          "Each Kectil Colleague will use best effort to attend each webcast of the program.",
          "Kectil Colleagues uphold the honor of the Kectil Program by treating others in his/her community with respect and compassion.",
          "Kectil Colleagues will not take non-prescribed drugs or misuse alcohol.",
          "If selected to attend the Developing Country Youth Leadership Conference in Atlanta, the Kectil Colleague will conduct himself/herself in a manner that is a role model for others and will be an excellent representative of his/her community.",
        ],
      },
    ],
  },
  {
    title: "The Kectil Program",
    blocks: [
      {
        kind: "p",
        text: "“KECTIL” is an acronym that refers to the Knowles Educational and Charitable Trust for International Leadership.",
      },
      {
        kind: "p",
        text: "The Kectil Program is based of the following principals:",
      },
      {
        kind: "list",
        items: [
          "Creating an authentic, collaborative network of high potential youth from developing and least developed countries can break down prejudices, lead to cultural, religious and gender understanding and give youth the comfort that they are more than just themselves– they are part of a mutual youth-based support system with the goal to make a positive difference in their lives, their Colleagues’ lives and the lives of those in their communities.",
          "Identifying, embracing and mentoring high potential youth (17-26) from developing and least developed countries can have a dramatic effect on the youths’ dreams, service to others and life accomplishments.",
          "Nothing comes easy and there is “no free lunch.” The results will not be achieved without hard work, dedication and an open mindedness to cultural understanding and compassion.",
        ],
      },
      {
        kind: "p",
        text: "The Program works to achieve these goals in three parts: a one-year Web-based Program, the Developing Youth Leadership Conference in Atlanta, United States, and the Alumni Network.",
      },
      {
        kind: "p",
        text: "Due to logistics and cost, more applicants can be accepted for the Web-based Program than the Developing Youth Leadership Conference in Atlanta. If an applicant is accepted for the Web-based Program but not the Developing Youth Leadership Conference, the applicant can apply the next year to attend the Conference. All applicants accepted for either (i) the Web-based Program or (ii) the Web-based Program and the Leadership Conference are encouraged to join and actively participate in the Alumni Network at the end of the Program.",
      },
    ],
  },
  {
    title: "Who Can Apply",
    blocks: [
      {
        kind: "p",
        text: "High potential youth (aged 17-26) in least developed and developing countries who have demonstrated a talent and passion for leadership, scholarship or innovation, are proficient in English and have access to a computer and the internet.",
      },
    ],
  },
];

/** "About MKFF" write-up — the family history behind the foundation. */
export const mkffHistorySections: readonly MkffContentSection[] = [
  {
    blocks: [
      {
        kind: "p",
        text: "Everyone has a story. Our parents, grandparents, ancestors, the places and situations they were from and the places and situations we grew up in help create the fabric of our lives. What is your story? We would love to hear from youth in developing or least developed countries about your relatives and your communities. Our stories are a reflection of our culture–beauty, love, challenges, successes, failures, advancements, hardships and just…life. Please send to mail@kectil.com.",
      },
      {
        kind: "p",
        text: "The Malmar Knowles Family Foundation (“MKFF”) is the parent organization of The Kectil Program. It is a Non-profit Corporation organized under the laws of Georgia, USA and Section 501(c)(3) of the Internal Revenue Code.",
      },
      {
        kind: "p",
        text: "Here is the story of the people who formed the fabric of my life…My story is not of course from a developing country nor does it reflect the types of challenges that can be found in developing countries, but it does describe the roots and the people behind The Kectil Program, who I would like to introduce you to.",
      },
    ],
  },
  {
    title: "The Malmar Family and Ancestors",
    blocks: [
      {
        kind: "p",
        text: "My mother was Valerie Brewster Malmar, and when she married my father, Dr. Cecil M. Knowles, became Valerie Malmar Knowles. She was born in Westfield, New Jersey in 1921 to Hilda Reeb and Ward Brewster Malmar. She was the life of the party and the sunshine in the house. When she passed away in 2015, it was stated that “According to her daughters, Valerie was the best mother a child could have. She combined wisdom, fun, generosity, good judgement and a grand sense of adventure. Whenever she walked into a room her infectious smile and radiant countenance brightened the room. It was not uncommon for strangers to engage her in conversation because she possessed that rare ability to listen, to understand and to lift others up.” She taught us not to take life too seriously, and to find something positive in any situation. She also taught us to speak with every person in the room to discover what is important to that person, and we would then be quizzed on what we learned!",
      },
      {
        kind: "p",
        text: "Hilda Reeb, born in 1894, Valerie’s mother and my grandmother, was an extremely smart woman who read four newspapers a day (and studied the stock market!) and spoke five languages. Hilda was born in Ohio to Charles E. Reeb and Jennie Burrows, who later moved to Brooklyn NY when it was still farmland and then to New Jersey. Hilda spent the majority of her life in Westfield and Summit, New Jersey, and died in 1975. She was educated at Miss Mason’s School, The Castle, in Tarrytown NY, a girl’s school where she was elected President of her class.",
      },
      {
        kind: "p",
        text: "Hilda was born before women could have a career or maximize their talents, and so she entertained herself by playing duplicate bridge tournaments in New York City, playing the piano beautifully without any written music sheets (wonderfully enjoyed during the holidays for sing-alongs) and traveling on numerous adventure trips around the world. I remember going with my parents to the port of New York to drop her (and many trunks) at huge ocean liners and then picking her up with the cultural treasures she brought back. She always traveled alone, again highly unusual for a woman at the time. The captains on the ships often asked her to provide guest piano performances for others on the ship.",
      },
      {
        kind: "p",
        text: "I attach some of her Passports here, which begin in 1950. Her Passport stamps as early as the 1950’s establish her keen interest in developing countries, with evidence of entry into Egypt, India, Pakistan, Nepal, Thailand, China and other countries.",
      },
      {
        kind: "p",
        text: "Hilda’s father, my great-grandfather, Charles E. Reeb, born in 1869, was a successful businessman and entrepreneur. He was in the business of construction materials, starting the company “Door & Sash” in Pennsylvania and then creating Reeb Millwork in 1912 in New Jersey. The Reebs lived on Highland Avenue in Westfield, in a house that had an in-door swimming pool! Charles was known for his intelligence and sharp business skills. When the great recession hit in 1920, Charles kept all of his employees on the payroll even though there were few sales. Hilda’s husband Ward Brewster Malmar purchased Reeb Millwork from Charles, and then sold it on retirement. The Reeb company still exists in more modern form today (www.Reeb.com).",
      },
      {
        kind: "p",
        text: "Hilda’s husband and my grandfather, Ward Brewster Malmar, was born in 1890 in New York. Ward traces his roots to Malmӧ, Sweden. His father, Ernest Malmar, was born in 1855 in Sweden and immigrated to the United States from Sweden with his brother, passing through the entry port of Ellis Island, N.Y. When the U.S. immigration officials asked their last name, the brothers, who did not speak English, gave the name of their hometown, Malmӧ. The immigration official translated this as “Malmar”, which became their last name. Malmar is now the first name of this Family Foundation, which can be considered a form of tribute to the many people from countries who use various ways to provide a better life for themselves and their families. Ward was a kind, gentle man who ran Reeb Millwork and then retired to his boat in Fort Lauderdale, Florida, where he died in 1959.",
      },
      {
        kind: "p",
        text: "Ward’s mother (Ernest’s wife) was Grace Abigail Brewster, who was born in 1865 and died in 1929. Grace was a direct descendant of William Brewster, a Pilgrim from England with diplomatic, political and religious experience who was one of the leaders of the 1620 voyage of the Mayflower from Netherlands to Plymouth, Massachusetts, and among the founders of the Plymouth Rock Colony. Grace was a member of The National Society of Colonial Dames of America, which is an American organization composed of women who are descended from an ancestor who came to reside in an American colony before 1776, and whose services were rendered during the Colonial Period.",
      },
    ],
  },
  {
    title: "The Knowles Family and Ancestors",
    blocks: [
      {
        kind: "p",
        text: "It has seemed ironic to some that my mother, Valerie Knowles, a sophisticated socialite from New Jersey, married Cecil M. Knowles (1917-1998), who was born and raised in a very rural area of Mississippi, an agricultural state located in the southeastern United States. My father grew up on a working farm that did not have electricity until after President Franklin Delano Roosevelt enacted the Rural Electrification Act of 1936, and did not have inside bathrooms during his youth. The family grew almost all of their own food with meat-producing animals and crops. His father, Claudie Martin Knowles (1896-1969) and mother Eleanor Knowles (1897-1992) ran a dairy farm. The family included two sons (my father and M.B.) and two daughters (Merle and Alla Frances). In many ways, Mississippi at that time resembled the conditions sometimes found in disadvantaged areas of developing countries. The children were taught in a one room school house for all grades. Therefore, of importance to the Kectil Program today, there was a great emphasis on education and strict discipline from mother Elnora which encouraged her children to study into the evening on the farm by lamplight. The parents’ demand for achievement motivated both my father and his brother to leave the farm, pursue higher education and ultimately both receive Masters and Ph.D. degrees from the University of Texas in Organic Chemistry.",
      },
      {
        kind: "p",
        text: "After receiving his Ph.D. in Organic Chemistry, Cecil took a job in industrial chemistry at General Aniline and Film (now GAF Corporation) in New York and moved to New Jersey. During his career, he helped develop the formula for liquid detergent and the formula for the very popular Dove soap.",
      },
      {
        kind: "p",
        text: "Cecil met Valerie Malmar through friends in New Jersey. Valerie’s mother Hilda told Valerie that Cecil was the one to marry because Hilda saw Cecil was a very smart self-made man who valued education-and Valerie listened to her mother.",
      },
      {
        kind: "p",
        text: "My father was quiet, studious and smart. Cecil emphasized education and good grades to me and my sister and demanded hard work. Another attribute I watched and admired was that when he was in a situation with people talking about subjects he might not be familiar with, he made sure he was always the last person to speak. He would listen to what each person had to say, and then when he finally spoke he had time to think about it, said something quite intuitive and then stopped talking. A great skill I am not sure I have accomplished!",
      },
      {
        kind: "p",
        text: "This unlikely group of a fun-loving socialite, a woman too smart for the time period and community she lived in, a successful businessman, an immigrant who passed through Ellis Island, a descendant from a leader of the Mayflower voyage who established the Plymouth Colony in Massachusetts, and a family who raised children in a home without electricity and bathroom plumbing with one-room school house training that produced two Ph.D.s in chemistry are the history of The Malmar Knowles Family Foundation that brings The Kectil Program to you.",
      },
    ],
  },
  {
    blocks: [
      {
        kind: "p",
        text: "The title \"Kectil\" refers to the \"Knowles Educational and Charitable Trust for International Leadership\". The goal of this program is to nurture, network, and mentor youth in developing countries who have the potential to be leaders and make a positive difference in their communities, countries..... and maybe even the world!",
      },
    ],
  },
];

/** "The Project and the Challenge" — the founder's letter on why she created Kectil. */
export const mkffWhyLetter = {
  title: "The Project and the Challenge",
  intro: [
    {
      kind: "p",
      text: "Many people have asked me over the past year why I created The Kectil Program. And why I am spending so much time and effort on it? Why such a large project? Why should we spend family money on this? Why am I spending weekends answering emails from countries I have never visited to speak with youth I have never met? And on and on.",
    },
    {
      kind: "p",
      text: "I answer that it is “The Project and the Challenge.”",
    },
  ] as readonly MkffContentBlock[],
  sections: [
    {
      title: "The Project",
      blocks: [
        {
          kind: "p",
          text: "We think life is long but it is very short. And we have no idea what day it will be over. Physicists now tell us that the universe was created about 13.5 billion years ago and that we are all made of stardust (I like that idea!). It is also estimated that our universe has about 5 billion years left before it starts contracting. If we live 100 years out of that 18.5 billion years, we are lucky.",
        },
        {
          kind: "p",
          text: "Add to that the odds that any of us will be born at all. Imagine how many individual eggs and sperm existed on the day we were conceived—what are the odds that the exact two would come together to form each of us? And the ratio of pairs that did not result in a life greatly dwarfs those few that did. Every person who walks on this earth is a winner who has already won the lottery. We were given the extraordinary gift of the right to exist for a short time. We should wake up every morning with appreciation, regardless of our circumstances.",
        },
        {
          kind: "p",
          text: "I am reminded of one of my favorite childhood books, Miss Rumphius by Barbara Cooney. If you haven’t read it and don’t mind reading a child’s book, I recommend it. It is the story of Alice Rumphius, a woman who wanted to go to faraway places and then live by the sea. As a young woman, she traveled to many spots with great adventure. She then settled into a seaside town and realized there is one thing left to do: “You must do something to make the world more beautiful.” After a hard winter, Alice noticed that the gorgeous purple, blue and rose lupine flowers survive the cold weather. She immediately knew what to do. She ordered lupine seeds and dropped them all over her town. The lupines prospered, turning her community into a magical sight enjoyed by all.",
        },
        {
          kind: "image",
          src: "/about/miss-rumphius.png",
          alt: "Cover of the book Miss Rumphius, story and pictures by Barbara Cooney",
          width: 438,
          height: 364,
        },
        {
          kind: "p",
          text: "The message is clear-we each need to search for that one thing we can do—“The Project”—that will make the world a more beautiful place than if you had not been the one of the infinitesimally few to win the lottery and experience life. I am strongly of the conviction that each person who has been given the miracle of life against all odds should at some point in his/her life select and carry out a Project that is of a scale equal to what has been given to that person in assets and ability during life. It should be something that is given with nothing expected in return and it should be something that makes the world a little bit better than when you got here. It is a gift.",
        },
        {
          kind: "p",
          text: "I spent many years thinking about what my ”Project” should be. After my mother died in July 2015, it immediately came to me, as it did to Miss Rumphius, what I should do. I had also traveled the world and met many people. I am unusually fortunate to work with many great minds. I decided to create a family foundation to network youth in developing countries as a communications and growth platform for ethical leadership, career building and global understanding. The Kectil Program is my “Project”. It is my gift and it is my hope that this unique forum for talented youth grows as well as lupines spread across the fields.",
        },
      ],
    },
    {
      title: "The Challenge",
      blocks: [
        {
          kind: "p",
          text: "What about “The Challenge”? The challenge is to think of something that is impossible, and then achieve it. The Kectil Program is also an example of “The Challenge”.",
        },
        {
          kind: "p",
          text: "When this Program was imagined, I had no idea how to accomplish it. Most would say it isn’t possible for a small group of people to put together a program like this, much less in one year. I didn’t know what the framework should look like. I had to manage the creation of a website and then an application portal, having no experience in running a non-profit foundation, much less global recruitment. I had to publicize it so talented youth would come to the site and participate. I had to recruit faculty, mentors and an unparalleled Advisory Board. And I had to accomplish all of this while working full time as a lawyer at a firm I founded, while meeting all of the clients’ expectations and deadlines.",
        },
        {
          kind: "p",
          text: "Kectil could not have been accomplished without leaning heavily on others with great talent and passion, who stepped up to help spread the word and provide advice and direction. The Kectil Directors, my children Brooke Shafer and Chris Zalesky, gave essential help and support with infrastructure and youth perspective. The Advisory Board, all volunteers, spent hours of their valuable time with suggestions, introductions, and contributions of content.",
        },
        {
          kind: "p",
          text: "My challenge to you is likewise to aim higher than you think you are able to go, and then figure out a way to get there and surpass it. You have the ability, talent and passion to do this. We hope this Program will be a small contribution to your journey to accomplish the impossible.",
        },
        {
          kind: "image",
          src: "/about/achieve-the-impossible.png",
          alt: "Quote graphic reading “Only those who attempt the absurd can achieve the impossible.” — Albert Einstein",
          width: 500,
          height: 239,
        },
      ],
    },
  ] as readonly MkffContentSection[],
  signOff: ["With kind regards", "Sherry Knowles"] as readonly string[],
};

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
