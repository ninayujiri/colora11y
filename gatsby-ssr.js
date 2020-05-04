import React from 'react'
import { ContextProvider } from './src/components/Context';

export const wrapPageElement = ({element, props}) => (
    <ContextProvider {...props}>{ element }</ContextProvider>
);
