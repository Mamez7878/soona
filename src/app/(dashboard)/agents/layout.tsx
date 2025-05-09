import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agent Conversation |  Soona',
  description: 'Interactive agent conversation powered by  Soona',
  openGraph: {
    title: 'Agent Conversation |  Soona',
    description: 'Interactive agent conversation powered by  Soona',
    type: 'website',
  },
};

export default function AgentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
