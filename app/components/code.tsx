
'use client'
import { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { stackoverflowDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

interface codeCmpProps {
  language: string
  children: string
  noTabs?: number
}

export default function CodeCmp(props: codeCmpProps) {

  function removeTabs(str: string, numTabs: number): string {
    const lines = str.split('\n');
    const linesWithoutTabs = lines.map(line => line.replace(new RegExp(`^\\s{0,${numTabs}}`), ''));
    return linesWithoutTabs.join('\n');
  }

  const codeString = removeTabs(props.children, props.noTabs ?? 14)
  const [copy, setCopy] = useState(false)

  return (
    <>
      <div className='mt-3 rounded overflow-hidden'>
        <div className='flex justify-between px-4 bg-gray-700 text-white text-xs items-center '>
          <p className="text-sm">Exemplo</p>
          {copy ? (
            <button className='py-1 inline-flex itens-center gap-1'>

              COPIADO!
            </button>
          ) : (
            <button className='py-1 inline-flex itens-center gap-1' onClick={() => {
              navigator.clipboard.writeText(codeString)
              setCopy(true)
              setTimeout(() => {
                setCopy(false)
              }, 1000);
            }}
            >
              COPIAR
            </button>)
          }
        </div>
        <SyntaxHighlighter
          language={props.language}
          style={stackoverflowDark}
          customStyle={{
            padding: '10px'
          }}
          wrapLongLines={true}
        >
          {codeString}
        </SyntaxHighlighter>
      </div >
    </>
  )
}