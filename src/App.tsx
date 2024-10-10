import React, { useState } from 'react';
import CountdownTimer from './components/CountdownTimer';
import RegistrationForm from './components/RegistrationForm';

function App() {
  const [showPolicy, setShowPolicy] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-xl p-8 max-w-6xl w-full">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column */}
          <div className="md:w-1/2 text-white">
            <h1 className="text-4xl font-bold mb-2">Congreso Sura 2024</h1>
            <h2 className="text-2xl font-semibold mb-8">Interdependencia: el desafío de vivir y convivir</h2>
            <p className="text-xl mb-4">La transmisión comienza en:</p>
            <CountdownTimer targetDate="2024-10-15T00:00:00" />
          </div>

          {/* Right Column */}
          <div className="md:w-1/2">
            <div className="bg-black bg-opacity-30 rounded-lg p-6">
              <RegistrationForm setShowPolicy={setShowPolicy} />
            </div>
          </div>
        </div>
      </div>

      {showPolicy && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full">
            <h2 className="text-2xl font-bold mb-4">Política de Tratamiento de Datos</h2>
            <p className="mb-4">
              Aquí va el texto completo de la política de tratamiento de datos...
            </p>
            <button
              onClick={() => setShowPolicy(false)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;