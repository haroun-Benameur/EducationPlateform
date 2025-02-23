import React from 'react';

import heroImage from '../assets/images/heroImage.png'; // Update path
import feature1 from '../assets/images/feature1.png';
import feature2 from '../assets/images/feature2.png';
import feature3 from '../assets/images/feature3.png';
import feature4 from '../assets/images/feature4.png';
import Header from '../components/header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
    
    <div className="bg-[#b1dbff] min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-12 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Text and Button */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-800"> 
            Essayez AI Tutor gratuitement ! Laissez votre numéro, et nous vous contactons.
          </h1>
          <p className="mt-4 text-lg text-gray-700">
          AI Tutor propose des exercices interactifs et personnalisés pour le primaire, conformes aux programmes officiels. Avec des jeux ludiques et une IA adaptative, votre enfant apprend en s'amusant.  </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700">
            Explore Path
          </button>
        </div>

        {/* Right Side: Image */}
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
          <img src={heroImage} alt="Hero" className="w-64 md:w-96" />
        </div>
      </div>
    </section>

      {/* Features Section */}
      <section className="text-center py-12 px-6">
        <h2 className="text-3xl font-bold text-blue-800">Fonctionnalité de l'application</h2>
        <p className="mt-4 text-lg text-gray-700">
          AI Tutor propose des exercices interactifs, des jeux ludiques et un apprentissage personnalisé grâce à l'IA.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src={feature1} alt="Apprentissage" className="w-16 mx-auto" />
            <h3 className="mt-4 text-lg font-semibold">Apprentissage personnalisé</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src={feature2} alt="Suivi" className="w-16 mx-auto" />
            <h3 className="mt-4 text-lg font-semibold">Suivi des progrès</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src={feature3} alt="Parental" className="w-16 mx-auto" />
            <h3 className="mt-4 text-lg font-semibold">Suivi parental</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src={feature4} alt="Jeux" className="w-16 mx-auto" />
            <h3 className="mt-4 text-lg font-semibold">Jeux interactifs</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="text-center py-12 px-6">
        <h2 className="text-3xl font-bold text-blue-800">Comment utiliser</h2>
        <div className="mt-8 flex flex-col md:flex-row justify-center gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="relative">
              <button className="absolute top-0 left-0 bg-red-500 p-3 rounded-full">
                ▶
              </button>
              <div className="bg-black w-64 h-40 mx-auto"></div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="relative">
              <button className="absolute top-0 left-0 bg-red-500 p-3 rounded-full">
                ▶
              </button>
              <div className="bg-black w-64 h-40 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    </div>

      <Footer/>
  
    </>
);
};

export default Home;
