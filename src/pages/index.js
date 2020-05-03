import React, { useEffect, useState } from 'react'
import chroma from 'chroma-js'
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Layout from '../layouts/Layout'
import SiteMetadata from '../components/SiteMetadata'
import { Body, Heading } from '../components/Typography'
import { ColorInput, Form, Input, InputGroup, Label } from '../components/Form'
import { Background } from '../components/Background'
import { Container } from '../components/Container'
import Stat from '../components/Stat'
import { Col, Row, Section } from '../components/Grid'
import Header from '../components/Header';
import { CopyButton } from '../components/CopyButton';

const IndexPage = () => {
  const [inputs, setInputs] = useState({
    textColor: '#fcf8f1',
    bgColor: '#485d51'
  });
  const [ratio, setRatio] = useState();
  const [grade, setGrade] = useState({
    regular: '',
    large: ''
  });

  useEffect(() => {
        if (chroma.valid(inputs.textColor) && chroma.valid(inputs.bgColor)) {
          const contrastRatio = chroma.contrast(inputs.textColor, inputs.bgColor).toFixed(1);
          setRatio(contrastRatio);

          if (contrastRatio > 7) {
            setGrade({large: 'AAA ✨', regular: 'AAA ✨'});
          } else if (contrastRatio > 4.5) {
            setGrade({large: 'AAA ✨', regular: 'AA 👌'});
          } else if (contrastRatio > 3) {
            setGrade({large: 'AA 👌', regular: 'Fail 👎'});
          } else {
            setGrade({large: 'Fail 👎', regular: 'Fail 👎'});
          }
        }
      }, [inputs.textColor, inputs.bgColor]
  );

  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  };

  return (
      <Layout>
        <SiteMetadata title="Home" description="A11y color contrast checker" />

        <Background color={ inputs.textColor } bgColor={ inputs.bgColor }>
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
              <Form color={ inputs.color }>
                <Row>
                  <Col width="50%">
                    <Label htmlFor="textColor">
                      Foreground color
                    </Label>
                    <InputGroup borderColor={ inputs.textColor }>
                      <Input
                          id="textColor"
                          type="text"
                          maxLength="7"
                          name="textColor"
                          value={ inputs.textColor }
                          onChange={ handleInputChange }
                          borderColor={ inputs.textColor }
                      />
                      <ColorInput
                          type="color"
                          name="textColor"
                          value={ inputs.textColor }
                          onChange={ handleInputChange }
                      />
                    </InputGroup>
                    <CopyToClipboard text={ inputs.textColor }>
                      <CopyButton
                          color={ inputs.textColor }
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
                    <InputGroup borderColor={ inputs.textColor }>
                      <Input
                          id="bgColor"
                          type="text"
                          maxLength="7"
                          name="bgColor"
                          value={ inputs.bgColor }
                          onChange={ handleInputChange }
                      />
                      <ColorInput
                          type="color"
                          name="bgColor"
                          value={ inputs.bgColor }
                          onChange={ handleInputChange }
                      />
                    </InputGroup>
                    <CopyToClipboard text={ inputs.bgColor }>
                      <CopyButton
                          color={ inputs.textColor }
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
