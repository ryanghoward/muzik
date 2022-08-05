import logo from "../images/MuzicLogo.png";

function Header() {
  const buttonStyle =
    "border-[2px] rounded-[10px] border-[#23a4e] px-[25px] py-[7px]";
  return (
    <>
      <div className='header bg-[#081730] flex items-center justify-between px-[5rem] pt-[2.4rem] text-[0.8rem]'>
        <img src={logo} alt='logo' className='logo w-[42px] h-[42px]' />
      </div>
      <div className='buttons flex'>
        <button className={`mr-[35px] hover:bg-[#232a4e]` + buttonStyle}>
          Log In
        </button>
        <button className={buttonStyle + `bg-[#23a4e]`}>Sign Up</button>
      </div>
    </>
  );
}

export default Header;
