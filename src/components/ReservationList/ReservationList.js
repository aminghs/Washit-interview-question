import Reservation from "../Reservation/Reservation"

const ReservationList = ({reservations, onDelete}) => {
  return (
    <div>
      {reservations?.map((item) => {
        return <Reservation key={item.id} reservation={item} onDelete={onDelete} />
      })}
  </div>
  )
}

export default ReservationList