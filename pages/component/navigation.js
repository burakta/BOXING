import Link from 'next/link'


function Navigation() {
    return (
    <nav>
        <a class="baslik">BoxingTR</a>

        <Link href="/">
            <a> Anasayfa </a>
        </Link>
        <Link href="./Analiz">
            <a> Analiz</a>
        </Link>
        <Link href="./Antrenman">
            <a> Antrenman</a>
        </Link>
        <Link href="./Kariyer">
            <a> Kariyer</a>
        </Link>
        <Link href="./Sparring">
            <a> Sparring</a>
        </Link>

    </nav>
    )
        
}

export default Navigation