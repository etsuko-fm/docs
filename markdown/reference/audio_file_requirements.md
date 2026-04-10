# Audio file requirements



### Format and channels
Eterna loads a single 48 kHz `WAV` or `AIFF` file, referred to as a _sample_. This file can be mono (1 channel), stereo (2 channels), or multichannel.

::: info

A multichannel file is not a special format — it’s simply an audio file that contains more than two channels. You can think of it as several mono tracks bundled together inside one file.
:::

### Length
The maximum supported sample length is $2^{24}$ samples.
In more familiar time units, this is approximately 5m48s given a sample rate of 48 kHz.
Files with other sample rates will reach this limit at different durations.


### Sample rate
The sample rate of a loaded audio file should be 48 kHz; other sample rates will be played back at incorrect pitch. This is because Eterna uses SuperCollider’s audio engine which, on monome norns, is configured to run at 48 kHz.

Audio files recorded at a different sample rate (for example 44.1 kHz) are played back as if they were 48 kHz files, which makes them sound at a different pitch, depending on their original rate.
