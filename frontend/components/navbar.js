import Link from 'next/link'

const Navbar = () => (
    <div>
        <Link href="/"><a> Home </a></Link> |
        <Link href="/registeration"><a> Register </a></Link>  |
        <Link href="/result"><a> Registeration Result </a></Link> 
    </div>
)

export default Navbar