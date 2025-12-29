import React, { useState } from 'react';
import { List } from 'lucide-react';
import ProfileCard from './ProfileCard';
import Toggle from '../../common/Toggle/Toggle';
import { profilesReceived as listProfiles } from '../../../data/profile_list';
import { profiles as gridProfiles } from '../../../data/profiles';
// list view uses TP Manager profiles (listProfiles), grid uses the original gridProfiles
import ProfileHomeList from './ProfileHomeList';

/* ---------- Feather Grid Icon ---------- */
const FeatherGridIcon = ({ active }: { active: boolean }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke={active ? '#0097AC' : '#6b7280'}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
  </svg>
);

const ProfilesReceived: React.FC = () => {
  const [showActionNeeded, setShowActionNeeded] = useState(true);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // (mockOpportunities is imported above but not required for the TP Manager list view)

  return (
    <div className="flex-1 rounded-lg bg-[#f9fafb86] p-6">
      {/* ---------- HEADER ---------- */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Profiles Received</h2>

        <div className="flex items-center gap-4">
          <p className="text-sm">Show profiles which need action</p>

          {/* Toggle (shared component) */}
          <Toggle value={showActionNeeded} onToggle={() => setShowActionNeeded(!showActionNeeded)} />

          {/* GRID / LIST TOGGLE */}
          <div className="flex overflow-hidden rounded-lg border border-gray-200">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1.5 transition ${
                viewMode === 'grid' ? 'bg-[#e6f7fa]' : 'bg-white'
              }`}
              aria-pressed={viewMode === 'grid'}
            >
              <FeatherGridIcon active={viewMode === 'grid'} />
            </button>

            <button
              onClick={() => setViewMode('list')}
              className={`px-3 py-1.5 transition ${
                viewMode === 'list' ? 'bg-[#e6f7fa]' : 'bg-white'
              }`}
              aria-pressed={viewMode === 'list'}
            >
              <List size={20} className={viewMode === 'list' ? 'text-[#0097AC]' : 'text-gray-500'} />
            </button>
          </div>
        </div>
      </div>

      {/* ---------- CONTENT ---------- */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-3 gap-y-2">
          {gridProfiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>
      ) : (
        // Use the TP Manager ProfileHomeList component to render the list view using profilesReceived
        <ProfileHomeList profiles={listProfiles} />
      )}
    </div>
  );
};

export default ProfilesReceived;