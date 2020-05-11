import React, { createContext, useCallback, useEffect, useState } from 'react'
import chroma from 'chroma-js'

const Context = createContext({});

export const ContextProvider = (props) => {
  const [colors, setColors] = useState({
    fg: '#fcf8f1',
    bg: '#485d51'
  });
  const [ratio, setRatio] = useState();
  const [grade, setGrade] = useState({
    regular: '',
    large: ''
  });

  const checkContrast = useCallback(() => {
    if (chroma.valid(colors.fg) && chroma.valid(colors.bg)) {
      const contrastRatio = chroma.contrast(colors.fg, colors.bg).toFixed(1);
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
  }, [colors]);

  useEffect(() => {
        checkContrast()
      }, [colors.fg, colors.bg, checkContrast]
  );

  const handleInputChange = (event) => {
    event.persist();
    setColors(inputs => ({...inputs, [event.target.name]: event.target.value}));
  };

  const data = {
    colors,
    setColors,
    ratio,
    setRatio,
    grade,
    setGrade,
    checkContrast,
    handleInputChange
  };

  return (
      <Context.Provider value={ data }>
        { props.children }
      </Context.Provider>
  );
};

export default Context;
