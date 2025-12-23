interface SkillBadgeProps {
  skill: string;
  variant?: 'primary' | 'secondary';
}

export function SkillBadge({ skill, variant = 'primary' }: SkillBadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded text-xs font-medium transition-all hover:scale-105 ${
        variant === 'primary'
          ? 'bg-primary/10 text-primary border border-primary/20'
          : 'bg-secondary text-secondary-foreground border border-border'
      }`}
    >
      {skill}
    </span>
  );
}
