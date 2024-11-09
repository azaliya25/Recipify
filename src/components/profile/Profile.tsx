import ProfileUser from "@/components/profile/ProfileUser/ProfileUser.tsx";
import ProfileHistory from "@/components/profile/ProfileHistory/ProfileHistory.tsx";

export default function Profile() {
    return (
        <div className="flex py-[20px] px-[35px]">
            <div className="flex justify-center items-center top-0 blur__banner backdrop-opacity-10 backdrop-invert bg-[#DABF94]/35 rounded-[20px] text-[#F9F1E6] w-full h-screen max-h-[620px] py-[60px] px-[90px] gap-64">
                <ProfileUser />
                <ProfileHistory />
            </div>
        </div>
    );
}