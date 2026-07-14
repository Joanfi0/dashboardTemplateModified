import React, { useMemo, useState } from 'react'

import {
  CBadge,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormInput,
  CFormTextarea,
  CListGroup,
  CListGroupItem,
  CRow,
} from '@coreui/react'

const initialEvents = [
  {
    id: 1,
    title: 'Morning planning',
    date: '2026-07-14',
    time: '09:00',
    note: 'Review priorities and prepare the first focus block.',
  },
  {
    id: 2,
    title: 'Team check-in',
    date: '2026-07-14',
    time: '13:30',
    note: 'Share updates and clear blockers.',
  },
]

const Dashboard = () => {
  const [events, setEvents] = useState(initialEvents)
  const [formData, setFormData] = useState({ title: '', date: '', time: '', note: '' })

  const sortedEvents = useMemo(() => {
    return [...events].sort((left, right) => `${left.date} ${left.time}`.localeCompare(`${right.date} ${right.time}`))
  }, [events])

  const nextEvent = sortedEvents[0]

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!formData.title.trim() || !formData.date || !formData.time) {
      return
    }

    setEvents((current) => [
      ...current,
      {
        id: Date.now(),
        title: formData.title.trim(),
        date: formData.date,
        time: formData.time,
        note: formData.note.trim(),
      },
    ])

    setFormData({ title: '', date: '', time: '', note: '' })
  }

  return (
    <div className="dashboard-simple">
      <CRow className="g-4">
        <CCol lg={5}>
          <CCard className="dashboard-simple__card h-100">
            <CCardHeader className="dashboard-simple__header">Add event</CCardHeader>
            <CCardBody>
              <form className="dashboard-simple__form" onSubmit={handleSubmit}>
                <CFormInput
                  label="Event title"
                  name="title"
                  placeholder="Write a short title"
                  value={formData.title}
                  onChange={handleChange}
                />
                <CRow className="g-3">
                  <CCol sm={6}>
                    <CFormInput
                      label="Date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                    />
                  </CCol>
                  <CCol sm={6}>
                    <CFormInput
                      label="Time"
                      name="time"
                      type="time"
                      value={formData.time}
                      onChange={handleChange}
                    />
                  </CCol>
                </CRow>
                <CFormTextarea
                  label="Notes"
                  name="note"
                  placeholder="Add a reminder, checklist, or any extra context"
                  rows={5}
                  value={formData.note}
                  onChange={handleChange}
                />
                <div className="dashboard-simple__actions">
                  <CButton type="submit" color="primary">
                    Save event
                  </CButton>
                  <CBadge color="secondary">Simple mode</CBadge>
                </div>
              </form>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol lg={7}>
          <CCard className="dashboard-simple__card h-100">
            <CCardHeader className="dashboard-simple__header">Events</CCardHeader>
            <CCardBody>
              <div className="dashboard-simple__summary mb-4">
                <div>
                  <div className="dashboard-simple__summary-label">Total events</div>
                  <div className="dashboard-simple__summary-value">{events.length}</div>
                </div>
                <div>
                  <div className="dashboard-simple__summary-label">Next event</div>
                  <div className="dashboard-simple__summary-value">
                    {nextEvent ? `${nextEvent.date} ${nextEvent.time}` : 'No events yet'}
                  </div>
                </div>
              </div>

              <CListGroup className="dashboard-simple__list" flush>
                {sortedEvents.map((item) => (
                  <CListGroupItem className="dashboard-simple__item" key={item.id}>
                    <div>
                      <div className="dashboard-simple__item-title">{item.title}</div>
                      <div className="dashboard-simple__item-meta">
                        {item.date} at {item.time}
                      </div>
                    </div>
                    <div className="dashboard-simple__item-note">
                      {item.note || 'No note added.'}
                    </div>
                  </CListGroupItem>
                ))}
              </CListGroup>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  )
}

export default Dashboard
