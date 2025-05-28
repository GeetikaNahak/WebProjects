const page = async ({ params }: { params: { id: string } }) => {
    const { id } =await params;  // Directly destructure the id from params
  
    return (
      <div>
        User detail page {id}
      </div>
    );
  };
  
  export default page;
  