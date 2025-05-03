export interface OrganizationPerson {
    image: string;
    alt: string;
    name: string;
    role?: string; // opcional, como no PropTypes
  }
  
  export interface OrganizationPeopleProps {
    title: string;
    members: OrganizationPerson[];
  }
  