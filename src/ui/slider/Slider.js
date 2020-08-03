import React, { useState } from 'react';
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";

const railOuterStyle = {
  position: 'absolute',
  height: '100%',
  width: 42,
  transform: 'translate(-50%, 0%)',
  borderRadius: 7,
  cursor: 'pointer',
}

const railInnerStyle = {
  position: 'absolute',
  height: '100%',
  width: 25,
  transform: 'translate(-50%, 0%)',
  borderRadius: 7,
  pointerEvents: 'none',
  backgroundColor: '#611af2',
}

export function SliderRail({ getRailProps }) {
  return (
    <>
      <div style={railOuterStyle} {...getRailProps()} />
      <div style={railInnerStyle} />
    </>
  )
}

export function Handle({
  domain: [min, max],
  handle: { id, value, percent },
  getHandleProps,
}) {
  return (
    <>
      <div
        style={{
          top: `${percent}%`,
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
          WebkitTapHighlightColor: 'rgba(0,0,0,0)',
          zIndex: 5,
          width: 42,
          height: 28,
          cursor: 'pointer',
          backgroundColor: 'none',
        }}
        {...getHandleProps(id)}
      />
      <div
        role="slider"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        style={{
          top: `${percent}%`,
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
          zIndex: 2,
          width: 40,
          height: 40,
          borderRadius: '50%',
          boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.3)',
          backgroundColor: '#611af2',
        }}
      />
    </>
  )
}

export function Track({ source, target, getTrackProps, disabled }) {
  return (
    <div
      style={{
        position: 'absolute',
        zIndex: 1,
        backgroundColor: "rgb(155,155,155)",
        borderRadius: 7,
        cursor: 'pointer',
        width: 25,
        transform: 'translate(-50%, 0%)',
        top: `${source.percent}%`,
        height: `${target.percent - source.percent}%`,
      }}
      {...getTrackProps()}
    />
  )
}

function Tick({ tick }) {
  return (
    <div>
      <div
        style={{
          position: 'absolute',
          marginTop: 0,
          marginLeft: 30,
          height: 3,
          width: 6,
          backgroundColor: 'white',
          top: `${tick.percent}%`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          marginTop: -20,
          marginLeft: 50,
          fontSize: 35,
          fontFamily: 'Roboto',
          color: 'white',
          top: `${tick.percent}%`,
        }}
      >
        {(tick.value)}
      </div>
    </div>
  )
}


export const InputSlider = ({ domain, onChange, label, currentValue, onUpdate}) => {
  const sliderStyle = {
    position: 'relative',
    height: '45em',
    marginLeft: '45%',
    touchAction: 'none',
  }
  
  const defaultValues = [150]

  const [ values, setValues ] = useState(defaultValues.slice());

  return (
    <div>
      <p Style="color: white;font-size: 25px;font-family: Roboto;margin-top: -1em; text-transform: uppercase;">{label}</p>
      <Slider
          vertical
          mode={1}
          step={1}
          domain={domain}
          rootStyle={sliderStyle}
          onChange={onChange}
          onUpdate={onUpdate}
          values={values}
        >
          <Rail>
            {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
          </Rail>
          <Handles>
              {({ handles, getHandleProps }) => (
                <div>
                  {handles.map(handle => (
                    <Handle
                      key={handle.id}
                      handle={handle}
                      domain={domain}
                      getHandleProps={getHandleProps}
                    />
                  ))}
                </div>
              )}
            </Handles>
          <Tracks right={false}>
              {({ tracks, getTrackProps }) => (
                <div>
                  {tracks.map(({ id, source, target }) => (
                    <Track
                      key={id}
                      source={source}
                      target={target}
                      getTrackProps={getTrackProps}
                    />
                  ))}
                </div>
              )}
            </Tracks>
          <Ticks count={10}>
            {({ ticks }) => (
              <div className="slider-ticks">
                {ticks.map(tick => (
                  <Tick key={tick.id} tick={tick} />
                ))}
              </div>
            )}
          </Ticks>
          <p Style="color: white;font-size: 45px;font-family: Roboto;padding-top: 17em; margin-left: -3em; text-transform: uppercase;margin-left: -2em;
    width: 5em;">{currentValue}</p>
        </Slider>
    </div>
  )
}

export default InputSlider;
