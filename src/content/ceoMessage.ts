export interface CeoMessageContent {
  heading: {
    prefix: string;
    highlight: string;
  };
  message: string;
  author: {
    name: string;
    title: string;
    imageSrc: string;
    imageAlt: string;
  };
}

export const ceoMessageData: CeoMessageContent = {
  heading: {
    prefix: "Message From ",
    highlight: "CEO",
  },
  message:
    "We apply our 20 years of experience, ideas & best international insights to keep our clients at the leading edge. And we should be able to surpass your expectations. We hold each other accountable for creating a company we can all be proud to work at. It is my promise that, you will get value of each penny you spend for the service you will buy from us.",
  author: {
    name: "Mr. Ashish Narola",
    title: "Co Founder & CEO",
    // Image path set to /images/ceo.png as requested (kept as broken image until user adds actual image file)
    imageSrc: "/images/ceo.webp",
    imageAlt: "Mr. Ashish Narola - Co Founder & CEO",
  },
};
