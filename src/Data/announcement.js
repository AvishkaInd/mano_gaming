import {BiSolidBank, BiSolidCategory} from "react-icons/bi";
import {GrAnnounce, GrGamepad} from "react-icons/gr";

export const announcements = [
    { type: "website", message: "Website maintenance announcement ", desc: "Notice Expired ", time: "2024-11-10 11:40:17", icon: <GrAnnounce className='bg-green-400 text-white p-1 text-center:xl rounded-full' /> },
    { type: "game", message: "Game maintenance announcement", desc: "Notice Expired ", time: "2024-10-11 10:30:17", icon: <GrGamepad className='bg-red-400 text-white p-1 text-center:xl rounded-full' /> },
    { type: "bank", message: "Bank maintenance announcement", desc: "Notice Expired ",time: "2024-10-11 09:15:30", icon: <BiSolidBank className='bg-yellow-400 text-white p-1 text-center:xl rounded-full' /> },
    // Add more announcements as needed
];