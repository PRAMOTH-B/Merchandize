import getProduct from "@/actions/get-product";
import getproducts from "@/actions/get-products";
import { Productlist } from "@/components/product-list";
import { Container } from "@/components/ui/container";
import Gallery from "@/components/gallery/index";
import Info from "@/components/info";

interface ProductPageProps {
    params: {
        productId: string;
    }
}

const ProductPage: React.FC<ProductPageProps> = async ({
    params
}) => {
    const product = await getProduct(params.productId);
    const suggestedProducts = await getproducts({
        categoryId: product?.category?.id})
    return (
        <div className="bg-white">
            <Container>
                <div className="px-4 py-10 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                       {/* {Gallery} */}
                       <Gallery images={product.images}/>
                       <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                        <Info data={product}/>
                        Info
                       </div>
                    </div>
                    <hr className="my-10"/>
                    <Productlist title="Related Items" items={suggestedProducts} />
                </div>
            </Container>
        </div>
    );
}
export default ProductPage;

//check get-products for the error in URL (timeline: 8:30:14)