import { Container } from "@/components/ui/container";
import { Billboard } from "@/components/billboard";
import getBillboard from "@/actions/get-billboard";
import getproducts from "@/actions/get-products";
import { Productlist } from "@/components/product-list";

export const revalidate =0;

const Homepage = async () => {
  const billboard = await getBillboard("8f536845-b718-4f06-a5c2-f142cfccebde") //add your billboard id here
  const products= await getproducts({isFeatured:true});
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard}/> 
      
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <Productlist title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
}
// pass the value 'billboard' to the data

export default Homepage;
