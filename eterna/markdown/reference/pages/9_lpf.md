# Lowpass Filter
![screenshot of lowpass filter page](https://d21ikh70ytbexu.cloudfront.net/docs/eterna/260501/lowpass-on.png)

The Lowpass Filter provides a 12dB/octave SVF filter for the mix, with adjustable cutoff frequency and resonance.

The filter also has an LFO available, with selectable waveform, rate and range.

![screenshot of lowpass lfo ctrl](https://d21ikh70ytbexu.cloudfront.net/docs/eterna/260124/lowpass-lfo.png)

### Control Modes
There are 2 different control modes for the filter, set by K2 (`CTRL`):
- [Filter](#filter)
- [LFO](#lfo)


#### Filter
| Control | Function | Description |
|:--------|:---------|:------------|
| K2 | CTRL | Switches control mode |
| K3 | Filter mix (OFF / 50% / ON) | Provides control over filter routing.`OFF` passes the dry signal only and switches the filter off. The 50% setting routes half of the signal through the filter.  `ON` routes the full signal through the filter.
| E2 | Frequency (20Hz-20kHz) | Sets the filter cutoff frequency |
| E3 | Resonance (0 - 0.98) | Controls the filter resonance |


#### LFO
| Control | Function | Description |
|:--------|:---------|:------------|
| K2 | CTRL | Switches control mode |
| K3 | LFO waveform | Selects the LFO waveform shape |
| E2 | LFO rate | Synced to clock; 1.00 = 4 beats |
| E3 | LFO range (0-16, unipolar) | Implemented using `frequency * 2^range` |
