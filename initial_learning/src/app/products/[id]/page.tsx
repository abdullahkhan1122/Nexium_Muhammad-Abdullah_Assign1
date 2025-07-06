import { notFound } from "next/navigation";
export default function ProductDetail({ params }: { params: { id: string } }) {
    if (parseInt(params.id) === 1) {
        notFound();
    } else {
        return (
            <>
                <h1>Product Detail</h1>
                <h2>Product ID: {params.id}</h2>
                <p>Details about product {params.id} will be displayed here.</p>


            </>
        );
    }
}