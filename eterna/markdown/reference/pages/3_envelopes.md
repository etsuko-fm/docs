# Envelopes
![screenshot of envelopes page](https://d21ikh70ytbexu.cloudfront.net/docs/eterna/260124/envelopes.png)

The Envelopes page controls the attack/decay envelope for each triggered voice. A single Shape parameter controls the balance between attack and decay.

Envelope times can be modulated by the sequencer's velocity using the `MOD` parameter (K2). When Lowpass Gate (`LPG`) is selected as `MOD` option, a lowpass filter is enabled for each voice, and the envelope controls not only amplitude, but also cutoff frequency. In this mode, the envelope time is also modulated by the sequencer's velocity.



#### Controls
| Control | Function | Description |
|:--------|:---------|:------------|
| K2 | Modulation (`OFF`/`TIME`/`LPG`) | Selects the target for velocity modulation. Selecting `LPG` both enables the Lowpass Gate and enables velocity modulation for its cutoff parameter. |
| K3 | Envelope curve (`NEG` / `LIN` / `POS`) | Sets the curvature of the envelope. A linear curvature means a straight line from 0 to 1 and from 1 to 0. See the graphic for the shape of the negative and positive curvatures.  |
| E2 | Time | Total duration of the envelope |
| E3 | Shape | Skews envelope towards longer decay or longer attack |
