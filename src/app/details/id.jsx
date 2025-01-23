import { useRouter } from "next/router";

const PostDetails = () => {
  const router = useRouter();
  const { id } = router.query;  // Get the 'id' from the URL
  
  return (
    <div>
      <h1>Post Details</h1>
      <p>Post ID: {id}</p>
    </div>
  );
};

export default PostDetails;
