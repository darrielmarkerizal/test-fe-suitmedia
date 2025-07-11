export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  content: string;
  published_at: string;
  small_image?: Array<{
    id: number;
    mime: string;
    file_name: string;
    url: string;
  }>;
  medium_image?: Array<{
    id: number;
    mime: string;
    file_name: string;
    url: string;
  }>;
}

export interface ApiResponse {
  data: BlogPost[];
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    per_page: number;
    to: number;
    total: number;
  };
  links: {
    first: string;
    last: string;
    next: string | null;
    prev: string | null;
  };
}

export interface BlogGridFilters {
  page: number;
  perPage: number;
  sort: "newest" | "oldest";
}
