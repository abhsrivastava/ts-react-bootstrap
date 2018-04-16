import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Grid, Row, Col} from 'react-bootstrap'

export class MyBootstrapComponent extends React.Component<MyProps, MyState>{
  constructor(props: MyProps) {
    super(props)
    this.state = {text: [
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      'Donec hendrerit tempor tellus.',
      'Donec pretium posuere tellus.',
      'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.',
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      'Nulla posuere.',
      'Donec vitae dolor.',
      'Nullam tristique diam non turpis.',
      'Cras placerat accumsan nulla.',
      'Nullam rutrum.',
      'Nam vestibulum accumsan nisl.'
    ]}
  }
  render() {
    return (
      <Grid>
      <Row className="show-grid">
        <Col sm={6} md={3}>
          <code>&lt;{'Col sm={6} md={3}'} /&gt;</code>
          <br />
          {this.state.text.slice(0, 6).join(' ')}
        </Col>
        <Col sm={6} md={3}>
          <code>&lt;{'Col sm={6} md={3}'} /&gt;</code>
          <br />
          {this.state.text.slice(0, 4).join(' ')}
        </Col>
        <Col sm={6} md={3}>
          <code>&lt;{'Col sm={6} md={3}'} /&gt;</code>
          <br />
          {this.state.text.slice(0, 6).join(' ')}
        </Col>
        <Col sm={6} md={3}>
          <code>&lt;{'Col sm={6} md={3}'} /&gt;</code>
          <br />
          {this.state.text.slice(0, 2).join(' ')}
        </Col>
      </Row>
    </Grid>    
    )
  }
}

interface MyProps {

}

interface MyState {
  text: Array<string>
}