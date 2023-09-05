import getBillboard from '@/actions/get-billboard';
import Billboard from '@/components/billboard';
import Container from '@/components/ui/container';

export const revalidate = 0; // for no-cashing

const HomePage = async () => {
  const billboard = await getBillboard('6d93daee-2322-4652-b147-8502f657c363');

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
};
s;

export default HomePage;
