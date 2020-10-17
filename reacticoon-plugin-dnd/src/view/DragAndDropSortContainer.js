import React from 'react'
import { useDrop, useDrag } from 'react-dnd'

import { deleteObjectAtIndexOnArray } from 'reacticoon/utils/array'

import CardForTable from './CardForTable'

// https://react-dnd.github.io/react-dnd/examples/sortable/simple
const DragAndDropSortContainer = ({ list, onSort, children }) => {
  const [cards, setCards] = React.useState([...list])
  const [hasChanged, setHasChanged] = React.useState(false)

  React.useEffect(
    () => {
      setCards([...list])
      setHasChanged(false)
    },
    [list, setCards]
  )

  const moveCard = React.useCallback(
    (dragIndex, hoverIndex) => {
      const dragItem = cards[dragIndex]

      const newCards = deleteObjectAtIndexOnArray(cards, dragIndex)
      newCards.splice(hoverIndex, 0, dragItem)
      setCards(newCards)
      setHasChanged(true)
    },
    [cards, setCards, setHasChanged]
  )

  const onCancelSort = () => {
    setCards([...list])
    setHasChanged(false)
  }

  return children({
    moveCard,
    cards,
    hasChanged,
    onCancelSort,
    onSort: () => onSort({ test: true }, cards),
    setCards,
  })
}

/**
 * Container for a Card that can be drag and drop.
 */
const Card = ({ moveCard, index, item, children }) => {
  // https://react-dnd.github.io/react-dnd/examples/sortable/simple
  const ref = React.useRef(null)

  const [, drop] = useDrop({
    accept: 'card',
    hover(item, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current.getBoundingClientRect()
      // Get vertical middle
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      // Determine mouse position
      const clientOffset = monitor.getClientOffset()
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex)
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex
    },
  })

  const [{ isDragging }, drag] = useDrag({
    item: { type: 'card', item, index },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const opacity = isDragging ? 0 : 1

  drag(drop(ref))

  return React.cloneElement(children, {
    ref,
    style: { opacity },
  })
}

DragAndDropSortContainer.Card = Card
DragAndDropSortContainer.CardForTable = CardForTable

export default DragAndDropSortContainer

