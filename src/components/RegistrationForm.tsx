import React, { useState } from 'react';
import { Mail, User, CreditCard, Phone, Building } from 'lucide-react';

interface RegistrationFormProps {
  setShowPolicy: (show: boolean) => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ setShowPolicy }) => {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    cedula: '',
    phone: '',
    company: '',
    acceptPolicy: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex items-center border-b border-white py-2">
        <Mail className="text-white mr-2" />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Correo electrónico"
          required
          className="appearance-none bg-transparent border-none w-full text-white placeholder-white mr-3 py-1 px-2 leading-tight focus:outline-none"
        />
      </div>
      <div className="flex items-center border-b border-white py-2">
        <User className="text-white mr-2" />
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Nombre completo"
          required
          className="appearance-none bg-transparent border-none w-full text-white placeholder-white mr-3 py-1 px-2 leading-tight focus:outline-none"
        />
      </div>
      <div className="flex items-center border-b border-white py-2">
        <CreditCard className="text-white mr-2" />
        <input
          type="text"
          name="cedula"
          value={formData.cedula}
          onChange={handleChange}
          placeholder="Cédula"
          required
          className="appearance-none bg-transparent border-none w-full text-white placeholder-white mr-3 py-1 px-2 leading-tight focus:outline-none"
        />
      </div>
      <div className="flex items-center border-b border-white py-2">
        <Phone className="text-white mr-2" />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Celular"
          required
          className="appearance-none bg-transparent border-none w-full text-white placeholder-white mr-3 py-1 px-2 leading-tight focus:outline-none"
        />
      </div>
      <div className="flex items-center border-b border-white py-2">
        <Building className="text-white mr-2" />
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Empresa"
          required
          className="appearance-none bg-transparent border-none w-full text-white placeholder-white mr-3 py-1 px-2 leading-tight focus:outline-none"
        />
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          name="acceptPolicy"
          checked={formData.acceptPolicy}
          onChange={handleChange}
          required
          className="mr-2"
        />
        <label className="text-white">
          Acepto la{' '}
          <button
            type="button"
            onClick={() => setShowPolicy(true)}
            className="text-blue-300 hover:underline"
          >
            política de tratamiento de datos
          </button>
        </label>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Registrarse
      </button>
    </form>
  );
};

export default RegistrationForm;