import React from 'react';
import { User, Code, Star } from 'lucide-react';
import InfoCard from './InfoCard';
import { developerInfo } from '../data/developerInfo';

const Profile = () => (
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
    {/* 프로필 이미지와 contact 영역 - 너비 증가 */}
    <div className="lg:col-span-4 flex flex-col items-center justify-center">
      <div className="w-full max-w-xs flex flex-col items-center justify-center gap-6">
        <div className="w-48 h-48 bg-gray-200 rounded-full overflow-hidden">
          <img
            src="profile.jpeg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full">
          <InfoCard
            icon={User}
            title="Contact"
            content={developerInfo.contact}
            bgColor="bg-blue-100"
            iconColor="text-blue-600"
          />
        </div>
      </div>
    </div>

    {/* 본문 영역 - 너비 조정 */}
    <div className="lg:col-span-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">{developerInfo.name}</h2>
        <p className="text-xl text-gray-600 mb-6">{developerInfo.title}</p>
        <p className="text-gray-600 leading-relaxed mb-4">
          {developerInfo.mainDescription}
        </p>
        <p className="text-gray-600 leading-relaxed">
          {developerInfo.details.experience}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InfoCard
          icon={Code}
          title="Skills"
          content={developerInfo.details.skills}
          bgColor="bg-green-100"
          iconColor="text-green-600"
        />
        <InfoCard
          icon={Star}
          title="Interests"
          content={developerInfo.details.interests}
          bgColor="bg-purple-100"
          iconColor="text-purple-600"
        />
      </div>
    </div>
  </div>
);

export default Profile;