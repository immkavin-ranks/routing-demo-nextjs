export default async function Docs({params}: {
    params: Promise<{slug: string[]}>
}) {

    const {slug} = await params

    if (slug?.length == 2) {
        const [feature, concept] = slug

        return <h1>Viewing docs for {feature} and concept {concept}</h1>
    } else if (slug?.length == 1) {
        const [feature] = slug

        return <h1>Viewing docs for {feature}</h1>
    }
    return <h1>Docs home page</h1>
}