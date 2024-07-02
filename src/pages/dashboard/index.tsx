import { Col, Row } from 'antd'
import React from 'react'

import ColumnCharts from './components/column-charts'
import LineCharts from './components/line-charts'
import PieCharts from './components/pie-charts'
import StatistiCard from './components/statistic-card'

const Dashboard: React.FC = () => {
  return (
    <React.Fragment>
      <StatistiCard />
      <Row wrap style={{ marginTop: 20 }}>
        <Col span={24} style={{ background: 'white', padding: 10 }}>
          <LineCharts />
        </Col>
      </Row>
      <Row wrap style={{ marginTop: 20 }} justify="space-between">
        <Col style={{ background: 'white', padding: 10, width: '49%' }}>
          <ColumnCharts />
        </Col>
        <Col style={{ background: 'white', padding: 10, width: '49%' }}>
          <PieCharts />
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Dashboard
