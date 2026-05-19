import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Hey, It's Me Seej",
  EMAIL: "heyitsmeseej@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "My corner of the internet.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const ART: Metadata = {
  TITLE: "Art",
  DESCRIPTION: "Photography, watercolor, sketches, and visual things.",
};

export const MUSINGS: Metadata = {
  TITLE: "Musings",
  DESCRIPTION: "Thoughts, observations, and things rattling around in my head.",
};

export const TECH: Metadata = {
  TITLE: "Tech",
  DESCRIPTION: "Tools, stacks, side projects, and things I'm building or breaking.",
};

export const SOCIALS: Socials = [
  {
    NAME: "resume",
    HREF: "https://resume.heyitsmeseej.com",
  }
];
