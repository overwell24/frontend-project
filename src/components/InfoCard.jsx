import React from 'react';
import { Mail, Github } from 'lucide-react';

const InfoCard = ({ icon: Icon, title, content, bgColor, iconColor }) => {
  const getContactIcon = (key) => {
    if (key === 'email') return <Mail />;
    if (key === 'github') return <Github />;
    return null;
  };

  return (
    <div className="bg-gray-50 p-6 rounded-xl h-full flex flex-col">
      <div className="flex items-center space-x-3 mb-4">
        {title !== 'Contact' && (
          <div className={`${bgColor} p-2 rounded-lg`}>
            <Icon className={`w-5 h-5 ${iconColor}`} />
          </div>
        )}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="flex-1">
        {Array.isArray(content) ? (
          <div className="flex flex-wrap gap-2">
            {content.map((item, index) => (
              <span
                key={index}
                className={`px-3 py-1 rounded-full text-sm ${
                  title === 'Skills' 
                    ? 'bg-green-50 text-green-600'
                    : 'bg-purple-50 text-purple-600'
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {Object.entries(content).map(([key, value]) => (
              <div key={key} className="flex items-center space-x-3 w-full">
                <div className="w-5 h-5 flex-shrink-0 text-gray-500">
                  {getContactIcon(key)}
                </div>
                <a href={key === 'email' ? `mailto:${value}` : `https://${value}`}
                   className="text-blue-600 hover:underline text-sm break-all"
                   target={key === 'email' ? undefined : "_blank"}
                   rel={key === 'email' ? undefined : "noopener noreferrer"}
                >
                  {value}
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoCard;