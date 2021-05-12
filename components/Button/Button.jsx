export default function SubmitButton({ loadMore, isDisable }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        className="btn btn-outline-primary"
        disabled={isDisable}
        onClick={loadMore}
        style={{ marginTop: "1rem", marginBottom: "2rem" }}
      >
        Load More
      </button>
    </div>
  );
}
