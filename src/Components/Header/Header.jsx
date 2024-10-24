import Profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex items-center justify-between max-w-7xl mx-8 md:mx-auto py-4 border-b-2'>
            <h1 className='text-3xl font-bold'>Knowledge Cafe</h1>
            <img src={Profile} alt="" />
        </header>
    );
};

export default Header;