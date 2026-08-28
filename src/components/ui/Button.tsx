import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cx } from "@/lib/cx";

type Variant = "primary" | "outline" | "outlineDark" | "inverse";

type SharedProps = {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  variant?: Variant;
};

type ButtonAsButton = SharedProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof SharedProps> & {
    href?: undefined;
  };

type ButtonAsLink = SharedProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, keyof SharedProps | "href"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClass: Record<Variant, string> = {
  primary:
    "bg-brand-yellow text-brand-black focus-visible:outline-brand-yellow",
  outline:
    "border border-brand-white bg-transparent text-brand-white focus-visible:outline-brand-white",
  outlineDark:
    "border border-brand-black bg-transparent text-brand-black focus-visible:outline-brand-black",
  inverse:
    "bg-brand-black text-brand-white focus-visible:outline-brand-black",
};

function buttonClassName({
  className,
  fullWidth,
  variant = "primary",
}: SharedProps) {
  return cx(
    "btn relative isolate inline-flex h-12 shrink-0 items-center justify-center overflow-hidden whitespace-nowrap px-6 text-base font-medium transition-colors duration-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:translate-y-px",
    variantClass[variant],
    fullWidth ? "w-full" : "w-fit",
    className,
  );
}

function nativeProps(props: ButtonProps) {
  const rest = { ...props } as Record<string, unknown>;
  delete rest.children;
  delete rest.className;
  delete rest.fullWidth;
  delete rest.variant;
  delete rest.href;
  return rest;
}

function ButtonInner({ children }: { children: ReactNode }) {
  return (
    <>
      <span className="btn-swoosh" aria-hidden>
        <span className="btn-swoosh-fill" />
        <span className="btn-swoosh-gap" />
        <span className="btn-swoosh-line" />
      </span>
      <span className="relative z-10">{children}</span>
    </>
  );
}

export function Button(props: ButtonProps) {
  const variant = props.variant ?? "primary";
  const className = buttonClassName(props);

  if (props.href !== undefined) {
    return (
      <Link
        href={props.href}
        className={className}
        data-variant={variant}
        {...nativeProps(props)}
      >
        <ButtonInner>{props.children}</ButtonInner>
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={className}
      data-variant={variant}
      {...nativeProps(props)}
    >
      <ButtonInner>{props.children}</ButtonInner>
    </button>
  );
}
