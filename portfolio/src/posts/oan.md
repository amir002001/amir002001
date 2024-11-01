---
title: "Efficient Inference Using Objectness Activation Networks"
---

Aerial imagery has grown to sizes and resolutions beyond comprehension.
For Detroit alone, Maxar satellite imagery is around 50 GB with
aerial imagery being around 100 GB.

Inference on this scale of imagery is expensive, but paired with an
Objectness Activation Network (OAN), a much cheaper threshold for each
tile is calculated to direct the pipeline on whether a tile has information at all.
Using this technique I have increased the speed of inference by almost a third
without loss in accuracy in certain areas where features are not as prevalent.
