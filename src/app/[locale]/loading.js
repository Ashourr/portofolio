export default function Loading() {
  const skeletons = Array.from({ length: 10 });

  return (
    <div className="loading-page">
      <div className="container">
        <div className="row">
          {skeletons.map((_, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="skeleton-wrapper">
                <div className="skeleton-image" />
                <div className="skeleton-text" />
                <div className="skeleton-text" />
                <div className="skeleton-text short" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
