import React, { type ReactNode } from 'react'
import Layout from '@theme-original/DocItem/Layout'
import type LayoutType from '@theme/DocItem/Layout'
import type { WrapperProps } from '@docusaurus/types'
import { useDoc } from '@docusaurus/plugin-content-docs/client'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import GiscusComment from '@site/src/components/GiscusComment'

type Props = WrapperProps<typeof LayoutType>;

export default function LayoutWrapper (props: Props): ReactNode {
  const ctx = useDocusaurusContext()
  const { defaultEnabledComment } = ctx.siteConfig.customFields

  const { metadata } = useDoc()
  // eslint-disable-next-line camelcase
  const { enabled_comment } = metadata.frontMatter
  // eslint-disable-next-line camelcase
  const enabledComment = (typeof enabled_comment === 'boolean') ? enabled_comment : defaultEnabledComment

  return (
    <>
      <Layout {...props} />
      {(enabledComment) && (
        <>
          <div className='giscus-comment-wrapper'>
            <GiscusComment />
          </div>
        </>
      )}
    </>
  )
}
