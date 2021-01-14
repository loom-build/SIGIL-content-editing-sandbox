import React from 'react'
import styled from '@emotion/styled'

import laptop from '../../../../images/Q1-1-icon-laptop.svg'
import business from '../../../../images/Q1-2-icon-business.svg'
import roundPeople from '../../../../images/Q1-3-icon-round-people.svg'
import ondemandVideo from '../../../../images/Q1-4-icon-ondemand-video.svg'
import shoppingCartOutline from '../../../../images/Q1-5-icon-shopping-cart-outline.svg'
import checkCircleOutline from '../../../../images/Q1-6-icon-check-circle-outline.svg'
import wifi from '../../../../images/Q2-1-icon-wifi.svg'
import phone from '../../../../images/Q2-2-icon-phone.svg'
import addCircleOutline from '../../../../images/Q2-3-icon-add-circle-outline.svg'
import expandMore from '../../../../images/Q3-1-icon-expand-more.svg'
import expandLess from '../../../../images/Q3-2-icon-expand-less.svg'
import helpOutline from '../../../../images/Q3-3-icon-help-outline.svg'
import placeOutline from '../../../../images/Q4-1-icon-place-outline.svg'
import networkCheck from '../../../../images/Q4-2-icon-network-check.svg'
import search from '../../../../images/Q4-3-icon-search.svg'

const Icon = styled.img(`
  width: 48px;
`)

export default {
  '25f761ed-a3f1-454f-99d7-e3c6aa3588a4': {
    numberOfDots: 4,
    loadingDelayPerItem: 1500,
    steps: [
      {
        title: 'What do you primarily use the internet for?',
        options: [
          {
            icon: <Icon src={laptop} alt="laptop icon" />,
            text: 'School',
            key: 'primary_use',
            value: 'school',
            next: 2,
            loading: {
              title: 'Primary use',
              description: 'School',
            },
          },
          {
            icon: <Icon src={business} alt="business icon" />,
            text: 'Work',
            key: 'primary_use',
            value: 'work',
            next: 2,
            loading: {
              title: 'Primary use',
              description: 'Work',
            },
          },
          {
            icon: <Icon src={roundPeople} alt="people icon" />,
            text: 'Connecting with friends or family',
            key: 'primary_use',
            value: 'connection',
            next: 2,
            loading: {
              title: 'Primary use',
              description: 'Connecting with friends or family',
            },
          },
          {
            icon: <Icon src={ondemandVideo} alt="ondemand video icon" />,
            text: 'Entertainment',
            key: 'primary_use',
            value: 'entertainment',
            next: 2,
            loading: {
              title: 'Primary use',
              description: 'Entertainment',
            },
          },
          {
            icon: <Icon src={shoppingCartOutline} alt="shopping cart icon" />,
            text: 'Shopping or banking',
            key: 'primary_use',
            value: 'shopping_banking',
            next: 2,
            loading: {
              title: 'Primary use',
              description: 'Shopping or banking',
            },
          },
          {
            icon: <Icon src={checkCircleOutline} alt="check mark icon" />,
            text: 'All/other',
            key: 'primary_use',
            value: 'all',
            next: 2,
            loading: {
              title: 'Primary use',
              description: 'All/other',
            },
          },
        ],
      },
      {
        title: 'What services do you want?',
        options: [
          {
            icon: <Icon src={wifi} alt="wifi icon" />,
            text: 'Satellite internet',
            key: 'desired_service',
            value: 'satellite',
            next: 3,
            loading: {
              title: 'Desired service',
              description: 'Satellite internet',
            },
          },
          {
            icon: <Icon src={phone} alt="phone icon" />,
            text: 'Phone service',
            key: 'desired_service',
            value: 'phone',
            next: 3,
            loading: {
              title: 'Desired service',
              description: 'Phone service',
            },
          },
          {
            icon: <Icon src={addCircleOutline} alt="add icon" />,
            text: 'More than one',
            key: 'desired_service',
            value: 'multiple',
            next: 3,
            loading: {
              title: 'Desired service',
              description: 'More than one',
            },
          },
        ],
      },
      {
        title: 'What internet speed do you want?',
        options: [
          {
            icon: <Icon src={expandMore} alt="expand more icon" />,
            text: '50+ Mbps',
            key: 'desired_speed',
            value: 'fifty_more',
            next: 4,
            loading: {
              title: 'Desired speed',
              description: '50+ Mbps',
            },
          },
          {
            icon: <Icon src={expandLess} alt="expand less icon" />,
            text: '50 Mbps or less',
            key: 'desired_speed',
            value: 'fifty_less',
            next: 4,
            loading: {
              title: 'Desired speed',
              description: '50 Mbps or less',
            },
          },
          {
            icon: <Icon src={helpOutline} alt="help icon" />,
            text: 'Not sure',
            key: 'desired_speed',
            value: 'not_sure',
            next: 4,
            loading: {
              title: 'Desired speed',
              description: 'Not sure',
            },
          },
        ],
      },
      {
        title: 'Why are you interested in Viasat internet?',
        options: [
          {
            icon: <Icon src={placeOutline} alt="moving icon" />,
            text: 'Moving to a new location',
            key: 'interest_reason',
            value: 'moving',
            next: null,
            loading: {
              title: 'Reason',
              description: 'Moving to a new location',
            },
          },
          {
            icon: <Icon src={networkCheck} alt="network icon" />,
            text: 'Slow speeds with current provider',
            key: 'interest_reason',
            value: 'slow_speeds',
            next: null,
            loading: {
              title: 'Reason',
              description: 'Slow speeds with current provider',
            },
          },
          {
            icon: <Icon src={search} alt="search icon" />,
            text: 'Exploring my options',
            key: 'interest_reason',
            value: 'exploring',
            next: null,
            loading: {
              title: 'Reason',
              description: 'Exploring my options',
            },
          },
        ],
      },
    ],
  },
}
