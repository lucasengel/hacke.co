export interface IResume {
  profile: {
    name: string;
    title: string;
    bio: string[];
    phone: string;
    email: string;
    website: string;
    address: string;
    linkedin: string;
  };
  experience: IExperience[];
  education: IExperience[];
  skills: {
    languages: string[];
    technical: string[];
  };
}

export interface IExperience {
  title: string;
  institution: string;
  start: string;
  end: string;
  description?: string | string[];
}
