# Sample


![screenshot of sample page](https://d21ikh70ytbexu.cloudfront.net/docs/eterna/260417/sampling-initial.png)

Load a sample from disk with K2. Drive (E2) is available to boost the amplitude of all channels in parallel.

### Supported formats
- WAV/AIFF at 48kHz - other sample rates will be played back at incorrect pitch
- mono, stereo or multichannel (max. 6 channels)
- Max 5m48s duration; longer samples will be trimmed to this length


#### Controls
| Control | Function | Description |
|:--------|:---------|:------------|
| K2 | Select sample | Selects the audio sample to use. |
| K3 | | |
| E2 | Drive | Applies a 0-24dB boost, to each channel equally, soft-clipped using a [tanh function](http://gdsp.hf.ntnu.no/lessons/3/17/). |
| E3 | | |

Once the sample is loaded, the file path becomes the title of the window. The duration of the sample is shown between parentheses. Also, a waveform per channel is rendered. Playback starts automatically once the sample has been loaded. 

![screenshot of sample page](https://d21ikh70ytbexu.cloudfront.net/docs/eterna/260417/sampling-loaded.png)
