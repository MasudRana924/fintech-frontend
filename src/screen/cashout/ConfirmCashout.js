import React, { useState } from 'react';
import { useDispatch,} from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addAmountToStore} from '../../state/transaction/sendSlice';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { InputAdornment, TextField } from '@mui/material';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
const ConfirmCashout = () => {
    const dispatch = useDispatch();
    // const {loggeduser } = useSelector(
    //     (state) => state.userDetails
    // );
    // const userToken = loggeduser.token
    const navigate = useNavigate();
    // const { type,receiverType} = useSelector(state => state.type.type);
    // const {receiverphone ,senderphone} = useSelector(state => state.type.receiverphone);
    const [amount, setAmount] = useState();
    // const data = { receiverphone, type, amount,receiverType ,senderphone}
    const handleTransfer = (e) => {
        e.preventDefault();
        // if (amount) {
        //     dispatch(createSendMoney({
        //         data, userToken
        //     }));
        //      dispatch(clearStore());
        //     navigate('/success');
        // } else {
        //     alert('enter phone')
        // }
        if (amount) {
            dispatch(addAmountToStore({amount}));
            navigate('/cash/out/confirm');
        } else {
            alert('enter phone')
        }

    }
  
    return (
        <div className="bg-rose-500 h-10 rounded-b-lg ">
            <div className="flex">
                <div className="w-1/4">
                    <Link to="/main">
                        <FiArrowLeft className="text-white text-2xl mt-2 ml-2"></FiArrowLeft>
                    </Link>
                </div>
                <p className="text-white text-md mt-2 ml-5">ক্যাশ আউট</p>
            </div>
            <div className="w-full flex mt-16 pl-2">

                <TextField
                    id="input-with-icon-textfield"
                    label="টাকার পরিমাণ"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AttachMoneyIcon />
                            </InputAdornment>
                        ),
                    }}
                    variant="standard"
                    className="w-full"
                    value={amount} onChange={(e) => setAmount(e.target.value)}
                />
                <button className="w-12 bg-rose-500" onClick={handleTransfer}> <FiArrowRight className="text-white text-2xl  ml-2"></FiArrowRight></button>

            </div>
        </div>
    );
};

export default ConfirmCashout;