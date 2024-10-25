export interface Post {
    slug: string;
    title: string;
    feature_image: string;
    feature_image_alt: string;
    tags: { slug: string; name: string }[];
    authors: { profile_image: string; name: string }[];
    published_at: string;
    reading_time: number;
    html: string;
}