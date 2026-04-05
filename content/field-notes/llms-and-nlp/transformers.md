---
title: "Transformers"
description: "The architecture behind modern LLMs - self-attention, encoder-decoder, and why it changed everything."
date: "2026-04-05"
---

## What are Transformers?

The Transformer is a neural network architecture introduced in the 2017 paper "Attention Is All You Need" by Vaswani et al. It replaced recurrent architectures (RNNs, LSTMs) as the dominant approach for sequence modeling by relying entirely on self-attention mechanisms.

## Why Transformers Matter

Before Transformers, sequence models processed tokens one at a time (sequentially). This made training slow and limited the model's ability to capture long-range dependencies. Transformers solve both problems by processing all tokens in parallel and using attention to relate any token to any other token regardless of distance.

## Core Components

### Self-Attention

The key innovation. For each token in the input, the model computes how much "attention" it should pay to every other token. This is done through three learned projections: Query (Q), Key (K), and Value (V).

The attention score is computed as:

```
Attention(Q, K, V) = softmax(QK^T / sqrt(d_k)) V
```

Where `d_k` is the dimension of the key vectors, used for scaling.

### Multi-Head Attention

Instead of computing a single attention function, Transformers use multiple "heads" - each learning different attention patterns. The outputs are concatenated and projected back to the model dimension.

### Position Encoding

Since Transformers process all tokens in parallel, they have no inherent sense of order. Positional encodings (sinusoidal or learned) are added to the input embeddings to provide position information.

### Feed-Forward Networks

After attention, each token passes through a two-layer feed-forward network (applied independently to each position). This adds non-linearity and increases the model's representational capacity.

## Encoder vs Decoder

- **Encoder-only** (BERT): Bidirectional attention. Good for classification, NER, embeddings.
- **Decoder-only** (GPT): Causal (left-to-right) attention. Good for generation.
- **Encoder-Decoder** (T5, BART): Full architecture. Good for translation, summarization.

## Key Variants

| Model | Type | Key Innovation |
|-------|------|----------------|
| BERT | Encoder | Masked language modeling |
| GPT | Decoder | Autoregressive pre-training |
| T5 | Enc-Dec | Text-to-text framework |
| LLaMA | Decoder | Efficient open-source LLM |
| Mistral | Decoder | Sliding window attention |

## Why This Matters for Enterprise AI

Transformers are the foundation of every modern LLM deployment. Understanding the architecture is essential for making informed decisions about model selection, fine-tuning strategies, and inference optimization in production systems.
