import React from 'react'
import PropTypes from 'prop-types'
import { GamePageTemplate } from '../../templates/game-page'

const GamePagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  const entryTestimonials = entry.getIn(['data', 'testimonials'])
  const testimonials = entryTestimonials ? entryTestimonials.toJS() : []

  return (
    <GamePageTemplate
      image={getAsset(entry.getIn(['data', 'image']))}
      title={entry.getIn(['data', 'title'])}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      intro={{ 
        blurbs: blurbs,
        description: entry.getIn(['data', 'intro', 'description']),
        heading: entry.getIn(['data', 'intro', 'heading'])
      }}
      testimonials={testimonials}
    />
  )
}

GamePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default GamePagePreview
