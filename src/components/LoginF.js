import { useState } from 'react';
import LogoMichSolo from '../Icons/LogoMichSolo';

export function LoginF ({ setUser }) { // Utiliza destructuración para obtener setUser
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const Semicircle = () => (
    <div className="absolute w-full h-full left-0 overflow-hidden">
      <div className="absolute top-0 bottom-0 w-full h-full bg-white rotate-90 -translate-x-9 rounded-t-full "></div>
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === ""){
      setError(true);
      return;
    } //fin if para validar los campos estan llenos

    setError(false);

    setUser(email); // Actualiza el estado del usuario con el correo electrónico
    window.location.href = '/Home.jsx'; // Redirige al usuario a la página de inicio
  };


  return (
    <section>
    <div className='flex w-full h-screen bg-purpleMich'>
      <div className='flex items-center justify-center w-1/2 relative'>
        <Semicircle />
        <div className="absolute inset-8 flex items-center justify-center -translate-x-24 m-14">
            <LogoMichSolo />
        </div>
  </div>
      <div className='w-1/2 flex h-full items-center content-center'>
        <div className='bg-gray-100 bg-opacity-90 w-4/6 h-3/5 rounded-lg p-5 pt-10 ml-32'>

          
          <form 
          className='Formulario'
          onSubmit={handleSubmit}>

            <div className='mb-6'>
              <label htmlFor='email' className='block text-purpleMich font-bold mb-2 mt-4'>Correo electrónico</label>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full px-3 py-2 border rounded-md outline-none'
              />
            </div>

            <div className='mb-4'>
              <label htmlFor='password' className='block text-purpleMich font-bold mb-2'>Contraseña</label>
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='w-full px-3 py-2 border rounded-md outline-none'
              />
            </div>
            <button type='submit' className='w-full bg-purpleMich text-white py-2 rounded-md hover:bg-pinkMich hover:text-purpleMich mb-5 mt-2'>Iniciar sesión</button>
            <div className='text-center'>
                <a className='text-purpleMich text-lg hover:text-xl hover:font-semibold' href="http://">¿Olvidó su contraseña?</a>
            </div>
          </form>


          {error && <p>Llenar todos los campos</p>} 
        </div>
      </div>
    </div>
    </section>
  );
};

export default LoginF;