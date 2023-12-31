export type GalleryImage = {
  label: string;
  src: string;
  alt?: string;
};

export type WorkContent = {
  imgSrc?: string;
  title?: string;
  summary: string | TrustedHTML;
  liveLink?: string;
};

export type TabularProjectData = {
  title: string;
  imgConfig?: GalleryImage[];
  content: WorkContent[];
};
