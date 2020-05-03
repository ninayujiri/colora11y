import React, { useEffect, useState } from 'react'
import chroma from 'chroma-js'
import Layout from '../layouts/Layout'
import SiteMetadata from '../components/SiteMetadata'
import { Body, Heading } from '../components/Typography'
import { Form, Input, Label } from '../components/Form'
import { Background } from '../components/Background'
import { Container } from '../components/Container'
import Stat from '../components/Stat'
import { Col, Row, Section } from '../components/Grid'
import { Button } from '../components/Button'

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
        const hexCodeRegEx = /^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
        if (inputs.textColor.match(hexCodeRegEx) && inputs.bgColor.match(hexCodeRegEx)) {
          checkColorContrast();
        }
      }, [inputs]
  );

  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  };

  const checkColorContrast = () => {
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
  };

  const reverseColors = () => {
    setInputs({
      textColor: inputs.bgColor,
      bgColor: inputs.textColor
    });
  };

  return (
      <Layout>
        <SiteMetadata title="Home" description="A11y color contrast checker" />
        <Background color={ inputs.textColor } bgColor={ inputs.bgColor }>
          <Container>
            <Section order="3">
              <Row>
                <Col width="48%" order="2">
                  <Label>
                    Large text
                  </Label>
                  <Heading>
                    Lorem ipsum
                  </Heading>
                </Col>
                <Col width="18%" order="3">
                  <Stat label="WCAG grade" stat={ grade.large } />
                </Col>
                <Col width="18%" order="1">
                  <Stat label="Contrast ratio" stat={ `${ ratio }: 1` } />
                </Col>
              </Row>
              <Row>
                <Col width="48%">
                  <Label>
                    Regular text
                  </Label>
                  <Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Body>
                </Col>
                <Col width="18%">
                  <Stat label="WCAG grade" stat={ grade.regular } />
                </Col>
                <Col width="18%" />
              </Row>
            </Section>

            <Section order="1">
              <Form color={ inputs.color }>
                <Row>
                  <Col>
                    <Label htmlFor="textColor">
                      Foreground color
                    </Label>
                    <Input
                        id="textColor"
                        type="text"
                        maxLength="7"
                        name="textColor"
                        value={ inputs.textColor || '' }
                        onChange={ handleInputChange }
                        borderColor={ inputs.textColor }
                    />
                  </Col>

                  <Col>
                    <Label htmlFor="bgColor">
                      Background color
                    </Label>
                    <Input
                        id="bgColor"
                        type="text"
                        maxLength="7"
                        name="bgColor"
                        value={ inputs.bgColor || '' }
                        onChange={ handleInputChange }
                        borderColor={ inputs.textColor }
                    />
                  </Col>
                </Row>
              </Form>
            </Section>

            <Section order="2">
              <Button
                  color={ inputs.textColor }
                  bgColor={ inputs.bgColor }
                  type="button"
                  onClick={ reverseColors }
              >
                Reverse colors
              </Button>
            </Section>
          </Container>
        </Background>
      </Layout>
  )
};

export default IndexPage
