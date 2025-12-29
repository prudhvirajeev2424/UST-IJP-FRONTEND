import React from "react";

interface Props {
  profile: { description: string; primarySkills: string[] };
  hasresume: boolean;
  handleresume: () => void;
}

export const EmpHomeLeftSideBar: React.FC<Props> = ({
  profile,
  hasresume,
  handleresume,
}) => {
  return (
    <aside className="lg:col-span-1 order-2 lg:order-1">
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h3 className="text-sm font-semibold mb-2">Profile Summary</h3>
        <p className="text-sm text-text-muted mb-3">{profile.description}</p>
        <div className="flex flex-wrap gap-2">
          {profile.primarySkills.map((s) => (
            <span key={s} className="text-xs bg-muted px-2 py-1 rounded">
              {s}
            </span>
          ))}
        </div>

        <div className="mt-4">
          <button
            onClick={handleresume}
            className="w-full px-3 py-2 bg-primary text-white rounded"
          >
            {hasresume ? "View Resume" : "Upload Resume"}
          </button>
        </div>
      </div>
    </aside>
  );
};
