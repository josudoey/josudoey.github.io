import React, {type ReactNode} from 'react';
import Footer from '@theme-original/DocItem/Footer';
import type FooterType from '@theme/DocItem/Footer';
import type {WrapperProps} from '@docusaurus/types';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import GiscusComment from '@site/src/components/GiscusComment';


type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): ReactNode {
  const ctx = useDocusaurusContext()
  const { defaultEnabledComment } = ctx.siteConfig.customFields

  const { metadata } = useDoc()
  const { enabled_comment } = metadata.frontMatter
  const enabledComment = (typeof enabled_comment == 'boolean') ? enabled_comment : defaultEnabledComment

  return (
    <>
      {(enabledComment) && (
        <GiscusComment />
      )}
      <Footer {...props} />
    </>
  );
}
