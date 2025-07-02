export default function ProductDetail({ params }: { params: { id: string } }) {
    return (
        <>
            <h1>Product Detail</h1>
            <h2>Product ID: {params.id}</h2>
            <p>Details about product {params.id} will be displayed here.</p>
        </>
    );
}