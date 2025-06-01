export interface AuthUser {
  _id: string; // This will match auth._id
  name: string;
  bio: string;
  skills: string[];
  social: {
    github: string;
    linkedin: string;
    twitter: string;
    website: string;
  };
  avatar: string;
  roles: number[];
  createdAt: string;
  updatedAt: string;
}
