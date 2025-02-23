import React from 'react';
import grandmaImage from '../assets/images/grandmaImage.png'; // Met le bon chemin
import logo from '../assets/images/logo.png'; // Met le bon chemin

const ParentPage = () => {
  return (
    <div className="bg-[#b1dbff] min-h-screen flex flex-col items-center">
      {/* Header */}
      <nav className="bg-transparent p-4 w-full flex justify-center">
        <div className="max-w-screen-xl w-full flex items-center justify-between px-4">
          <a href="#" className="flex items-center space-x-3">
            <img src={logo} className="h-12" alt="AI Tutor Logo" />
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-5xl w-full mt-8 flex flex-col md:flex-row items-center">
        {/* LEFT SIDE - FORM */}
        <div className="md:w-2/3 w-full pr-6 px-15 py-5 text-center " >
          {/* Welcome Section */}
          <h1 className="text-3xl font-bold text-purple-800">
            Bienvenue aux parents !
          </h1>
          <p className="text-gray-700 mt-2">
            Nous sommes ravis de vous accueillir ici. Chez <span className="font-bold">AI Tutor</span>, nous croyons que l’apprentissage doit être passionnant, amusant et parfaitement adapté à votre petit. Veuillez remplir les champs suivants pour plus d’informations.
          </p>

          {/* Safety Section */}
          <div className="bg-yellow-200 p-4 rounded-lg mt-6 text-center" style={{maxWidth:'32em'}} >
            <h2 className="text-xl font-semibold text-yellow-700">Jouer en toute sécurité</h2>
            <p className="text-gray-700 mt-2">
              Tous nos jeux sont conformes à la <span className="font-bold">COPPA</span> afin de protéger la sécurité des enfants. Vous voulez profiter du jeu sans publicité ?
            </p>
            <button className="mt-4 px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 flex items-center justify-center mx-auto">
              <span role="img" aria-label="mute">🔇</span> Supprimer publicités
            </button>
          </div>

          {/* Form Section */}
          <div className="mt-6">
            <label className="block text-purple-600 font-semibold mb-2">
              Quel est l’état de santé de votre enfant ?
            </label>
            <input
              type="text"
              placeholder="État de santé (bonne santé/Besoins spéciaux...)"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />

            <label className="block text-purple-600 font-semibold mt-4 mb-2">
              Quel est l’âge de votre enfant ?
            </label>
            <input
              type="number"
              placeholder="Age"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="md:w-1/3 w-full flex justify-center">
          <img src={grandmaImage} alt="Parental Guide" className="w-64 md:w-80" />
        </div>
      </div>
    </div>
  );
};

export default ParentPage;
