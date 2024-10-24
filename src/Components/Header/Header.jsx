import Profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex items-center justify-between w-11/12 p-4 mx-auto border-b-2'>
            <h1 className='text-3xl font-bold'>Knowledge Cafe</h1>
            <img src={Profile} alt="" />
        </header>
    );
};

export default Header;