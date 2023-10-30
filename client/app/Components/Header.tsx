import Link from 'next/link';

export default function Header(){
return(
    <>
    <Link href="/">
    <h1 className="font-semibold text-xl tracking-tight">Website Name</h1>
    </Link>
    <ul>
        <li>
        <Link href="/Events">Events</Link>
        </li>
        <li>
        <Link href="/ClubCorner">Club Corner</Link>
        </li>
        <li>
        <Link href="/Profile">Profile</Link>
        </li>
        <li>
        <Link href="/AccountSettings">Account Settings</Link>
        </li>
    </ul>
    </>
)
}