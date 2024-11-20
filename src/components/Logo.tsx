import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
    return (
        <Link href="/">
            <Image
                width={20}
                height={20}
                quality={100}
                src="/logo.svg"
                priority={true}
                className="h-14 w-14 text-center"
                alt="Christopher Alonzo Initials Logo"
            />
        </Link>
    )
}