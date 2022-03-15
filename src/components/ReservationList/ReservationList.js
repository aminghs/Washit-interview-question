import Reservation from "../Reservation/Reservation"

const ReservationList = ({products, onDelete}) => {
  return (
    <div>
      {products?.map((item) => {
        return <Reservation key={item.id} product={item} onDelete={onDelete} />
      })}
  </div>
  )
}

export default ReservationList