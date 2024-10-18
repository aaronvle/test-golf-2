import React from 'react';

interface EditBagProps {
  activeClubs: string[];
  setActiveClubs: React.Dispatch<React.SetStateAction<string[]>>;
  onBack: () => void;
}

const clubs = [
  'Lob Wedge',
  'Pitching Wedge',
  '9i',
  '7i',
  '5i',
  'Hybrid',
  'Wood',
  'Driver',
];

const EditBag: React.FC<EditBagProps> = ({ activeClubs, setActiveClubs, onBack }) => {
  const toggleClub = (club: string) => {
    if (activeClubs.includes(club)) {
      setActiveClubs(activeClubs.filter((c) => c !== club));
    } else {
      setActiveClubs([...activeClubs, club]);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Edit Your Bag</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {clubs.map((club) => (
          <button
            key={club}
            onClick={() => toggleClub(club)}
            className={`p-2 rounded ${
              activeClubs.includes(club)
                ? 'bg-green-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            {club}
          </button>
        ))}
      </div>
      <button
        onClick={onBack}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Back to Home
      </button>
    </div>
  );
};

export default EditBag;