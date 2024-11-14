
async function CategoyPage({ params }) {
    const slug = (await params).category
    return (
        <div>CategoyPage of: {slug}</div>
    )
}

export default CategoyPage