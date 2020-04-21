import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Selected episodes',
    paragraph: 'Here are some of my favourite interviews. You can listen on Spotify, iTunes, Soundcloud, or the podcasting platform of your choice.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Co-founder of Stack Overflow, Creator of Discourse
                  </div>
                <h3 className="mt-0 mb-12">
                  Jeff Atwood
                  </h3>
                <p className="m-0">
                  Without Jeff Atwood, there would be no Stack Overflow. He is also the author of the popular blog <a href="https://blog.codinghorror.com/">Coding Horror</a>, and the founder of Discourse.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <iframe title="jeff" src="https://open.spotify.com/embed-podcast/episode/135HGr2EUn2h0xfuYEM53S" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Creator of Vuetify
                  </div>
                <h3 className="mt-0 mb-12">
                  John Leider
                  </h3>
                <p className="m-0">
                John Leider is the creator of Vuetify, the incredibly popular material component library for Vue. In this interview we talk about how John became a developer, how he started and released Vuetify, and how his approach to leading a big open source project differs from others.

                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <iframe title="john" src="https://open.spotify.com/embed-podcast/episode/0MIAzzT7XyDrz3KoVRQPYn" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Stackoverflow's highest Python contributor  
                  </div>
                <h3 className="mt-0 mb-12">
                  Martijn Pieters
                  </h3>
                <p className="m-0">
                Martijn has worked on developer infrastructure at Facebook; on Zope with Guido Van Rossum, the creator of Python; and on the framework team of Plone, which is used by the CIA and FBI. He has made contributions to Python, Flask, and Mercurial, and currently works as an open source consultant.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <iframe title="martijn" src="https://open.spotify.com/embed-podcast/episode/1CAo8KHj7bFghaJTIsXFlb" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;