import { UiProviders } from '@/src/app/UiProvider';

export default function clientLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <UiProviders>
            {children}
            </UiProviders>
        </section>
    )
}

