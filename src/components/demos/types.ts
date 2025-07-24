
// Define shared types for demo components
export type DemoId = 'email-spoofing' | 'fake-login' | 'clone-phishing' | 'smishing';
export type DemoDifficulty = 'beginner' | 'intermediate' | 'advanced';

export interface DemoData {
  id: DemoId;
  title: string;
  description: string;
  difficulty: DemoDifficulty;
  category: string;
  image?: string;
}
