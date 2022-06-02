import Image from 'next/image';

export function ProfileImage() {
    return (
        <Image
            src="/images/profile.jpg" // Route of the image file
            height={200} // Desired size with correct aspect ratio
            width={200} // Desired size with correct aspect ratio
            alt="3B3 Sistemas"
        />
    );
}

export default function LogoSistema() {
    return (
        <Image
            src="/images/logosistema.jpg" // Route of the image file
            height={60} // Desired size with correct aspect ratio
            width={60} // Desired size with correct aspect ratio
            alt="3B3 Sistemas"
        />
    );
}