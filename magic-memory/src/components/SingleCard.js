import './SingleCard.css'

function SingleCard ({card, handleChoice, flipped, disabled }) {

    const handleClick = () => {
        if (!disabled) {
            handleChoice(card);
        }
    }

    return (
        <div className='card' >   
            <div className={flipped ? "flipped" : ''}>
              <img className='front' alt='card front' src={card.src}/>
              <img className='back' src='/img/cover.png' onClick={handleClick} alt='card back'/>
            </div>
        </div>
    );
}

export default SingleCard;