export interface ISecondaryCourse {
  seccourseId: number;
  title: string;
  principalimage: string;
  description: string;
  priceAcademy: number;
  priceRegular: number;
  percentage: number;
  toolIds: number[];
  freqquestIds: number[];
  studyplans: any[];
  tools: any[];
  freqquests: any[];
  level: string;
  mode: string;
  hours: number;
  benefits: string[];
  schedule: string;
  achievement: string;
  exterallink: string;
  videoUrl: string;
}

export const defaultSecondaryCourse: ISecondaryCourse = {
  seccourseId: 0,
  title: '',
  principalimage: '',
  description: '',
  priceAcademy: 0,
  priceRegular: 0,
  percentage: 0,
  toolIds: [],
  freqquestIds: [],
  studyplans: [],
  tools: [],
  freqquests: [],
  level: '',
  mode: '',
  hours: 0,
  benefits: [],
  schedule: '',
  achievement: '',
  exterallink: '',
  videoUrl: '',
};
