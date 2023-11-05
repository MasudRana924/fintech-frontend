import React, { useEffect } from 'react';
import { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Profile.css'
import { useSelector } from 'react-redux';


const UpdateProfile = () => {
    const { user } = useSelector(
        (state) => state.userdetails.userdetails
    );
    const [avatar, setAvatar] = useState();
    const [avatarPreview, setAvatarPreview] = useState("../../images/man.png");
    const updateProfileSubmit = (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.set("avatar", avatar);
        // dispatch(updateProfile(myForm));
    };

    const updateProfileDataChange = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatarPreview(reader.result);
                setAvatar(reader.result);
            }
        };
        reader.readAsDataURL(e.target.files[0]);
    };
    useEffect(() => {
        if (user) {
          setAvatarPreview(user?.avatar?.url);
          
        }
        
      }, [user]);
    return (
        <div className="w-fulllg:w-1/4 lg:mx-auto  lg:border lg:rounded-lg lg:shadow-lg min-h-screen">
            <div className="flex bg-violet-500 h-16 rounded-b-lg ">
                <div className="w-1/4">
                    <Link to="/main">
                        <FiArrowLeft className="text-white text-2xl mt-4 ml-2"></FiArrowLeft>
                    </Link>
                </div>
                <p className="text-white text-md mt-4 ml-5">ছবি পরিবর্তন</p>
            </div>

            <div className="image-section  flex flex-1 items-center justify-center gap-2 mt-16">
                <img
                    alt=""
                    src={avatar || user?.avatar?.url}
                    className="h-36 w-36 border-2 border-blue-500 rounded-full p-2"
                />
                <label>
                    +
                    <br />
                    <input
                        type="file"
                        name="shopLogo"
                        multiple
                        onChange={updateProfileDataChange}
                        accept="image/png,image/jpeg,image/webp"
                    />
                </label>
            </div>
            <div className="submit-bottom-btn w-full">
              <button className="w-full h-12 bg-violet-500 text-white text-md">আপডেট করূন</button>
            </div>
        </div>
    );
};

export default UpdateProfile;