import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyMobile,getAllUsers,sellMobile,getSingleUser, addUser, editUser,deleteUser } from '../redux/actions/mobileActions';

const MobileDetails=()=>{
    const styles={
        btn:{
        padding:20,
        margin:10,
        borderRadius:10,
        border:0,
        cursor:'pointer'
        }
    }
    const numOfMobiles=useSelector(state=>state.numOfMobiles)

    const users=useSelector(state=>state.users)
    console.log(users)

    const user=useSelector(state=>state.user)
    
    const dispatch=useDispatch()
    return(
        <div>
            <h1>Number of Mobiles {numOfMobiles} and Users {users.length} and Details {user.name}</h1>
            <button style={styles.btn} onClick={()=>dispatch(buyMobile())}>BUY Mobile</button>
            <button style={styles.btn} onClick={()=>dispatch(sellMobile())}>Sell Mobile</button>
            <button style={styles.btn} onClick={()=>dispatch(addUser({name:"Raju"}))}>Add User</button>
            <button style={styles.btn} onClick={()=>dispatch(getAllUsers())}>Get All User</button>
            <button style={styles.btn} onClick={()=>dispatch(getSingleUser(1))}>Get Single User</button>
            <button style={styles.btn} onClick={()=>dispatch(editUser({name:"raju"},1))}>Edit User</button>
            <button style={styles.btn} onClick={()=>dispatch(deleteUser(1))}>Delete User</button>
        </div>
    )
}

export default MobileDetails