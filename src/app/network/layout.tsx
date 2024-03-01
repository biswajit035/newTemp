import { UiProviders } from '../UiProvider';



export default function networkLayout({
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