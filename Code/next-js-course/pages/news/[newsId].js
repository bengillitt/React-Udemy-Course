import { useRouter } from 'next/router';

// our-domain.com/news/:newsId

function DetailPage() {
  const router = useRouter();

  const newId = router.query.newsId;
   
  // send a request to the backend APi
  // to fetch the news item with newsId

  return <h1>The Detail Page</h1>;
}

export default DetailPage;
