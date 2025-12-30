import { ReactNode } from 'react';

interface Props {
  title: string;
  description?: string;
  footer?: ReactNode;
  children: ReactNode;
}

export default function Card({ title, description, footer, children }: Props) {
  return (
    <div className="w-full max-w-3xl m-auto my-8 border rounded-md p border-myai-primary/30 bg-myai-bg-panel/30 backdrop-blur-sm hover:border-myai-primary/50 transition-all duration-300">
      <div className="px-5 py-4">
        <h3 className="mb-1 text-2xl font-medium gradient-text">{title}</h3>
        <p className="text-zinc-300">{description}</p>
        {children}
      </div>
      {footer && (
        <div className="p-4 border-t rounded-b-md border-myai-primary/30 bg-myai-bg-dark/50 text-zinc-400">
          {footer}
        </div>
      )}
    </div>
  );
}
