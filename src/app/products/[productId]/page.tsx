import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

// dynamic metadata，也可以是 async function
// export const generateMetadata = ({ params }: Props): Metadata => {
//   return {
//     title: `Product ${params.productId}`,
//   };
// };

// demo async generateMetadata
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const title = await new Promise(resolve => {
    setTimeout(() => {
      resolve(`Iphone ${params.productId}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};

export default function ProductDetail({ params }: Props) {
  return (
    <>
      <h1>Details about product {params.productId}</h1>
    </>
  );
}
