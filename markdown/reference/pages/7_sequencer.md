# Sequencer
![screenshot of sequencer page](https://d21ikh70ytbexu.cloudfront.net/docs/eterna/260124/sequencer-some.png)

A [Perlin noise](https://en.wikipedia.org/wiki/Perlin_noise)-based sequencer which offers 2 parameters to control the entire 6-track sequence: seed (E2) and density (E3). The velocity of each step is based on the perlin noise value and indicated by the brightness of a step. 


#### Controls
| Control | Function | Description |
|:--------|:---------|:------------|
| K2 | Toggle transport on/off | Starts or stops playback. |
| K3 | Step divider | 1/32, 1/16 or 1/8 - based on the current BPM, where 1/16 divides each beat into 4 steps (which would make 1 step a 1/16th note in a 4/4 time signature). |
| E2 | Seed (0-100) | Controls the $x$-value of the perlin noise algorithm, generating a reproducible pattern. This value is set to a random initial value when the script is loaded. |
| E3 | Density (0-1) | Controls the amount of active steps, where 0 always gives an empty sequence and 1 always fills all available steps. |
