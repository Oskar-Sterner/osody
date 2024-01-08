export type InformationPanelType = {
  title: string;
  description: string;
  use: string;
  ides: string;
  idesIcons: string[];
  languages: string;
  languagesIcons: string[];
  editing: string;
  editingIcons: string[];
};

const InformationPanel: InformationPanelType[] = [
  {
    title: 'Who we are',
    description:
      'At Osody Studios, we are more than just developers. We are "visioneers" who possess an unwavering passion for turning ideas into realities using the enchantment of coding. Our approach is rooted in the understanding that visualizing concepts with exceptional creativity allows us to establish a deep and meaningful connection with our clients.',
    use: 'What we use',
    ides: 'IDEs',
    idesIcons: [
      'https://i.imgur.com/JbZWkJb.png',
      'https://i.imgur.com/yrQUoAw.png',
      'https://i.imgur.com/iF6uGNr.png',
    ],
    languages: 'Languages' + ' & Frameworks',
    languagesIcons: [
      'https://i.imgur.com/00iBluo.png',
      'https://i.imgur.com/YjHZKmM.png',
      'https://i.imgur.com/yd3LBsH.png',
      'https://i.imgur.com/UXIdfQe.png',
      'https://i.imgur.com/EIEic7t.png',
      'https://i.imgur.com/5XouCN8.png',
      'https://i.imgur.com/tRmP3H8.png',
      'https://i.imgur.com/mVSWVIl.png',
      'https://i.imgur.com/PD7Uu0D.png',
    ],
    editing: 'Editing' + ' & Design',
    editingIcons: [
      'https://i.imgur.com/mdzFPbv.png',
      'https://i.imgur.com/r2qEM4W.png',
      'https://i.imgur.com/NVmsCBY.png',
    ],
  },
];

export default InformationPanel;
