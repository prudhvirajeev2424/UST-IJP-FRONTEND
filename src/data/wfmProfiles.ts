export interface WfmProfile {
    id: string;
    name: string;
    role: string;
    uid: string;
    soNumber: string;
    status: 'Pending' | 'Rejected' | 'Allocated' | 'Interviewing' | 'Selected';
    location: string;
    lastUpdated: string;
    avatar: string;
    matchScore?: number;
    summary: string;
    band: string;
    account: string;
}

export const wfmProfiles: WfmProfile[] = [
    {
        id: '1',
        name: 'Zamira Peterson',
        role: 'Lead 2 - Software Engineer',
        uid: 'UID-123456',
        soNumber: '83993853',
        status: 'Pending',
        location: 'Bangalore',
        lastUpdated: '4 days ago',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
        summary: 'Highly skilled Java Developer with expertise in designing, developing, and maintaining robust Java applications. Proficient in working with modern frameworks, APIs, and databases to deliver scalable software solutions.',
        band: 'B3',
        account: 'T Mobile'
    },
    {
        id: '2',
        name: 'Andrea Peterson',
        role: 'Lead 2 - Software Engineer',
        uid: 'UID-123456',
        soNumber: '83993853',
        status: 'Interviewing',
        location: 'Bangalore',
        lastUpdated: '2 days ago',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
        summary: 'Highly skilled Java Developer with expertise in designing, developing, and maintaining robust Java applications. Proficient in working with modern frameworks, APIs, and databases to deliver scalable software solutions.',
        band: 'B3',
        account: 'T Mobile'
    },
    {
        id: '3',
        name: 'Andrea Peterson',
        role: 'Lead 2 - Software Engineer',
        uid: 'UID-123456',
        soNumber: '83993853',
        status: 'Pending',
        location: 'Bangalore',
        lastUpdated: '2 days ago',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
        summary: 'Highly skilled Java Developer with expertise in designing, developing, and maintaining robust Java applications. Proficient in working with modern frameworks, APIs, and databases to deliver scalable software solutions.',
        band: 'B3',
        account: 'T Mobile'
    },
    {
        id: '4',
        name: 'Andrea Peterson',
        role: 'Lead 2 - Software Engineer',
        uid: 'UID-123456',
        soNumber: '83993853',
        status: 'Allocated',
        location: 'Bangalore',
        lastUpdated: '2 days ago',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
        summary: 'Highly skilled Java Developer with expertise in designing, developing, and maintaining robust Java applications. Proficient in working with modern frameworks, APIs, and databases to deliver scalable software solutions.',
        band: 'B3',
        account: 'T Mobile'
    },
    {
        id: '5',
        name: 'Andrea Peterson',
        role: 'Lead 2 - Software Engineer',
        uid: 'UID-123456',
        soNumber: '83993853',
        status: 'Rejected',
        location: 'Bangalore',
        lastUpdated: '2 days ago',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
        summary: 'Highly skilled Java Developer with expertise in designing, developing, and maintaining robust Java applications. Proficient in working with modern frameworks, APIs, and databases to deliver scalable software solutions.',
        band: 'B3',
        account: 'T Mobile'
    },
    {
        id: '6',
        name: 'Andrea Peterson',
        role: 'Lead 2 - Software Engineer',
        uid: 'UID-123456',
        soNumber: '83993853',
        status: 'Selected',
        matchScore: 90,
        location: 'Bangalore',
        lastUpdated: '2 days ago',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
        summary: 'Highly skilled Java Developer with expertise in designing, developing, and maintaining robust Java applications. Proficient in working with modern frameworks, APIs, and databases to deliver scalable software solutions.',
        band: 'B3',
        account: 'T Mobile'
    }
];
