import "../styles/Projects.scss";

export default function ButtonList({
  categories,
  filterCategory,
  activeSection,
}) {
  return (
    <div className="buttonList">
      {categories.map((category) => (
        <button
          onClick={() => filterCategory(category)}
          key={category}
          className={activeSection === category ? "activeButton" : ""}
        >
          <p>{category}</p>
          <span />
        </button>
      ))}
    </div>
  );
}
