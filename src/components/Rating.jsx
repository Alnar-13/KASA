/* eslint-disable react/prop-types */
function Rating({ note }) {
  // note = logement.rating
  const stars = [1, 2, 3, 4, 5] // tableau des notes
  return (
    <div className="rating-stars">
      {stars.map((level) =>
        note >= level ? ( // condition, si la note est égal ou supérieur à level
          <i
            className="fa-solid fa-star full"
            key={level.toString()}
            alt="rating star"
          />
        ) : (
          <i
            className="fa-solid fa-star empty"
            key={level.toString()}
            alt="rating star"
          />
        )
      )}
    </div>
  )
}
export default Rating
