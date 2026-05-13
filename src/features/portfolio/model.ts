export interface PortfolioLink {
    name: string;
    url: string;
    kind?: 'download' | 'source' | 'other';
}

export interface PortfolioSection {
    name: string;
    description?: string;
    list?: string[];
    link?: PortfolioLink;
    links?: PortfolioLink[];
}

export interface PortfolioMedia {
    image: string;
    description: string;
}

export interface Project {
    slug: string;
    name: string;
    description: string;
    date: string;
    sections: PortfolioSection[];
    links?: PortfolioLink[];
    video?: PortfolioLink;
    logo?: string;
    slideshow?: PortfolioMedia[];
}
