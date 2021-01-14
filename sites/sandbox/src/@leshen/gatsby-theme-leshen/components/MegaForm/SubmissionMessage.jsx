import React from 'react'
import { Typography, PhoneCTA } from '@leshen/gatsby-theme-leshen'

const SubmissionMessage = () => (
  <>
    <Typography variant="h3">YOUR QUOTE IS READY</Typography>
    <Typography variant="body">
      Call now to discuss speeds and prices in your area. Specialists are
      standing by!
    </Typography>
    <PhoneCTA style={{ margin: 'auto' }}>Get a FREE quote now</PhoneCTA>
  </>
)

export default SubmissionMessage
