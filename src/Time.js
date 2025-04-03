function Time({ secondRemaining }) {
  const mins = Math.floor(secondRemaining / 60);
  const seconds = secondRemaining % 60;
  return (
    <div className="time">
      {mins < 10 && "0"}{mins}:{seconds < 10 && "0"}{seconds}
    </div>
  )
}

export default Time
