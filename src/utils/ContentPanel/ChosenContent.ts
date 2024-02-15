export type ContentType = {
  title: string;
  description: string;
  img?: string;
};

const ChosenContent: ContentType[] = [
  {
    title: 'Projects',
    description:
      'Here are some of the projects we have been working on. Please feel free to click on a panel/pane to explore each project and learn more about what we do, how we do it, and why we do it.',
  },
  {
    title: 'About',
    description: '',
    img: 'https://i.imgur.com/Nk54FgU.gif',
  },
  {
    title: 'Mail',
    description: `Got a business idea or a project in mind? We're here to listen. 
    Send us your ideas, questions, or thoughts, and we'll get back to you promptly. 
    Let's make great things happen together!`,
  },
  {
    title: 'Clients',
    description:
      'Curious about who we have been wortking with? Explore some of our beloved clients we have partnered with over the years and see the projects we have undertaken together.',
  },
  {
    title: 'Dashboard',
    description:
      'Here is the admin dashboard where you can manage your projects, clients, and other content on the site!',
  },
];

export default ChosenContent;
