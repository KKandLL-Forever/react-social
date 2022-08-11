import './TrendCard.scss'
import { TrendData } from '@/tempData/trend'

const TrendCard = () => {
  return (
    <div className="trend-card">
      <h3>Trends for you</h3>
      {
        TrendData.map(data => {
          return (
            <div className="trend" key={data.id}>
              <span>#{data.name}</span>
              <span>#{data.shares}k shares</span>
            </div>
          )
        })
      }
    </div>
  )
}

export default TrendCard
