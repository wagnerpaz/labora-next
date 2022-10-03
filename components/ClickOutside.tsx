import React, { Component } from 'react'

class ClickOutside extends Component<Props> {
   wrapperRef

   constructor(props) {
      super(props)

      this.setWrapperRef = this.setWrapperRef.bind(this)
      this.handleClickOutside = this.handleClickOutside.bind(this)
   }

   componentDidMount() {
      document.addEventListener('mousedown', this.handleClickOutside)
   }

   componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside)
   }

   /**
    * Set the wrapper ref
    */
   setWrapperRef(node) {
      this.wrapperRef = node
   }

   /**
    * Alert if clicked on outside of element
    */
   handleClickOutside(event: MouseEvent) {
      if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
         this.props.onClickOutside(event)
      }
   }

   render() {
      return <div ref={this.setWrapperRef}>{this.props.children}</div>
   }
}

type Props = {
   onClickOutside: (event: MouseEvent) => void
   children: React.ReactNode
}

export default ClickOutside
