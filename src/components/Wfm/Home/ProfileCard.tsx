import { MapPin, ArrowRight } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '../../ui/Avatar';
import { Badge } from '../../ui/Badge';
import type { WfmProfile } from '../../../data/wfmProfiles';

interface ProfileCardProps {
    profile: WfmProfile;
}

export function ProfileCard({ profile }: ProfileCardProps) {
    const getStatusStyles = (status: WfmProfile['status']) => {
        switch (status) {
            case 'Pending':
                return 'bg-purple-100 text-purple-600 border-none px-3 py-1';
            case 'Rejected':
                return 'bg-red-100 text-red-500 border-none px-3 py-1';
            case 'Allocated':
                return 'bg-cyan-50 text-cyan-500 border-none px-3 py-1';
            case 'Interviewing':
                return 'bg-yellow-100 text-yellow-600 border-none px-3 py-1';
            default:
                return 'bg-gray-100 text-gray-600 border-none px-3 py-1';
        }
    };

    return (
    <div className="group relative bg-white rounded-[10px] shadow-sm border border-gray-100 overflow-hidden w-full h-[323px] transition-all duration-300 hover:shadow-md">
            {/* Default Content */}
            <div className="flex flex-col h-full">
                <div className="p-5 flex-fixed ">
                    <div className="flex items-start gap-3 mb-6">
                        <Avatar className="h-11 w-11 border border-gray-100 shrink-0">
                            <AvatarImage src={profile.avatar} alt={profile.name} />
                            <AvatarFallback>{profile.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div className="min-w-0 flex flex-col items-start text-left">
                            <h3 className="text-sm font-bold text-gray-800 leading-tight text-left">{profile.name}</h3>
                            <p className="text-[11px] text-gray-500 font-medium text-left">{profile.role}</p>
                            <p className="text-[9px] text-gray-400 text-left">UID - {profile.uid.replace('UID-', '')}</p>
                        </div>
                        {profile.matchScore && (
                            <div className="ml-auto h-9 w-9 rounded-full border border-cyan-500 flex items-center justify-center shrink-0">
                                <span className="text-[10px] font-bold text-cyan-500">{profile.matchScore}%</span>
                            </div>
                        )}
                    </div>

                    <div className="space-y-4">
                        <div className="flex flex-col items-start">
                            <p className="text-[13px] font-bold text-teal-600 mb-2">SO#{profile.soNumber}</p>
                            <Badge className={`text-[11px] font-bold rounded-[4px] border-none px-3 py-1 ${getStatusStyles(profile.status)}`}>
                                {profile.status}
                            </Badge>
                        </div>

                        <div className="flex items-center gap-2 text-gray-400">
                            <MapPin className="h-4 w-4" />
                            <span className="text-xs font-semibold">{profile.location}</span>
                        </div>
                    </div>
                </div>

                <div className="px-5 py-4 border-t border-gray-100 bg-white">
                    <p className="text-[11px] text-red-400 font-bold italic">Last updated: {profile.lastUpdated}</p>
                </div>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-[#231f20]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end z-10">
                <div className="bg-white p-6 rounded-t-[10px] shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-[11px] leading-relaxed text-gray-600 mb-4">
                        {profile.summary}
                    </p>
                    <button className="flex items-center justify-between text-[11px] font-semibold text-cyan-500 hover:text-cyan-600 transition-colors py-2 border-t border-gray-100 w-full text-left">
                        <span>Choose what to do with this profile</span>
                        <ArrowRight className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
