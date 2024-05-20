import icon from "../src/assets/icon.png";

interface IConfig {
  me: {
    name: string;
    job: string;
    started: string;
    stack: string;
    hobby: string;
    projectLink: string;
  };
  socials: {
    [name: string]: string;
  };
  projects: {
    [name: string]: {
      url: string;
      tags: string[];
    };
  };
  og: {
    image: string;
  };
}

export const Config: IConfig = {
  me: {
    name: "Sudais Khan",
    job: "jr backend engineer",
    started: "2023-01-01",
    stack: "MERN",
    hobby: "practice my visual designing skills",
    projectLink: "https://github.com/Skaps664?tab=repositories",
  },
  socials: {
    twitter: "https://twitter.com/skaps64",
    github: "https://github.com/Skaps664",
  },
  projects: {
    "Pinterest Backend Clone": {
      url: "https://github.com/Skaps664/pinterest_like",
      tags: ["ES6", "node", "express", "mongoDB"],
    },
    "Linux": {
      url: "https://github.com/Skaps664/pinterest_like",
      tags: ["python", "keras", "cnn", "pandas"],
    },
  },
  og: {
    image: icon.src,
  },
};
