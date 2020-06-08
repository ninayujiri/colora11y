import React, { useContext } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Layout from '../layouts/Layout'
import SiteMetadata from '../components/SiteMetadata'
import { Body, Heading } from '../components/Typography.styles'
import { ColorInput, Form, Input, InputGroup, Label } from '../components/Form.styles'
import { Background } from '../components/Background.styles'
import { Container } from '../components/Container.styles'
import Stat from '../components/Stat'
import { Col, Row, Section } from '../components/Grid.styles'
import Header from '../components/Header/Header'
import { CopyButton } from '../components/CopyButton.styles'
import Context from '../components/Context'

const IndexPage = () => {
  const {colors, grade, ratio, handleInputChange} = useContext(Context);

  return (
      <Layout>
        <SiteMetadata title="Home" description="A11y color contrast checker" />

        <Background color={ colors.fg } bgColor={ colors.bg }>
          <Container>
            <Header />
            <Section order="3">
              <Row>
                <Col width="40%" order="2">
                  <Label>
                    Large text
                  </Label>
                  <Heading>
                    Lorem ipsum
                  </Heading>
                </Col>
                <Col width="20%" order="3">
                  <Stat label="WCAG grade" stat={ grade.large } />
                </Col>
                <Col width="20%" order="1">
                  <Stat label="Contrast ratio" stat={ `${ ratio }:1` } />
                </Col>
              </Row>
              <Row>
                <Col width="40%">
                  <Label>
                    Regular text
                  </Label>
                  <Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Body>
                </Col>
                <Col width="20%">
                  <Stat label="WCAG grade" stat={ grade.regular } />
                </Col>
                <Col width="20%" />
              </Row>
            </Section>

            <Section order="1">
              <Form color={ colors.color }>
                <Row>
                  <Col width="50%">
                    <Label htmlFor="fgColor">
                      Foreground color
                    </Label>
                    <InputGroup borderColor={ colors.fg }>
                      <Input
                          id="fgColor"
                          type="text"
                          maxLength="7"
                          name="fg"
                          value={ colors.fg }
                          onChange={ handleInputChange }
                          borderColor={ colors.fg }
                      />
                      <ColorInput
                          type="color"
                          name="fg"
                          value={ colors.fg }
                          onChange={ handleInputChange }
                      />
                    </InputGroup>
                    <CopyToClipboard text={ colors.fg }>
                      <CopyButton
                          onClick={ (e) => e.preventDefault() }
                      >
                        Copy
                      </CopyButton>
                    </CopyToClipboard>
                  </Col>
                  <Col width="50%">
                    <Label htmlFor="bgColor">
                      Background color
                    </Label>
                    <InputGroup borderColor={ colors.fg }>
                      <Input
                          id="bgColor"
                          type="text"
                          maxLength="7"
                          name="bg"
                          value={ colors.bg }
                          onChange={ handleInputChange }
                      />
                      <ColorInput
                          type="color"
                          name="bg"
                          value={ colors.bg }
                          onChange={ handleInputChange }
                      />
                    </InputGroup>
                    <CopyToClipboard text={ colors.bg }>
                      <CopyButton
                          onClick={ (e) => e.preventDefault() }
                      >
                        Copy
                      </CopyButton>
                    </CopyToClipboard>
                  </Col>
                </Row>
              </Form>
            </Section>
          </Container>
        </Background>
      </Layout>
  )
};

export default IndexPage
