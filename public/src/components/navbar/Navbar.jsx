import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import user from '../../../assets/icons/user.svg';
import search from '../../../assets/icons/search.svg';
import { useUser } from '../../context/UserContext';
import ProfilePage from '../profiledropdown/userProfile/ProfilePage';
import SliderWrapper from '../profiledropdown/SliderWrapper';
import SearchBar from '../products/search-bar/SearchBar';
import apiURL from '../../api';
import { jwtDecode } from 'jwt-decode';

export default function Navbar({
  isSliderHidden,
  setIsSliderHidden,
  toggleFormWrapper,
}) {
  const { token } = useUser();
  const [isSearchHidden, setIsSearchHidden] = useState(true);

  const handleSearch = (searchQuery) => {
    const urlSearchParams = new URLSearchParams({ name: searchQuery });
    const queryString = urlSearchParams.toString();
    const url = `https://cure-skin.onrender.com/products?${queryString}`;
    window.location.href = url;
  };

  const isAdmin = () => {
    try {
      if (token) {
        const decodedToken = jwtDecode(token);
        console.log({ decodedToken });
        return decodedToken.role === 'ADMIN';
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error decoding token:', error);
    }
    return false;
  };

  console.log({ token });
  console.log({ isAdmin: isAdmin() });
  return (
    <header className='fixed w-screen'>
      <nav className='font-encode font-medium  h-20 max-w-[100vw]'>
        <section className='flex justify-between items-center text-[1.2rem] text-primary-dark-gray h-full px-20'>
          <div className='flex mx-auto gap-8 pl-14'>
            <Link to='/'>HOME</Link>
            <Link to={'/products'}>PRODUCTS</Link>
            <Link to={'/about'}>ABOUT</Link>

            {isAdmin() && token && <Link to='/admin/dashboard'>DASHBOARD</Link>}
          </div>
          <div className='flex gap-4 h-5 pt-2'>
            <img src={search} alt='Search' className='h-[1.1rem]' onClick={() => setIsSearchHidden(false)}/>
            <SearchBar onSearch={handleSearch} isSearchHidden={isSearchHidden}/>
            <img
              src={user}
              alt='User'
              className='h-[1.1rem]'
              onClick={() => setIsSliderHidden(!isSliderHidden)}
            />
            {!isSliderHidden && (
              <SliderWrapper toggleFormWrapper={toggleFormWrapper} />
            )}
          </div>
        </section>
        <Logo />
      </nav>
    </header>
  );
}
