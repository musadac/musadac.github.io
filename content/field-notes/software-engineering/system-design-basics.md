---
title: "System Design Basics"
description: "Foundational concepts for designing scalable, reliable distributed systems."
date: "2026-04-05"
---

## Why System Design Matters

Every production system - whether it's a REST API serving 10 requests/second or a real-time ML pipeline processing millions of events - requires thoughtful design. System design is about making trade-offs: consistency vs. availability, latency vs. throughput, simplicity vs. flexibility.

## Core Concepts

### Scalability
- **Vertical Scaling**: Bigger machines (more CPU, RAM). Simple but has limits.
- **Horizontal Scaling**: More machines. Requires distributed design but scales further.

### Load Balancing
Distributing incoming requests across multiple servers. Common strategies: round-robin, least connections, consistent hashing.

### Caching
Storing frequently accessed data closer to the consumer. Layers include: browser cache, CDN, application cache (Redis/Memcached), database query cache.

### Database Design
- **SQL** (PostgreSQL, MySQL): Strong consistency, ACID transactions, structured schemas.
- **NoSQL** (MongoDB, DynamoDB): Flexible schemas, horizontal scaling, eventual consistency.
- **When to use which**: SQL for transactional workloads, NoSQL for high-volume unstructured data.

### Message Queues
Decoupling producers from consumers using async messaging (Kafka, RabbitMQ, SQS). Essential for event-driven architectures and handling traffic spikes.

## Key Trade-offs

### CAP Theorem
In a distributed system, you can only guarantee two of three: Consistency, Availability, Partition Tolerance. Since network partitions are unavoidable, the real choice is between consistency and availability during failures.

### Latency vs. Throughput
Optimizing for low latency (fast individual responses) often conflicts with high throughput (processing many requests). Batching improves throughput but adds latency.

## Reliability Patterns
- **Redundancy**: No single point of failure
- **Circuit Breakers**: Failing fast when a downstream service is unhealthy
- **Retries with Backoff**: Handling transient failures gracefully
- **Health Checks**: Monitoring system components proactively

## How to Approach a System Design Problem

1. Clarify requirements and constraints
2. Estimate scale (users, requests/sec, data volume)
3. Design the high-level architecture
4. Deep-dive into critical components
5. Identify bottlenecks and trade-offs
6. Discuss monitoring and failure modes
