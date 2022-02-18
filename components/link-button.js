import Link from "next/link";

const sharedClasses = [
  "py-10 px-16 tracking-widest text-2xl uppercase inline-block border border-solid border-3 text-center",
];

export default function LinkButton({
  children,
  href,
  isInverted,
  isExternal,
  isTransparent,
  isPrimary,
}) {
  if (isTransparent) {
    return (
      <Link href={href}>
        <a
          target={isExternal ? `_blank` : undefined}
          className={`${[
            ...sharedClasses,
          ]} bg-transparent hover:bg-white text-white font-sans hover:text-uo-black border-white hover:border-white`}
        >
          {children}
        </a>
      </Link>
    );
  }

  if (isPrimary) {
    return (
      <Link href={href}>
        <a
          target={isExternal ? `_blank` : undefined}
          className={`${[
            ...sharedClasses,
          ]} bg-uo-orange hover:bg-transparent text-white font-sans hover:text-uo-orange border border-uo-orange `}
        >
          {children}
        </a>
      </Link>
    );
  }

  return (
    <Link href={href}>
      <a
        target={isExternal ? `_blank` : undefined}
        className={`${[
          ...sharedClasses,
        ]} bg-uo-black hover:bg-white text-white font-sans hover:text-uo-black border-uo-black `}
      >
        {children}
      </a>
    </Link>
  );
}
