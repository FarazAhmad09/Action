"use client"

import Link from "next/link"

export default function About() {
    return (
        <>
            <Link href={"/pages/about"}>
                About
            </Link>
            <br />
            <Link href={"/pages/contact"}>
                Contact
            </Link>
            <br />
            hello kasy ho ma about hu

        </>
    )
}
