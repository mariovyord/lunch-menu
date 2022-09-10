import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { useSignOutMutation } from "../../api/api";
import { selectUser, userActions } from "../userSlice";

const ProfileDropdown = () => {
    const user = useAppSelector(selectUser).user;
    const dispatch = useAppDispatch();
    const [signOut] = useSignOutMutation();

    const handleSignOut = () => {
        if (user) {
            signOut({ accessToken: user.accessToken })
                .unwrap()
                .then(() => {
                    dispatch(userActions.removeUser())
                    dispatch(userActions.toggleProfile())
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    return (
        <div className='bg-white p-5 float-right min-w-[30%] w-full sm:w-fit'>
            <div className='border-b-2 mb-4'>
                <h2 className='font-bold text-3xl text-primary pb-2'>{user?.email || 'Anonymous'}</h2>
            </div>
            <div className="">
                <button
                    onClick={() => handleSignOut()}
                    className="bg-lime-700 font-semibold h-full flex items-center px-5 text-white text-lg hover:bg-lime-800"
                >Sign out</button>
            </div>
        </div>
    )
}

export default ProfileDropdown;