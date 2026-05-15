
# Master

![screenshot of master page](https://d21ikh70ytbexu.cloudfront.net/docs/eterna/260501/master-play-2.png)

The Master page offers a simple mastering chain to control the stereo output. The signal passes through a Bass Mono stage, which uses a [Linkwitz-Riley filter](https://en.wikipedia.org/wiki/Linkwitz%E2%80%93Riley_filter) to mono-sum frequencies below a set threshold — followed by an optional compressor with three presets.

The history of the last few samples is used to display a [lissajous curve](https://en.wikipedia.org/wiki/Lissajous_curve).


#### Controls
| Control | Function | Description |
|:--------|:---------|:------------|
| K2 | Bass mono | Sums the stereo mix into a mono mix up to a specified frequency: 20Hz (off), 50Hz, 100Hz, 200Hz, 20kHz (full mono) |
| K3 | Compressor preset | Cycles back and forth due to sudden jumps in output levels: off, soft, medium, hard |
| E2 | Drive (0dB to +24dB) | Pre-compressor drive |
| E3 | Output amp (-INF, -60dB to 0dB) | Sets the output amplification level |

The settings of each compressor preset are as follows:

| Parameter | Soft | Medium | Hard |
|:----------|:-----|:-------|:-----|
| Attack | 10ms | 10ms | 10ms |
| Release | 300ms | 300ms | 300ms |
| Ratio | 1:2 | 1:4 | 1:8 |
| Threshold | -6dB | -12dB | -18dB |
