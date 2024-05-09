// Write your code here
import {
  PieChart,
  Pie,
  Legend,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'

import './index.css'

const VaccinationByAge = props => {
  console.log(props)
  const {vaccinationByAgeDetails} = props

  return (
    <div className="vaccination-by-age-container">
      <h1 className="vaccination-by-age-heading">Vaccination by age</h1>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={vaccinationByAgeDetails}
            cx="50%"
            cy="30%"
            outerRadius="60%"
            dataKey="count"
          >
            <Cell name="18-44" fill="#2d87bb" />
            <Cell name="44-60" fill="#a3df9f" />
            <Cell name="Above 60" fill="#64C2A6" />
          </Pie>

          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{fontSize: 15, fontFamily: 'Roboto'}}
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByAge
