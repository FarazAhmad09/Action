"use client";

import Link from "next/link";

export default function Contact() {
    return (
        <>
            <Link href="/about">
                About
            </Link>
            <br />
            <Link href="/contact">
                Contact
            </Link>
            <br />
            Hello, how are you? Im the contact page.
        </>
    );
}
