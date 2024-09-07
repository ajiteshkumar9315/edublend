// src/types.ts

export interface Course {
    id: string;
    title: string;
    description: string;
    institute: string;
    legacy: string;
    desc: string;
    image: string;
    duration: string;
    ratings: string;
    benefits: string;
    alumni: string;
    feature: string;
    keywords: string;
    tools: string;
    projects: string;
    educator: string;
  }

export interface DataItem {
    id: number;
    icon: React.JSX.Element;
    title: string;
    ratings: number;
    popularity: number;
    duration: string;
    description: string;
  }
  