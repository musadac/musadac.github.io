---
title: "RAG Pipelines"
description: "Retrieval-Augmented Generation - how to ground LLMs in your enterprise data."
date: "2026-04-05"
---

## What is RAG?

Retrieval-Augmented Generation (RAG) is a technique that combines information retrieval with text generation. Instead of relying solely on what a language model has memorized during training, RAG retrieves relevant documents at inference time and uses them as context for generating responses.

## Why RAG Exists

LLMs have two fundamental limitations: they hallucinate (generate plausible but incorrect information) and their knowledge is frozen at training time. RAG addresses both by grounding the model's responses in actual retrieved data.

## How RAG Works

### 1. Indexing Phase
Documents are split into chunks, converted to embeddings via an embedding model, and stored in a vector database.

### 2. Retrieval Phase
When a query comes in, it's embedded using the same model. The vector database returns the most similar document chunks (typically using cosine similarity or approximate nearest neighbor search).

### 3. Generation Phase
The retrieved chunks are inserted into the LLM's prompt as context, and the model generates an answer grounded in that context.

## Key Design Decisions

**Chunking Strategy**: How you split documents matters enormously. Too small and you lose context. Too large and you dilute relevance. Common approaches include fixed-size chunks with overlap, semantic chunking, and recursive splitting.

**Embedding Model**: The quality of retrieval depends on the embedding model. Options range from open-source (e5, bge) to commercial (OpenAI, Cohere). The choice affects both accuracy and latency.

**Vector Database**: Purpose-built stores (Pinecone, Weaviate, Qdrant) vs. extensions on existing databases (pgvector, Teradata VectorStore). The right choice depends on scale, existing infrastructure, and operational complexity.

**Reranking**: A two-stage retrieval where initial results from vector search are reranked by a cross-encoder model for higher precision.

## Advanced Patterns

- **Hybrid Search**: Combining vector similarity with keyword search (BM25) for better recall
- **Query Decomposition**: Breaking complex queries into sub-queries for more targeted retrieval
- **Self-RAG**: The model decides when it needs retrieval vs. when it can answer directly
- **Agentic RAG**: Using AI agents to iteratively retrieve, reason, and refine answers

## Production Considerations

In enterprise deployments, RAG systems need evaluation frameworks (measuring retrieval precision, answer faithfulness), guardrails for sensitive data, access control on retrieved documents, and monitoring for drift in retrieval quality over time.
