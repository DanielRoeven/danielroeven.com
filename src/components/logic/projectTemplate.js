import React from 'react'
import styled from 'styled-components'
import rehypeReact from 'rehype-react'
import { graphql } from 'gatsby'

import PageLayout from './PageLayout'
import PageWrapper from '../style/PageWrapper'
import H2 from '../style/H2'
import H3Article from '../style/H3Article'
import PMedium from '../style/PMedium'
import UlMedium from '../style/UlMedium'
import Quote from '../style/Quote'
import LogoLink from '../logic/LogoLink'

const ProjectWrapper = styled(PageWrapper)`
  width: 53rem;
  margin: 0 13.5rem 6rem;

  @media (max-width: 1200px) {
    width: calc(100vw - 4rem);
    max-width: 80rem;
    margin: 0 0 6rem;
  }
`
const ColumnWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-content: flex-start;
  align-items: flex-start;
`
const HalfColumn = styled.div`
  width: 26rem;

  @media (max-width: 1200px) {
    width: calc((100vw - 2rem)/2 -2rem);
  }

  @media (max-width: 600px) {
    width: 100%;
  }

  ul {
    margin-top: -3rem;
  }
`
const ProjectVideo = styled.iframe`
  height: 48rem;
  width: 80rem;
  margin: 3rem -13.5rem;
  overflow: hidden;

  @media (max-width: 1200px) {
    height: 60vw;
    width: 100vw;
    max-width: 84rem;
    margin: 3rem -2rem !important;
  }
`

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "h2": H2,
                "h3": H3Article,
                "p": PMedium,
                "ul": UlMedium,
                "blockquote": Quote,
                "iframe": ProjectVideo,
                "column-wrapper": ColumnWrapper,
                "half-column": HalfColumn,
                "rcsw-logo-link": LogoLink,
              },
  }).Compiler

  export default function Template({
    data, // this prop will be injected by the GraphQL query below.
  }) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  console.log(data)
  const { htmlAst } = markdownRemark;
  return (
    <PageLayout>
      <ProjectWrapper>
        {renderAst(htmlAst)}
      </ProjectWrapper>
    </PageLayout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;