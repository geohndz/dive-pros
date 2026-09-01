import { Container } from "@/components/ui/Container";
import { staffContacts } from "@/lib/staff";

export function StaffDirectory() {
  return (
    <section className="border-t border-white/10">
      <Container className="py-16 lg:py-24">
        <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-brand-yellow">
          Contact us directly
        </h2>
        <ul className="mt-10">
          {staffContacts.map((person) => (
            <li
              key={person.email}
              className="grid gap-2 border-b border-white/10 py-5 lg:grid-cols-12 lg:items-baseline lg:gap-8"
            >
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-white/45 lg:col-span-4">
                {person.role}
              </p>
              <p className="text-sm font-bold tracking-tight text-brand-white lg:col-span-3">
                {person.name}
              </p>
              <a
                href={`mailto:${person.email}`}
                className="break-all text-sm font-medium text-brand-yellow hover:underline lg:col-span-5 lg:text-right"
              >
                {person.email}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
