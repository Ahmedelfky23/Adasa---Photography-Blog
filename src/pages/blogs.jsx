import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getBlogs, getCategories } from '../services/blogservice';
import SearchBar from '../components/searchBar';
import CategoryFilter from '../components/CategoryFilter';
import ViewToggle from '../components/ViewToggle';
import BlogCard from '../components/Blogcard';
import BlogListItem from '../components/BlogListItem';
import Pagination from '../components/Pagination';
import Loader from '../components/Loader';

const ITEMS_PER_PAGE = 6;

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState(
    searchParams.get('cat') || 'All'
  );
  const [view, setView] = useState('grid');
  const [page, setPage] = useState(1);

  useEffect(() => {
    Promise.all([getBlogs(), getCategories()])
      .then(([posts, cats]) => {
        setBlogs(posts);
        setCategories(cats);
      })
      .catch(() => {
        setError('حصلت مشكلة أثناء تحميل البيانات');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (category === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ cat: category });
    }

    setPage(1);
  }, [category, setSearchParams]);

  const term = search.trim().toLowerCase();

  const filtered = blogs.filter((blog) => {
    const matchCategory =
      category === 'All' || blog.category === category;

    const matchSearch =
      !term ||
      blog.title.toLowerCase().includes(term) ||
      blog.excerpt.toLowerCase().includes(term) ||
      blog.content.toLowerCase().includes(term) ||
      blog.tags.some((tag) => tag.toLowerCase().includes(term));

    return matchCategory && matchSearch;
  });

  useEffect(() => {
    setPage(1);
  }, [search]);

  const totalPages = Math.max(
    1,
    Math.ceil(filtered.length / ITEMS_PER_PAGE)
  );

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const currentBlogs = filtered.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="container py-5 text-center text-danger">
        {error}
      </div>
    );
  }

  return (
    <div className="bg-grid">

      <section className="container text-center pt-5 pb-4">
        <span className="hero-pill mb-3">
          <i className="bi bi-book" /> مدونتنا
        </span>

        <h1 className="hero-title mb-2">
          استكشف <span className="accent">مقالاتنا</span>
        </h1>

        <p className="text-white">
          اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
        </p>
      </section>
      <section className="container mb-4">
        <div className="card card-dark p-3">
          <div className="d-flex flex-wrap gap-3 align-items-center">
            <SearchBar
              value={search}
              onChange={setSearch}
            />

            <CategoryFilter
              categories={categories}
              value={category}
              onChange={setCategory}
            />
          </div>
        </div>
      </section>

      <section className="container mb-4">
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">

          <span className="text-muted">
            عرض{' '}
            <strong className="text-white">
              {filtered.length}
            </strong>{' '}
            مقالة

            {category !== 'All' && ` في "${category}"`}
          </span>

          <ViewToggle
            view={view}
            onChange={setView}
          />

        </div>
      </section>

      <section className="container pb-5">

        {currentBlogs.length === 0 ? (

          <div className="card card-dark text-center p-5">
            <i className="bi bi-search fs-1 mb-3 text-warning" />

            <h5>لا يوجد نتائج مطابقة</h5>

            <p className="mb-0 text-muted">
              جرب كلمة بحث مختلفة أو غيّر التصنيف
            </p>
          </div>

        ) : view === 'grid' ? (

          <div className="row g-4">
            {currentBlogs.map((blog) => (
              <div
                className="col-12 col-md-6 col-lg-4"
                key={blog.id}
              >
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>

        ) : (

          <div className="d-flex flex-column gap-3">
            {currentBlogs.map((blog) => (
              <BlogListItem
                key={blog.id}
                blog={blog}
              />
            ))}
          </div>

        )}

        {totalPages > 1 && (
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        )}

      </section>
    </div>
  );
}

