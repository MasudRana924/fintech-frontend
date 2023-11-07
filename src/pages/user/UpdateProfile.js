import React, { useEffect } from 'react';
import { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import './Profile.css'
import { useDispatch, useSelector } from 'react-redux';
import { cleanAvatarSuccess, updateAvatar } from '../../state/user/updateavatarSlice';
import { message } from 'antd';

const UpdateProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { user } = useSelector(
        (state) => state.userdetails.userdetails
    );
    const { updateAvatarSuccess, isLoading } = useSelector(
        (state) => state.updatedAvatar
    );
    const { loggeduser } = useSelector(
        (state) => state.userDetails
    );
    const userToken = loggeduser.token;
    const [avatar, setAvatar] = useState();
    const [avatarPreview, setAvatarPreview] = useState();
    const updateProfileDataChange = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatarPreview(reader.result);
                setAvatar(e.target.files[0]);
            }
        };
        reader.readAsDataURL(e.target.files[0]);
    };
    useEffect(() => {
        if (user) {
            setAvatarPreview(user?.avatarLogo);
        }
        if (updateAvatarSuccess) {
            message.success("আপডেট সম্পুর্ণ হয়েছে");
            navigate('/main')
            dispatch(cleanAvatarSuccess());
        }
    }, [user, updateAvatarSuccess, dispatch, navigate]);
    const updateProfileSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('avatarLogo', avatar);
        dispatch(updateAvatar({ userToken, data: formData }));
    };
    return (
        <div className="w-fulllg:w-1/4 lg:mx-auto  lg:border lg:rounded-lg lg:shadow-lg  ">
            <div className="flex bg-violet-500 h-16 rounded-b-lg ">
                <div className="w-1/4">
                    <Link to="/main">
                        <FiArrowLeft className="text-white text-2xl mt-4 ml-2"></FiArrowLeft>
                    </Link>
                </div>
                <p className="text-white text-md mt-4 ml-5">প্রোফাইল আপডেট</p>
            </div>
            <form action="" className="space-y-6 mt-12  " onSubmit={updateProfileSubmit}>
                <div className="image-section  flex flex-1 items-center justify-center gap-2 mt-16">
                    <img
                        alt=""
                        src={avatarPreview}
                        className={isLoading ? "h-36 w-36 border-2 border-violet-500 rounded-full  avatar-image" : "h-36 w-36 border-2 border-violet-500 rounded-full"}
                    />
                    <label className='border border-violet-500 bg-violet-500'>
                        +
                        <br />
                        <input
                            type="file"
                            name="avatarLogo"
                            multiple
                            onChange={updateProfileDataChange}
                            accept="image/png,image/jpeg,image/webp"
                        />
                    </label>
                </div>
                <div className="submit-bottom-btn w-full">

                    <button className="h-12 w-full  bg-violet-500 border-violet-500 hover:bg-violet-500 hover:border-violet-500 mb-5">
                        <span className="font-semibold text-white text-lg">পরবর্তী</span>
                    </button>

                </div>
            </form>
        </div>
    );
};

export default UpdateProfile;