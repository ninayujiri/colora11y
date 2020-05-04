import React from 'react'
import { ContextProvider } from './src/components/Context';

export const wrapRootElement = ({element, props}) => (
    <ContextProvider {...props}>{ element }</ContextProvider>
);
