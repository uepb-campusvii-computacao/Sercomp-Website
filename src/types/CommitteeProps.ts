export interface CommitteeMember {
  name: string;
  image: string;
}

export interface CommitteeProps {
  committeeData: CommitteeMember[];
  title: string;
  description: string;
}