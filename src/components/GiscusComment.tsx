import React, { type ReactNode } from 'react'
import Giscus from '@giscus/react'
import { useColorMode } from '@docusaurus/theme-common'

// ref https://dev.to/m19v/how-to-add-giscus-comments-to-docusaurus-439h
// ref https://ouch1978.github.io/docs/docusaurus/customization/add-giscus-to-docusaurus

export default function GiscusComment () :ReactNode {
  const { colorMode } = useColorMode()

  // ref https://giscus.app/zh-TW
  return (
    <Giscus
      repo="josudoey/josudoey.github.io"
      repoId="MDEwOlJlcG9zaXRvcnk0MDEwNzg0ODE="
      category="General"
      categoryId="DIC_kwDOF-f40c4CrDS4"
      mapping="pathname"
      term="[NetHub]"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="top"
      theme={colorMode}
      lang="zh-TW"
      loading="lazy"
    />
  )
}
