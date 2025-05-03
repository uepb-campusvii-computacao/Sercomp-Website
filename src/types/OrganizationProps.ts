export interface OrganizationMember {
    image: string;
    alt: string;
  }
  
  export interface OrganizationProps {
    title: string;
    members: OrganizationMember[];
  }
  