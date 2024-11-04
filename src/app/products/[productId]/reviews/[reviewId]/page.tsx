import { notFound } from "next/navigation";

export default function ReviewDetail({
  params,
}: {
  params: { reviewId: string; productId: string };
}) {
  // reviewId 大於 1000 即導 not found page，注意這裡不用 return
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Review {params.reviewId} for product {params.productId}
    </h1>
  );
}
