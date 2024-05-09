// Write your code here
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import './index.css'

const VaccinationCoverage = props => {
  // console.log(props)
  const {vaccinationCoverageDetails} = props

  const dataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <div className="vaccination-by-coverage-container">
      <h1 className="vaccination-by-coverage-heading">Vaccination Coverage</h1>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          data={vaccinationCoverageDetails}
          margin={{
            top: 5,
          }}
        >
          <XAxis
            dataKey="vaccineDate"
            tick={{
              stroke: '#6c757d',
              strokeWidth: 1,
              fontSize: 15,
              fontFamily: 'Roboto',
            }}
          />
          <YAxis
            tickFormatter={dataFormatter}
            tick={{
              stroke: '#6c757d',
              strokeWidth: 0.5,
              fontSize: 15,
              fontFamily: 'Roboto',
            }}
          />
          <Legend
            wrapperStyle={{
              paddingTop: 20,
              textAlign: 'center',
              fontSize: 15,
              fontFamily: 'Roboto',
            }}
          />
          <Tooltip />
          <Bar
            dataKey="dose1"
            name="Dose 1"
            fill="#5a8dee"
            radius={[10, 10, 0, 0]}
            barSize="20%"
          />
          <Bar
            dataKey="dose2"
            name="Dose 2"
            fill="#f54394"
            radius={[5, 5, 0, 0]}
            barSize="20%"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
export default VaccinationCoverage
