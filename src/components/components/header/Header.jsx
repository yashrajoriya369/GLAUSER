// import React from 'react'
// import './Header.css'
// import { IoChatbubblesOutline } from "react-icons/io5";
// import { CiBellOn } from "react-icons/ci";
// import { FaUser } from "react-icons/fa";
// import { Link } from 'react-router-dom';


// const Header = () => {
//     return (
//         <>
//             <div className='main-header tracking-tighter'>
//                 <div className='sub-main-header'>
//                     <div className='appName'><span>WOLFY</span></div>
//                     <div className="InputContainer" style={{backgroundColor: "#e0e0e0"}}>
//                         <input
//                             placeholder="Search"
//                             id="input"
//                             className="input"
//                             name="text"
//                             type="text"
//                         />

//                         <label className="labelforsearch" htmlFor="input">
//                             <svg className="searchIcon" viewBox="0 0 512 512">
//                                 <path
//                                     d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
//                                 ></path>
//                             </svg>
//                         </label>
//                     </div>
//                 </div>
//                 <div className='user-profile'>
//                     <div className='icons'>
//                         <div className='first-icon'><IoChatbubblesOutline className='chat-icon' /></div>
//                         <div className='second-icon'><CiBellOn className='bell-icon' /></div>
//                     </div>
//                     <div className='profile' style={{display: "block"}}>
//                         <div className='third-icon'><FaUser className='user-icon' /></div>
//                     </div>
//                     <Link to="/login" className='login-sign' style={{display: "none"}}>Login</Link>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Header