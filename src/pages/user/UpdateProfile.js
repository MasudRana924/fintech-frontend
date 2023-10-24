import React from 'react';
import { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';



const UpdateProfile = () => {
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
    return (
        <div className="lg:w-1/4 lg:mx-auto  lg:border lg:rounded-lg lg:shadow-lg ">
            <div className="flex bg-violet-500 h-16 rounded-b-lg ">
                <div className="w-1/4">
                    <Link to="/main">
                        <FiArrowLeft className="text-white text-2xl mt-4 ml-2"></FiArrowLeft>
                    </Link>
                </div>
                <p className="text-white text-md mt-4 ml-5">ছবি পরিবর্তন</p>
            </div>

            <div className="mt-12 w-2/4 mx-auto">
                <div >
                    <img src={avatarPreview} alt="Avatar Preview" className="h-28 w-28 mt-2 border border-violet-500 rounded-full shadow p-2 mb-4 ml-8" />
                    <input
                        type="file"
                        name="avatar"
                        accept="image/*"
                        onChange={updateProfileDataChange}
                       className="text-xs"
                    />
                    <button className="h-8 w-16 bg-violet-500 mt-8 text-xs text-white border border-violet-500 rounded">আপলোড</button>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;