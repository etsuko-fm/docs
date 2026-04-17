# Playback Rates
![screenshot of playback rates page](https://d21ikh70ytbexu.cloudfront.net/docs/eterna/260417/playback-range.png)

Controls the playback rate and direction (`FWD`/`REV`/`BI`) of all voices. The rates are quantized to octaves. All playback rates are linked to each other as if they form a sine wave together. `CNTR` (E2) controls the offset of the wave from the center, while `SPRD` (E3) controls the height.

From this follows that if spread is zero, the playback rate for every voice is equal. `RANGE` (K3) aids in limiting the total range to 3 octaves if desired.


#### Controls
| Control | Function | Description |
|:--------|:---------|:------------|
| K2 | Select playback direction | Forward, reverse or both. When `BI` (bi-directional) is selected, voice 1, 3 and 5 are played forward, while voice 2, 4 and 6 are played in reverse |
| K3 | Toggle max. range (3 or 5 octaves) | Sets the maximum pitch range |
| E2 | Center (offset from center) | Adjusts the offset from the center point |
| E3 | Spread | How the values are spread over the graph |
