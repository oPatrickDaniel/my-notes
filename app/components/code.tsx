'use client'
import { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { stackoverflowLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import ClipboardOutlineCmp from './clipboard'
import Checkmark from './checkmark'

interface codeCmpProps {
  language: string
  children: string
}

export default function CodeCmp(props: codeCmpProps) {
  const codeString = props.children
  const [copy, setCopy] = useState(false)

  return (
    <>
      <div className="my-3 overflow-hidden rounded border border-gray-400">
        <div className="flex items-center justify-between bg-gray-500 px-4 text-xs text-white ">
          <p className="text-sm">Exemplo</p>
          {copy ? (
            <button className="flex items-center justify-center gap-1 py-2">
              <span className="w-4">
                <Checkmark />
              </span>
              COPIADO!
            </button>
          ) : (
            <button
              className="flex items-center justify-center gap-1 py-2"
              onClick={() => {
                navigator.clipboard.writeText(codeString)
                setCopy(true)
                setTimeout(() => {
                  setCopy(false)
                }, 1000)
              }}
            >
              <span className="w-4">
                <ClipboardOutlineCmp />
              </span>
              COPIAR
            </button>
          )}
        </div>
        <SyntaxHighlighter
          language={props.language}
          style={stackoverflowLight}
          customStyle={{
            padding: '10px',
          }}
          wrapLongLines={true}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </>
  )
}
