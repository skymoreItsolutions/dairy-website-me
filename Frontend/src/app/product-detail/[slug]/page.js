import ProductDetail from '@/app/Components/ProductDetail';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  try {
    const res = await fetch('https://crm.gauallamilk.com/api/v1/allproduct', {
      cache: 'force-cache', // Cache the fetch for build stability
    });

    if (!res.ok) {
      console.error('Failed to fetch products:', res.status);
      return []; // Fallback to empty array to allow build to continue
    }

    const data = await res.json();

    // Ensure data is an array and has slug properties
    if (!Array.isArray(data)) {
      console.error('Invalid API response: Expected array, got:', data);
      return [];
    }

    return data.map((item) => ({
      slug: item.slug,
    }));
  } catch (error) {
    console.error('Error in generateStaticParams:', error);
    return []; // Fallback to avoid build failure
  }
}

export default async function Page({ params: { slug } }) {
  try {
    const res = await fetch(`https://crm.gauallamilk.com/api/v1/product/${slug}`, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds (ISR)
    });

    if (!res.ok) {
      notFound(); // Trigger Next.js 404 page
    }

    const product = await res.json();

    // Validate product data
    if (!product || !product.slug) {
      notFound();
    }

    return (
      <div>
        <ProductDetail product={product} />
      </div>
    );
  } catch (error) {
    console.error(`Error fetching product ${slug}:`, error);
    return <div>Error loading product. Please try again later.</div>;
  }
}

// Optional: Dynamic metadata for SEO
export async function generateMetadata({ params: { slug } }) {
  try {
    const res = await fetch(`https://crm.gauallamilk.com/api/v1/product/${slug}`, {
      cache: 'force-cache', // Cache for metadata
    });
    if (!res.ok) {
      return { title: 'Product Not Found' };
    }
    const product = await res.json();
    return {
      title: product.name || 'Product Detail',
      description: product.description || 'View our premium product.',
    };
  } catch (error) {
    console.error(`Error generating metadata for ${slug}:`, error);
    return { title: 'Product Detail' };
  }
}