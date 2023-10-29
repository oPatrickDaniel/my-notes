
import { ReactElement } from "react"

interface SectionCmpProps {
    title: string
    children: ReactElement | ReactElement[]
}

export default function SectionCmp(props: SectionCmpProps) {
    return (
        <>
            <section className="my-8">
                <h2>{props.title}</h2>
                {props.children}
            </section>
        </>
    )
}