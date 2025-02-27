# Kafka Runs Anywhere

## Kafka Architecture

- Kafka servers are referred to as _brokers_
- All of the _brokers_ that work together are referred to as a _cluster_
- Clusters may consist of just one broker, or thousands of brokers
- [Apache Zookeeper](https://zookeeper.apache.org/) is used by Kafka brokers to determine which broker is the leader of a given partition and topic
- Zookeeper keeps track of which brokers are part of the Kafka cluster
- Zookeeper stores configuration for topics and permissions (Access Control Lists - ACLs)
  - ACLs are Permissions associated with an object. In Kafka, this typically refers to a user’s permissions with respect to production and consumption, and/or the topics themselves.
- Kafka nodes may gracefully join and leave the cluster
- Kafka runs on the Java Virtual Machine (JVM)

## Kafka Clustering

- Kafka servers are referred to as _brokers_ and organized into _clusters_.
- Kafka uses Apache Zookeeper to keep track of topic and ACL configuration, as well as determine leadership and cluster management.
- Usage of ZooKeeper means that Kafka brokers can typically seamlessly join and leave clusters, allowing Kafka to grow easily as its usage increases or decreases.

![image](images/apache-zookeeper.png)
