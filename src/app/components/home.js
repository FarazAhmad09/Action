"use client"

import Link from "next/link"

export default function Home() {
    return (
        <>
            <Link href="/about">
                About
            </Link>
            <br />
            <br />
            <br />
            <Link href={"/contact"}>
                Contact
            </Link>
            <br /> <br /> <br />
            hello kasy ho ma home hu
        </>
    )
}
