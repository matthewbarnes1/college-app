import Link from 'next/link';

export default function Header(){
return(
    <>
    <h1><Link href="/">Home route</Link></h1>
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