import React from 'react';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './EmblaCarouselArrowButtons';
import useEmblaCarousel from 'embla-carousel-react';

const EmblaCarousel = ({ comments, options }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi);

    return (
        <section className="embla">
            <h1 className='text-5xl font-extrabold text-center pb-20'>Comentarios</h1>
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {comments.map((comment, index) => (
                        <div className="embla__slide" key={index}>
                            <div className="wrapper bg--400 antialiased border text-gray-900">
                                <div className="w-full object-cover object-center rounded-lg shadow-md">

                                    <img src={comment.image} alt=" random imgee" className="w-full object-cover object-center rounded-lg shadow-md" />

                                    <div className="relative px-4 -mt-16  ">
                                        <div className="bg-white p-6 rounded-lg shadow-lg">
                                            <div className="flex items-baseline">
                                                <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                                                    PetQr
                                                </span>
                                                
                                            </div>

                                            <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">{comment.userName}</h4>

                                            <div className="mt-1 text-gray-500">
                                                <p className='font-extralight'>

                                                {comment.comments }
                                                </p>
                                                
                                            </div>
                                            
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>

                <div className="embla__dots">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={'embla__dot'.concat(index === selectedIndex ? ' embla__dot--selected' : '')}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EmblaCarousel;
