import React from 'react'
import  propTypes  from 'prop-types'
import styled from "styled-components";

const Rating = ({value,color}) => {
    return (
        <Div className='starDiv'>
        <span>
            <i style={{color}} className={value>= 1? 'fas fa-star' : value >=0.5? 'fas fa-star-half-alt' : 'far fa-star'}></i>
            </span>
            <span>
            <i style={{color}} className={value>= 2? 'fas fa-star' : value >=1.5? 'fas fa-star-half-alt' : 'far fa-star'}></i>
            </span>
            <span>
            <i style={{color}} className={value>= 3? 'fas fa-star' : value >=2.5? 'fas fa-star-half-alt' : 'far fa-star'}></i>
            </span>
            <span>
            <i style={{color}} className={value>= 4? 'fas fa-star' : value >=3.5? 'fas fa-star-half-alt' : 'far fa-star'}></i>
            </span>
            <span>
            <i style={{color}} className={value>= 5? 'fas fa-star' : value >=4.5? 'fas fa-star-half-alt' : 'far fa-star'}></i>
            </span>
        </Div>

    )
}

Rating.defaultProps = {
    color: '#f8e825',
}
Rating.propTypes={
    value: propTypes.number.isRequired,
    color: propTypes.string
}
const Div = styled.div`
    margin: auto;
`


export default Rating;