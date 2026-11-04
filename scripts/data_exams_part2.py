# Part 2: Exams 6 to 10 (20 questions each)

EXAMS_PART2 = {
    'exam-dbms-sql-query': [
        {
            "id": "dbms-sql-01",
            "questionText": "Which normal form guarantees that every determinant is a candidate key?",
            "options": ["1NF", "2NF", "3NF", "Boyce-Codd Normal Form (BCNF)"],
            "correctAnswer": 3,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Medium",
            "explanation": "A relation is in BCNF if and only if for every non-trivial functional dependency X -> Y, X is a superkey (determinant is a candidate key)."
        },
        {
            "id": "dbms-sql-02",
            "questionText": "What does the 'A' in ACID properties of a database transaction signify?",
            "options": ["Availability", "Atomicity", "Accuracy", "Auditing"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "Atomicity ensures that all operations in a transaction execute to completion, or none do (all-or-nothing)."
        },
        {
            "id": "dbms-sql-03",
            "questionText": "Which SQL clause is used to filter groups created by the GROUP BY statement?",
            "options": ["WHERE", "HAVING", "FILTER", "ORDER BY"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "WHERE filters individual rows prior to grouping; HAVING filters aggregated groups."
        },
        {
            "id": "dbms-sql-04",
            "questionText": "What type of lock allows multiple transactions to read a data item concurrently, but prevents any transaction from writing to it?",
            "options": ["Exclusive Lock (X-Lock)", "Shared Lock (S-Lock)", "Intent Lock", "Two-Phase Lock"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Medium",
            "explanation": "Shared locks (S-locks) allow concurrent read operations but disallow exclusive writes."
        },
        {
            "id": "dbms-sql-05",
            "questionText": "In a B+ Tree index with order m, where are the actual data pointers or records stored?",
            "options": [
                "Only in the leaf nodes",
                "Equally distributed across all internal and leaf nodes",
                "Only in the root node",
                "In the internal nodes only"
            ],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Medium",
            "explanation": "In a B+ Tree, internal nodes strictly store search keys for navigation; all records and data pointers reside exclusively in linked leaf nodes."
        },
        {
            "id": "dbms-sql-06",
            "questionText": "Which SQL statement is used to remove all records from a table, reset identity seeds, and release deallocated space without logging individual row deletions?",
            "options": ["DELETE FROM table", "DROP TABLE table", "TRUNCATE TABLE table", "REMOVE TABLE table"],
            "correctAnswer": 2,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "TRUNCATE is a DDL command that deallocates data pages quickly, unlike DELETE which logs row-by-row deletions."
        },
        {
            "id": "dbms-sql-07",
            "questionText": "What anomaly occurs when Transaction T1 updates a row without committing, and Transaction T2 subsequently reads this uncommitted value?",
            "options": ["Dirty Read", "Non-Repeatable Read", "Phantom Read", "Lost Update"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Medium",
            "explanation": "A Dirty Read occurs when a transaction reads uncommitted changes of another transaction that might later be rolled back."
        },
        {
            "id": "dbms-sql-08",
            "questionText": "What is a candidate key with minimal set of attributes called?",
            "options": ["Super Key", "Foreign Key", "Candidate Key", "Surrogate Key"],
            "correctAnswer": 2,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "A minimal super key (one where no subset is a super key) is by definition a Candidate Key."
        },
        {
            "id": "dbms-sql-09",
            "questionText": "Which relational algebra operation corresponds to selecting specific columns from a relation?",
            "options": ["Selection (σ)", "Projection (π)", "Cartesian Product (×)", "Join (⨝)"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "Projection (π) extracts specified attributes (columns) from a relation; Selection (σ) filters rows."
        },
        {
            "id": "dbms-sql-10",
            "questionText": "What is the highest isolation level in SQL standard that guarantees zero dirty reads, non-repeatable reads, or phantom reads?",
            "options": ["Read Uncommitted", "Read Committed", "Repeatable Read", "Serializable"],
            "correctAnswer": 3,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Medium",
            "explanation": "Serializable isolation ensures execution produces the same effect as some purely sequential serial schedule."
        },
        {
            "id": "dbms-sql-11",
            "questionText": "Which of the following constraints enforces referential integrity between two tables?",
            "options": ["PRIMARY KEY", "FOREIGN KEY", "UNIQUE", "CHECK"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "A FOREIGN KEY references the primary key of another table, ensuring referential integrity."
        },
        {
            "id": "dbms-sql-12",
            "questionText": "What will `SELECT COUNT(*) FROM table` return if a table contains 5 rows and all columns in row 3 are NULL?",
            "options": ["0", "4", "5", "NULL"],
            "correctAnswer": 2,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "`COUNT(*)` counts total rows regardless of NULL values inside individual attributes."
        },
        {
            "id": "dbms-sql-13",
            "questionText": "In Two-Phase Locking (2PL), what occurs during the 'Shrinking Phase'?",
            "options": [
                "The transaction may release locks but cannot acquire any new locks",
                "The transaction acquires all locks and releases none",
                "Database size is physically compacted",
                "Old logs are truncated from the disk"
            ],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Medium",
            "explanation": "In 2PL, after the lock point, a transaction enters the shrinking phase where locks can only be released, not acquired."
        },
        {
            "id": "dbms-sql-14",
            "questionText": "Which join returns all rows from the left table, along with matching rows from the right table (and NULLs for non-matches)?",
            "options": ["INNER JOIN", "LEFT OUTER JOIN", "RIGHT OUTER JOIN", "CROSS JOIN"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "LEFT OUTER JOIN preserves every record from the left table regardless of matches in the right table."
        },
        {
            "id": "dbms-sql-15",
            "questionText": "What is the purpose of database indexing?",
            "options": [
                "To speed up record retrieval at the expense of additional storage and write overhead",
                "To eliminate data redundancy completely",
                "To automatically generate primary keys",
                "To encrypt table columns for security"
            ],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "Indexes provide quick lookup paths (e.g. B-Trees) reducing disk I/O, but add overhead on INSERT/UPDATE/DELETE."
        },
        {
            "id": "dbms-sql-16",
            "questionText": "What is a lossless-join decomposition in database normalization?",
            "options": [
                "Decomposition of R into R1 and R2 such that R1 ⨝ R2 yields exactly original relation R with no spurious tuples",
                "Decomposition where no data types are changed",
                "Decomposition where all foreign keys are removed",
                "A join where no NULL values are present"
            ],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Hard",
            "explanation": "A decomposition is lossless if natural join of decomposed relations reconstructs original relation without spurious tuples."
        },
        {
            "id": "dbms-sql-17",
            "questionText": "Which SQL function is an analytical window function that assigns a unique sequential integer to each row within a partition?",
            "options": ["RANK()", "DENSE_RANK()", "ROW_NUMBER()", "NTILE()"],
            "correctAnswer": 2,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Medium",
            "explanation": "`ROW_NUMBER()` outputs an unbroken consecutive sequence of integers (1, 2, 3...) regardless of ties."
        },
        {
            "id": "dbms-sql-18",
            "questionText": "What does a Write-Ahead Logging (WAL) protocol enforce?",
            "options": [
                "Log records must be written to stable storage before corresponding dirty database pages are written to disk",
                "Data is written to database before the log",
                "All writes are stored in RAM without persistent disk updates",
                "Only reads are logged"
            ],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Hard",
            "explanation": "WAL guarantees durability by ensuring log updates reach persistent storage before changes overwrite data pages."
        },
        {
            "id": "dbms-sql-19",
            "questionText": "How does an INNER JOIN differ from a NATURAL JOIN in SQL?",
            "options": [
                "NATURAL JOIN joins tables automatically based on columns having identical names and data types, removing duplicate columns",
                "INNER JOIN does not require an ON condition",
                "NATURAL JOIN is equivalent to a CROSS JOIN",
                "INNER JOIN only works on primary keys"
            ],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Medium",
            "explanation": "NATURAL JOIN automatically matches all identically named columns across relations and suppresses duplicate join columns."
        },
        {
            "id": "dbms-sql-20",
            "questionText": "Which statement about clustered vs non-clustered indexes is TRUE?",
            "options": [
                "A table can have only one clustered index because it dictates physical storage order of data rows",
                "A table can have up to 256 clustered indexes",
                "Non-clustered indexes physically rearrange data rows on disk",
                "Clustered indexes always require separate index pages pointing to random heap locations"
            ],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Medium",
            "explanation": "Because records can only be ordered physically in one sequence on disk, only one clustered index can exist per table."
        }
    ],

    'exam-os-process-threads': [
        {
            "id": "os-pt-01",
            "questionText": "Which state transition is initiated by the CPU scheduler in an operating system?",
            "options": ["Running to Ready", "Ready to Running", "Waiting to Ready", "Running to Terminated"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "The CPU scheduler (dispatcher) selects a process from the Ready queue and assigns it to the CPU (Ready -> Running)."
        },
        {
            "id": "os-pt-02",
            "questionText": "Which CPU scheduling algorithm is preemptive and minimizes the average waiting time for a set of processes?",
            "options": ["First-Come, First-Served (FCFS)", "Shortest Remaining Time First (SRTF)", "Round Robin (RR)", "Priority Non-preemptive"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "SRTF (preemptive SJF) is mathematically provably optimal in yielding minimal average waiting time."
        },
        {
            "id": "os-pt-03",
            "questionText": "Which of the following is NOT one of the four necessary conditions for a deadlock to occur (Coffman conditions)?",
            "options": ["Mutual Exclusion", "Hold and Wait", "No Preemption", "Strict Alternation"],
            "correctAnswer": 3,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "The 4 Coffman conditions are Mutual Exclusion, Hold & Wait, No Preemption, and Circular Wait. Strict Alternation is not a deadlock condition."
        },
        {
            "id": "os-pt-04",
            "questionText": "What does a counting semaphore initialized to a value of 5 indicate?",
            "options": [
                "At most 5 concurrent processes can access the shared resource simultaneously",
                "There are 5 processes currently blocked in the queue",
                "Only 1 process can access the resource 5 times",
                "The system will deadlock after 5 seconds"
            ],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "The counter tracks available instances of a finite resource; 5 permits are available before calls block."
        },
        {
            "id": "os-pt-05",
            "questionText": "What is the phenomenon called when excessive page faults cause the operating system to spend virtually all its time paging rather than executing processes?",
            "options": ["Paging Drift", "Thrashing", "Belady's Anomaly", "Fragmentation"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "Thrashing occurs when the working sets of active processes exceed total physical frames, causing perpetual page-in/page-out."
        },
        {
            "id": "os-pt-06",
            "questionText": "Which page replacement algorithm suffers from Belady's Anomaly (where increasing page frames increases page faults)?",
            "options": ["Optimal (OPT)", "Least Recently Used (LRU)", "First-In, First-Out (FIFO)", "Least Frequently Used (LFU)"],
            "correctAnswer": 2,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Medium",
            "explanation": "FIFO is not a stack algorithm, so allocating more physical frames can counter-intuitively increase page fault frequency."
        },
        {
            "id": "os-pt-07",
            "questionText": "In process management, what is a 'Zombie Process'?",
            "options": [
                "A process that has finished execution but still has an entry in the Process Table because its parent has not read its exit status",
                "A process running in an infinite loop consuming 100% CPU",
                "A process whose parent terminated, leaving it orphaned to init",
                "A process blocked on I/O indefinitely"
            ],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Medium",
            "explanation": "A process becomes a zombie when it calls exit() and awaits its parent to execute wait() to reclaim its PID."
        },
        {
            "id": "os-pt-08",
            "questionText": "What hardware component is responsible for translating Virtual Addresses to Physical Addresses during memory access?",
            "options": ["ALU", "Memory Management Unit (MMU)", "Instruction Register", "DMA Controller"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "The MMU maps virtual page numbers to physical page frames using page tables and TLB."
        },
        {
            "id": "os-pt-09",
            "questionText": "What is the primary advantage of multithreading over multiprocessing?",
            "options": [
                "Threads within the same process share code, data, and heap, resulting in much faster context switching and lower overhead",
                "Threads cannot crash their parent process",
                "Threads do not require any synchronization primitives",
                "Threads run without CPU intervention"
            ],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "Threads share memory and open files within a process, minimizing memory footprint and context-switch cost."
        },
        {
            "id": "os-pt-10",
            "questionText": "Which algorithm is used for Deadlock Avoidance by checking safe states before allocating resources?",
            "options": ["Banker's Algorithm", "Round Robin", "Dijkstra's Algorithm", "Peterson's Algorithm"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "Dijkstra's Banker's Algorithm evaluates resource requests to verify the system remains in a safe state with a valid execution sequence."
        },
        {
            "id": "os-pt-11",
            "questionText": "What is internal fragmentation in memory allocation?",
            "options": [
                "Unused memory that is internal to a partitioned block assigned to a process",
                "Unused memory scattered between allocated memory blocks",
                "Memory corrupted by dangling pointers",
                "Memory swapped out to secondary disk"
            ],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "Internal fragmentation arises when fixed partitions or fixed-size pages allocate more memory than a process requested."
        },
        {
            "id": "os-pt-12",
            "questionText": "What system call is used in Unix to duplicate the current process, creating an identical child process?",
            "options": ["clone()", "fork()", "spawn()", "exec()"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "`fork()` clones the calling process, returning 0 to the child and the child's PID to the parent."
        },
        {
            "id": "os-pt-13",
            "questionText": "What is the Translation Lookaside Buffer (TLB)?",
            "options": [
                "A fast hardware associative cache that stores recent virtual-to-physical address translations",
                "A buffer for network packets",
                "A disk cache for swap space",
                "An instruction prefetch queue in CPU"
            ],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Medium",
            "explanation": "The TLB is a high-speed hardware cache holding recently resolved page table entries to avoid multi-level memory lookups."
        },
        {
            "id": "os-pt-14",
            "questionText": "In a Round Robin scheduler, what happens if the time quantum is chosen to be extremely large (larger than the longest burst time)?",
            "options": [
                "It degenerates into First-Come, First-Served (FCFS)",
                "It causes infinite deadlocks",
                "It causes maximum thrashing",
                "Context switches increase exponentially"
            ],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Medium",
            "explanation": "If time quantum q > max(burst), no process gets preempted before completion, behaving identically to FCFS."
        },
        {
            "id": "os-pt-15",
            "questionText": "What is the critical section problem requirement ensuring that no other process can enter the critical section when one is executing inside it?",
            "options": ["Mutual Exclusion", "Progress", "Bounded Waiting", "Starvation Freedom"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "Mutual Exclusion dictates that at most one process can execute in its critical section at any instant."
        },
        {
            "id": "os-pt-16",
            "questionText": "Which IPC (Inter-Process Communication) mechanism provides asynchronous notification of events to a process in Unix?",
            "options": ["Shared Memory", "Signals", "Pipes", "Message Queues"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Medium",
            "explanation": "Signals (e.g. SIGINT, SIGKILL, SIGSEGV) deliver asynchronous software interrupts to Unix processes."
        },
        {
            "id": "os-pt-17",
            "questionText": "What happens during a Context Switch?",
            "options": [
                "The state (registers, program counter) of the running process is saved, and state of next ready process is restored",
                "The process memory is formatted",
                "The operating system reboots",
                "All cache memories are permanently deleted"
            ],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "A context switch stores the process control block (PCB) state of outgoing process and loads that of the scheduled process."
        },
        {
            "id": "os-pt-18",
            "questionText": "What is 'Copy-on-Write' (COW) optimization during process creation with fork()?",
            "options": [
                "Parent and child share the exact same physical pages until one process writes to a page, at which point a private copy is created",
                "The child immediately duplicates all physical pages",
                "Writing is permanently disallowed in child",
                "Memory is written to disk before child starts"
            ],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Hard",
            "explanation": "COW defers memory allocation until a process attempts modification, avoiding expensive unnecessary page duplications."
        },
        {
            "id": "os-pt-19",
            "questionText": "Which disk scheduling algorithm services requests in order of their proximity to the current disk arm position?",
            "options": ["FCFS", "SSTF (Shortest Seek Time First)", "SCAN (Elevator)", "C-LOOK"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "SSTF chooses the pending disk I/O request requiring minimal track/cylinder movement from current head position."
        },
        {
            "id": "os-pt-20",
            "questionText": "What is the main drawback of Peterson's Solution for the critical section problem on modern multi-core architectures?",
            "options": [
                "It relies on CPU memory ordering assumptions that can be violated by out-of-order execution and compiler reordering",
                "It requires kernel mode privilege",
                "It cannot work for 2 processes",
                "It uses too much disk storage"
            ],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Hard",
            "explanation": "Modern out-of-order processors and memory architectures require memory barriers; simple load/store flags without barriers fail to guarantee mutual exclusion."
        }
    ],

    'exam-cn-tcp-ip': [
        {
            "id": "cn-tcp-01",
            "questionText": "What is the size of an IPv4 address and an IPv6 address respectively?",
            "options": ["32 bits and 64 bits", "32 bits and 128 bits", "64 bits and 128 bits", "16 bits and 32 bits"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "IPv4 uses 32-bit (4-byte) addresses, while IPv6 expands the address space to 128 bits (16 bytes)."
        },
        {
            "id": "cn-tcp-02",
            "questionText": "Which protocol is responsible for mapping an IP address to a physical MAC address on a local area network?",
            "options": ["DNS", "ARP (Address Resolution Protocol)", "DHCP", "RARP"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "ARP broadcasts an IP address to find the corresponding hardware (MAC) address within the local broadcast domain."
        },
        {
            "id": "cn-tcp-03",
            "questionText": "What flags are exchanged in order during the standard TCP 3-way handshake to establish a connection?",
            "options": ["SYN -> SYN-ACK -> ACK", "ACK -> SYN -> SYN-ACK", "SYN -> ACK -> SYN-ACK", "FIN -> ACK -> FIN-ACK"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "Client sends SYN, Server replies with SYN-ACK, Client finishes connection setup with ACK."
        },
        {
            "id": "cn-tcp-04",
            "questionText": "How many usable host IP addresses are available in a subnet with CIDR prefix /26?",
            "options": ["64", "62", "30", "126"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Medium",
            "explanation": "Subnet bits = 26, Host bits = 32 - 26 = 6. Total addresses = 2^6 = 64. Usable host addresses = 64 - 2 (network & broadcast) = 62."
        },
        {
            "id": "cn-tcp-05",
            "questionText": "Which transport layer protocol is connectionless, unreliable, and has no flow control or retransmissions, but offers minimal latency?",
            "options": ["TCP", "UDP", "SCTP", "BGP"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "User Datagram Protocol (UDP) transmits packets with minimal header overhead and zero delivery guarantees, ideal for streaming and DNS."
        },
        {
            "id": "cn-tcp-06",
            "questionText": "On which port does standard secure HTTPS traffic listen by default?",
            "options": ["80", "443", "8080", "22"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "HTTP defaults to port 80; HTTPS (HTTP over TLS/SSL) defaults to port 443."
        },
        {
            "id": "cn-tcp-07",
            "questionText": "Which routing protocol is an interior gateway protocol based on the Link State algorithm (Dijkstra's shortest path)?",
            "options": ["RIP", "BGP", "OSPF (Open Shortest Path First)", "EGP"],
            "correctAnswer": 2,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Medium",
            "explanation": "OSPF is a link-state routing protocol using Dijkstra's SPF algorithm to calculate shortest loop-free paths within an Autonomous System."
        },
        {
            "id": "cn-tcp-08",
            "questionText": "What does the TCP sliding window mechanism primarily provide?",
            "options": ["Routing optimization", "Flow control to prevent overwhelming the receiver", "Packet encryption", "DNS name resolution"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Medium",
            "explanation": "The receive window field in TCP headers advertises available buffer space, preventing the sender from overflowing receiver buffers."
        },
        {
            "id": "cn-tcp-09",
            "questionText": "What happens when a packet's Time-To-Live (TTL) field reaches zero in an IP router?",
            "options": [
                "The router forwards it directly to the gateway",
                "The packet is discarded, and an ICMP Time Exceeded message is sent back to source",
                "The packet is stored in RAM",
                "The TTL is reset to 255"
            ],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Medium",
            "explanation": "TTL prevents packets from circulating indefinitely in routing loops. At TTL=0, packet is dropped and ICMP Type 11 is sent."
        },
        {
            "id": "cn-tcp-10",
            "questionText": "What is the standard Maximum Transmission Unit (MTU) size for standard Ethernet frames?",
            "options": ["512 bytes", "1024 bytes", "1500 bytes", "9000 bytes"],
            "correctAnswer": 2,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "Standard Ethernet payload MTU is 1500 bytes. Frames larger than this require IP fragmentation unless Jumbo frames are enabled."
        },
        {
            "id": "cn-tcp-11",
            "questionText": "Which protocol dynamically assigns IP addresses, subnet masks, and default gateways to host machines upon booting?",
            "options": ["DHCP", "DNS", "ICMP", "SNMP"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "DHCP (Dynamic Host Configuration Protocol) leases IP configurations via the DORA (Discover, Offer, Request, Acknowledge) process."
        },
        {
            "id": "cn-tcp-12",
            "questionText": "In OSI model, which layer is responsible for data encryption, compression, and format translation?",
            "options": ["Application Layer", "Presentation Layer", "Session Layer", "Transport Layer"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "Layer 6 (Presentation Layer) handles syntax formatting, data compression, and character/cryptographic translations."
        },
        {
            "id": "cn-tcp-13",
            "questionText": "What is the purpose of NAT (Network Address Translation)?",
            "options": [
                "To map private non-routable IP addresses to one or more public IP addresses",
                "To assign domain names to servers",
                "To detect hardware link failures",
                "To calculate shortest spanning trees"
            ],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "NAT allows private local networks (RFC 1918) to share public IPv4 addresses when accessing the Internet."
        },
        {
            "id": "cn-tcp-14",
            "questionText": "In TCP Congestion Control, what phase comes immediately after Slow Start when the congestion window reaches `ssthresh`?",
            "options": ["Congestion Avoidance", "Fast Recovery", "Exponential Backoff", "Selective Repeat"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Medium",
            "explanation": "When CWND reaches `ssthresh`, TCP transitions from exponential growth (Slow Start) to linear additive increase (Congestion Avoidance)."
        },
        {
            "id": "cn-tcp-15",
            "questionText": "Which command-line utility uses ICMP Echo Request and Echo Reply messages to verify host reachability?",
            "options": ["traceroute", "ping", "netstat", "nslookup"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "`ping` sends ICMP Type 8 (Echo Request) and expects ICMP Type 0 (Echo Reply)."
        },
        {
            "id": "cn-tcp-16",
            "questionText": "Which error detection code is widely utilized in Ethernet Data Link Layer frame checks?",
            "options": ["Checksum", "Cyclic Redundancy Check (CRC-32)", "Parity Bit", "Hamming Code"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Medium",
            "explanation": "Ethernet frames include a 4-byte Frame Check Sequence (FCS) computed using a 32-bit CRC polynomial."
        },
        {
            "id": "cn-tcp-17",
            "questionText": "What is the primary difference between HTTP/1.1 and HTTP/2?",
            "options": [
                "HTTP/2 supports multiplexing multiple concurrent streams over a single TCP connection using a binary framing layer",
                "HTTP/2 uses UDP instead of TCP",
                "HTTP/2 does not require TLS",
                "HTTP/2 is plain text only"
            ],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Medium",
            "explanation": "HTTP/2 introduces binary framing and multiplexed concurrent streams over one persistent connection, eliminating head-of-line blocking."
        },
        {
            "id": "cn-tcp-18",
            "questionText": "Which protocol is the de-facto standard Exterior Gateway Protocol used to route traffic across different Autonomous Systems on the global Internet?",
            "options": ["OSPF", "RIP", "BGP (Border Gateway Protocol)", "IS-IS"],
            "correctAnswer": 2,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Medium",
            "explanation": "BGP-4 is the path-vector inter-domain routing protocol governing routing decisions across the global Internet."
        },
        {
            "id": "cn-tcp-19",
            "questionText": "What is the loopback IPv4 address reserved for a host to send network packets to itself?",
            "options": ["192.168.1.1", "10.0.0.1", "127.0.0.1", "255.255.255.255"],
            "correctAnswer": 2,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Easy",
            "explanation": "127.0.0.1 (localhost) is the reserved IPv4 loopback address."
        },
        {
            "id": "cn-tcp-20",
            "questionText": "How does CSMA/CD (Carrier Sense Multiple Access with Collision Detection) handle a collision on an Ethernet bus?",
            "options": [
                "It sends a jam signal, aborts transmission, and waits for a random period determined by Exponential Backoff",
                "It immediately repeats the transmission without delay",
                "It switches to token passing",
                "It disconnects the faulty node permanently"
            ],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Core Technical",
            "difficulty": "Medium",
            "explanation": "Upon detecting a collision, transmitters send a jam signal and invoke Truncated Binary Exponential Backoff before retrying."
        }
    ],

    'exam-quant-tsd-work': [
        {
            "id": "q-tsdw-01",
            "questionText": "A train 240 m long passes a telegraph pole in 16 seconds. How long will it take to pass a platform 360 m long?",
            "options": ["24 seconds", "32 seconds", "40 seconds", "48 seconds"],
            "correctAnswer": 2,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Quantitative",
            "difficulty": "Easy",
            "explanation": "Speed = 240 / 16 = 15 m/s. Total distance to cross platform = 240 + 360 = 600 m. Time = 600 / 15 = 40 seconds."
        },
        {
            "id": "q-tsdw-02",
            "questionText": "A can finish a work in 18 days and B can do the same work in half the time taken by A (9 days). Working together, what part of the work can they finish in 1 day?",
            "options": ["1/6", "1/9", "2/9", "1/3"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Quantitative",
            "difficulty": "Easy",
            "explanation": "1 day work = 1/18 + 1/9 = (1 + 2)/18 = 3/18 = 1/6."
        },
        {
            "id": "q-tsdw-03",
            "questionText": "A man can row upstream at 8 km/hr and downstream at 14 km/hr. Find the speed of the man in still water and the speed of the stream.",
            "options": ["11 km/hr and 3 km/hr", "10 km/hr and 4 km/hr", "12 km/hr and 2 km/hr", "9 km/hr and 5 km/hr"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Quantitative",
            "difficulty": "Easy",
            "explanation": "Speed in still water = (Downstream + Upstream) / 2 = (14 + 8) / 2 = 11 km/hr. Stream speed = (14 - 8) / 2 = 3 km/hr."
        },
        {
            "id": "q-tsdw-04",
            "questionText": "Two trains running in opposite directions cross a man standing on the platform in 27 seconds and 17 seconds respectively and they cross each other in 23 seconds. The ratio of their speeds is:",
            "options": ["1 : 3", "3 : 2", "3 : 4", "2 : 3"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Quantitative",
            "difficulty": "Medium",
            "explanation": "Using alligation on time: (27 - 23) : (23 - 17) = 4 : 6 => Wait, speed ratio = (23 - 17) : (27 - 23) = 6 : 4 = 3 : 2."
        },
        {
            "id": "q-tsdw-05",
            "questionText": "Pipe A can fill a tank in 12 hours and Pipe B can empty it in 18 hours. If both pipes are opened simultaneously, in how many hours will the tank be full?",
            "options": ["30 hours", "36 hours", "42 hours", "48 hours"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Quantitative",
            "difficulty": "Easy",
            "explanation": "Net part filled in 1 hour = 1/12 - 1/18 = (3 - 2)/36 = 1/36. The tank fills in 36 hours."
        },
        {
            "id": "q-tsdw-06",
            "questionText": "A works twice as fast as B. If both together finish a work in 14 days, in how many days can A alone finish the work?",
            "options": ["21 days", "28 days", "35 days", "42 days"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Quantitative",
            "difficulty": "Medium",
            "explanation": "Efficiency ratio A : B = 2 : 1. Combined efficiency = 3 units/day. Total work = 14 * 3 = 42 units. A alone = 42 / 2 = 21 days."
        },
        {
            "id": "q-tsdw-07",
            "questionText": "A car travelling at 60 km/hr leaves Mangaluru at 8:00 AM. Another car travelling at 80 km/hr leaves the same point at 9:30 AM in the same direction. At what time will the second car overtake the first?",
            "options": ["12:30 PM", "01:00 PM", "02:00 PM", "03:30 PM"],
            "correctAnswer": 2,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Quantitative",
            "difficulty": "Medium",
            "explanation": "In 1.5 hrs, first car travels 60 * 1.5 = 90 km. Relative speed = 80 - 60 = 20 km/hr. Time to catch up = 90 / 20 = 4.5 hours. 9:30 AM + 4.5 hours = 2:00 PM."
        },
        {
            "id": "q-tsdw-08",
            "questionText": "If 12 men or 18 women can reap a field in 14 days, in how many days can 8 men and 16 women reap the same field?",
            "options": ["8 days", "9 days", "10 days", "12 days"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Quantitative",
            "difficulty": "Hard",
            "explanation": "12 Men = 18 Women => 1 Man = 1.5 Women. 8 Men + 16 Women = (8 * 1.5) + 16 = 12 + 16 = 28 Women. 18 Women take 14 days. 28 Women take: (18 * 14) / 28 = 9 days."
        },
        {
            "id": "q-tsdw-09",
            "questionText": "Walking at 3/4 of his normal speed, a student reaches Sahyadri campus 20 minutes late. What is his usual time to reach campus?",
            "options": ["45 minutes", "60 minutes", "75 minutes", "80 minutes"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Quantitative",
            "difficulty": "Easy",
            "explanation": "Time taken = 4/3 of normal time. Extra time = (4/3 - 1) * T = T/3 = 20 min => Usual time T = 60 minutes."
        },
        {
            "id": "q-tsdw-10",
            "questionText": "Three pipes A, B and C can fill a tank in 6 hours. After working at it together for 2 hours, C is closed and A and B can fill the remaining part in 7 hours. The number of hours taken by C alone to fill the tank is:",
            "options": ["10 hours", "12 hours", "14 hours", "16 hours"],
            "correctAnswer": 2,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Quantitative",
            "difficulty": "Hard",
            "explanation": "Work in 2 hrs = 2/6 = 1/3. Remaining = 2/3. (A+B) do 2/3 in 7 hrs => (A+B) do whole in 21/2 hrs. 1/C = 1/6 - 2/21 = (7 - 4)/42 = 3/42 = 1/14. C alone = 14 hours."
        },
        {
            "id": "q-tsdw-11",
            "questionText": "A thief steals a car at 1:30 PM and drives it at 40 km/hr. The theft is discovered at 2:00 PM and the owner sets off in another car at 50 km/hr. When will he overtake the thief?",
            "options": ["03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Quantitative",
            "difficulty": "Easy",
            "explanation": "Distance covered by thief in 30 min = 40 * 0.5 = 20 km. Relative speed = 50 - 40 = 10 km/hr. Time = 20 / 10 = 2 hours. 2:00 PM + 2 hours = 4:00 PM."
        },
        {
            "id": "q-tsdw-12",
            "questionText": "A and B can do a piece of work in 12 days, B and C in 15 days, and C and A in 20 days. How long would A alone take to finish the work?",
            "options": ["20 days", "30 days", "40 days", "60 days"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Quantitative",
            "difficulty": "Medium",
            "explanation": "2(A + B + C) = 1/12 + 1/15 + 1/20 = (5 + 4 + 3)/60 = 12/60 = 1/5. (A + B + C) = 1/10. 1/A = (A + B + C) - (B + C) = 1/10 - 1/15 = (3 - 2)/30 = 1/30. A alone = 30 days."
        },
        {
            "id": "q-tsdw-13",
            "questionText": "A train passes two bridges of lengths 800 m and 400 m in 100 seconds and 60 seconds respectively. The length of the train is:",
            "options": ["150 m", "200 m", "250 m", "300 m"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Quantitative",
            "difficulty": "Medium",
            "explanation": "Speed = (800 - 400) / (100 - 60) = 400 / 40 = 10 m/s. Length of train + 400 = 10 * 60 = 600 m => Length = 600 - 400 = 200 m."
        },
        {
            "id": "q-tsdw-14",
            "questionText": "A man takes 6 hours 30 minutes in walking to a certain place and riding back. He would have gained 2 hours 10 minutes by riding both ways. How long would he take to walk both ways?",
            "options": ["7 hours 40 minutes", "8 hours 40 minutes", "8 hours 20 minutes", "9 hours"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Quantitative",
            "difficulty": "Medium",
            "explanation": "Walk + Ride = 390 min. 2 * Ride = 390 - 130 = 260 min => Ride = 130 min. Walk = 390 - 130 = 260 min. 2 * Walk = 520 min = 8 hours 40 minutes."
        },
        {
            "id": "q-tsdw-15",
            "questionText": "10 men can complete a project in 15 days. If 5 more men join them after 5 days, in how many more days will the remaining project be completed?",
            "options": ["5 days", "6.67 days", "7.5 days", "8 days"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Quantitative",
            "difficulty": "Medium",
            "explanation": "Work left after 5 days = 10 men for 10 days = 100 man-days. With 15 men: 100 / 15 = 20 / 3 = 6.67 days."
        },
        {
            "id": "q-tsdw-16",
            "questionText": "A cistern has a leak which would empty it in 8 hours. A tap is turned on which admits 6 liters a minute into the cistern, and it is now emptied in 12 hours. How many liters does the cistern hold?",
            "options": ["6,480 liters", "7,200 liters", "8,640 liters", "9,000 liters"],
            "correctAnswer": 2,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Quantitative",
            "difficulty": "Hard",
            "explanation": "Inflow in 1 hr = 1/8 - 1/12 = 1/24 of cistern. Tank capacity fills in 24 hrs. Rate = 6 L/min = 360 L/hr. Capacity = 24 * 360 = 8,640 liters."
        },
        {
            "id": "q-tsdw-17",
            "questionText": "Two athletes run around a circular track of length 400 m starting from the same point at speeds of 6 m/s and 10 m/s in the same direction. When will they first meet again at the starting point?",
            "options": ["100 seconds", "200 seconds", "300 seconds", "400 seconds"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Quantitative",
            "difficulty": "Medium",
            "explanation": "Time for A1 to complete 1 round = 400 / 6 = 200/3 s. Time for A2 = 400 / 10 = 40 s. LCM(200/3, 40/1) = LCM(200, 40) / HCF(3, 1) = 200 / 1 = 200 seconds."
        },
        {
            "id": "q-tsdw-18",
            "questionText": "A contract is to be completed in 46 days and 117 men are set to work, each working 8 hours a day. After 33 days, 4/7 of the work is completed. How many additional men may be employed so that the work may be completed in time, each man now working 9 hours a day?",
            "options": ["75 additional men", "81 additional men", "98 additional men", "105 additional men"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Quantitative",
            "difficulty": "Hard",
            "explanation": "Work left = 3/7 in 13 days. (117 * 33 * 8) / (4/7) = (M2 * 13 * 9) / (3/7). Solving yields M2 = 198. Additional men = 198 - 117 = 81 men."
        },
        {
            "id": "q-tsdw-19",
            "questionText": "A boat goes 24 km upstream and 28 km downstream in 6 hours. It goes 30 km upstream and 21 km downstream in 6 hours 30 minutes. What is the speed of the boat in still water?",
            "options": ["8 km/hr", "9 km/hr", "10 km/hr", "12 km/hr"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Quantitative",
            "difficulty": "Hard",
            "explanation": "Let 1/u = x and 1/v = y. 24x + 28y = 6 and 30x + 21y = 6.5. Solving gives x = 1/6 (u=6) and y = 1/14 (v=14). Speed in still water = (14 + 6)/2 = 10 km/hr... wait (24/6 + 28/14 = 4 + 2 = 6). Speed = (14 + 6)/2 = 10 km/hr."
        },
        {
            "id": "q-tsdw-20",
            "questionText": "A can do a piece of work in 20 days. He works at it for 5 days and then B alone finishes the remaining work in 15 days. In how many days can B alone finish the entire work?",
            "options": ["18 days", "20 days", "24 days", "25 days"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0.25,
            "category": "Quantitative",
            "difficulty": "Easy",
            "explanation": "Work done by A in 5 days = 5/20 = 1/4. Work remaining = 3/4. B completes 3/4 in 15 days => B completes whole work in 15 * (4/3) = 20 days."
        }
    ],

    'exam-logical-blood-directions': [
        {
            "id": "log-bd-01",
            "questionText": "A man walks 5 km East, turns right and walks 4 km, then turns left and walks 5 km. In which direction is he now from his starting point?",
            "options": ["South-East", "North-East", "South-West", "North-West"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0,
            "category": "Logical",
            "difficulty": "Easy",
            "explanation": "Net displacement: East = 5 + 5 = 10 km, South = 4 km. Direction from origin is South-East."
        },
        {
            "id": "log-bd-02",
            "questionText": "Pointing to a photograph, a woman says, 'He is the son of the only sister of my father.' How is the person in the photograph related to the woman?",
            "options": ["Brother", "Cousin", "Nephew", "Uncle"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0,
            "category": "Logical",
            "difficulty": "Easy",
            "explanation": "The father's only sister is her paternal aunt. The aunt's son is her Cousin."
        },
        {
            "id": "log-bd-03",
            "questionText": "Rohit walked 25 meters towards South. Then he turned to his left and walked 20 meters. He then turned to his left and walked 25 meters. He again turned to his right and walked 15 meters. At what distance is he from the starting point?",
            "options": ["35 meters", "40 meters", "45 meters", "50 meters"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0,
            "category": "Logical",
            "difficulty": "Easy",
            "explanation": "Vertical: 25 South, then 25 North => Net vertical = 0. Horizontal: 20 East, then 15 East => Net horizontal = 20 + 15 = 35 meters."
        },
        {
            "id": "log-bd-04",
            "questionText": "A is B's brother. C is A's mother. D is C's father. E is B's son. How is D related to E?",
            "options": ["Grandfather", "Great-grandfather", "Great-grandson", "Uncle"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0,
            "category": "Logical",
            "difficulty": "Medium",
            "explanation": "E's parent is B. B's mother is C (grandmother). C's father is D. Therefore D is the Great-grandfather of E."
        },
        {
            "id": "log-bd-05",
            "questionText": "One morning after sunrise, Suresh was standing facing a pole. The shadow of the pole fell exactly to his right. Which direction was he facing?",
            "options": ["East", "West", "North", "South"],
            "correctAnswer": 3,
            "marks": 1,
            "negativeMarks": 0,
            "category": "Logical",
            "difficulty": "Medium",
            "explanation": "In morning, sun is in East, so shadows fall towards West. For the shadow to fall to Suresh's right, his right must be West, which means he is facing South."
        },
        {
            "id": "log-bd-06",
            "questionText": "If 'P $ Q' means P is father of Q; 'P # Q' means P is mother of Q; 'P * Q' means P is sister of Q. In 'A $ B * C # D', how is A related to D?",
            "options": ["Maternal Grandfather", "Paternal Grandfather", "Father", "Uncle"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0,
            "category": "Logical",
            "difficulty": "Hard",
            "explanation": "A is father of B. B is sister of C. So A is father of C. C is mother of D. A is mother's father = Maternal Grandfather."
        },
        {
            "id": "log-bd-07",
            "questionText": "A child is looking for his father. He went 90 meters in the East before turning to his right. He went 20 meters before turning to his right again to look for his father at his uncle's place 30 meters from this point. His father was not there. From here he went 100 meters to the North before meeting his father in a street. How far did the son meet his father from the starting point?",
            "options": ["80 meters", "100 meters", "120 meters", "140 meters"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0,
            "category": "Logical",
            "difficulty": "Hard",
            "explanation": "Net X: 90 East - 30 West = 60 East. Net Y: -20 South + 100 North = 80 North. Distance = sqrt(60^2 + 80^2) = sqrt(3600 + 6400) = 100 meters."
        },
        {
            "id": "log-bd-08",
            "questionText": "Introducing a man to her husband, a woman said, 'His brother's father is the only son of my grandfather.' How is the woman related to this man?",
            "options": ["Mother", "Sister", "Aunt", "Daughter"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0,
            "category": "Logical",
            "difficulty": "Medium",
            "explanation": "Only son of grandfather is her father. Man's brother's father is also the man's father. Since both share the same father, the woman is his Sister."
        },
        {
            "id": "log-bd-09",
            "questionText": "Starting from a point P, Sachin walked 20 meters towards South. He turned left and walked 30 meters. He then turned left and walked 20 meters. He again turned left and walked 40 meters and reached a point Q. How far and in which direction is the point Q from the point P?",
            "options": ["10 meters West", "10 meters East", "20 meters West", "20 meters East"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0,
            "category": "Logical",
            "difficulty": "Easy",
            "explanation": "Vertical: 20 S then 20 N = 0. Horizontal: 30 E then 40 W = 10 West. Q is 10 meters West of P."
        },
        {
            "id": "log-bd-10",
            "questionText": "A family consists of six members P, Q, R, X, Y, Z. Q is the son of R but R is not the mother of Q. P and R are a married couple. Y is the brother of R. X is the daughter of P. Z is the brother of P. Who is the brother-in-law of R?",
            "options": ["Y", "Z", "Q", "P"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0,
            "category": "Logical",
            "difficulty": "Medium",
            "explanation": "P is wife of R. Z is brother of P (wife's brother). Therefore Z is the brother-in-law of R."
        },
        {
            "id": "log-bd-11",
            "questionText": "K is 40 m South-West of L. If M is 40 m South-East of L, then M is in which direction of K?",
            "options": ["East", "West", "North-East", "South"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0,
            "category": "Logical",
            "difficulty": "Easy",
            "explanation": "Both K and M are on the same latitude (y = -40 * sin(45°)). K is West of L, M is East of L. Therefore M is due East of K."
        },
        {
            "id": "log-bd-12",
            "questionText": "Pointing to a lady in the garden, Amar said, 'The sister of my mother is her paternal grandmother.' How is the lady related to Amar?",
            "options": ["Sister", "Niece", "Cousin's daughter", "Aunt"],
            "correctAnswer": 2,
            "marks": 1,
            "negativeMarks": 0,
            "category": "Logical",
            "difficulty": "Hard",
            "explanation": "Amar's mother's sister is Amar's maternal aunt. That aunt is the paternal grandmother of the lady, meaning the lady is the daughter of Amar's cousin."
        },
        {
            "id": "log-bd-13",
            "questionText": "A clock is placed such that at 12:00 noon its minute hand points North-East. In which direction does its hour hand point at 1:30 PM?",
            "options": ["North", "East", "South-East", "South"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0,
            "category": "Logical",
            "difficulty": "Hard",
            "explanation": "At 12:00, normal hand is North; here it points North-East (rotated 45° clockwise). At 1:30 PM, hour hand normally points between 1 and 2 (45° from 12). Rotated 45° clockwise, 45° + 45° = 90° = East."
        },
        {
            "id": "log-bd-14",
            "questionText": "Anil is the father of Bimal, but Bimal is not the son of Anil. How is Bimal related to Anil?",
            "options": ["Daughter", "Grandson", "Nephew", "Uncle"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0,
            "category": "Logical",
            "difficulty": "Easy",
            "explanation": "If Anil is the father and Bimal is Anil's biological child but not a son, Bimal must be his Daughter."
        },
        {
            "id": "log-bd-15",
            "questionText": "Village A is 10 km to the West of Village B. Village C is 10 km to the North of Village B. Village D is 10 km to the East of Village C. What is the direction of Village D with respect to Village A?",
            "options": ["North-East", "North-West", "South-East", "East"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0,
            "category": "Logical",
            "difficulty": "Easy",
            "explanation": "From A to D: +10 East to B, +10 North to C, +10 East to D. Total: 20 East, 10 North = North-East."
        },
        {
            "id": "log-bd-16",
            "questionText": "Looking at a portrait, a man said, 'I have no brother or sister, but that man's father is my father's son.' Whose portrait was it?",
            "options": ["His own", "His son's", "His father's", "His nephew's"],
            "correctAnswer": 1,
            "marks": 1,
            "negativeMarks": 0,
            "category": "Logical",
            "difficulty": "Medium",
            "explanation": "'My father's son' with no siblings is the speaker himself. So 'that man's father is ME'. The portrait is of his Son."
        },
        {
            "id": "log-bd-17",
            "questionText": "Deepa moved a distance of 75 meters towards the North. She then turned to the left and walking for about 25 meters, turned left again and walked 80 meters. Finally, she turned to the right at an angle of 45°. In which direction was she moving finally?",
            "options": ["North-East", "North-West", "South-East", "South-West"],
            "correctAnswer": 3,
            "marks": 1,
            "negativeMarks": 0,
            "category": "Logical",
            "difficulty": "Medium",
            "explanation": "She is heading South. Turning 45° to the right (clockwise) turns her towards South-West."
        },
        {
            "id": "log-bd-18",
            "questionText": "If X is the brother of the son of Y's son, how is X related to Y?",
            "options": ["Son", "Brother", "Grandson", "Cousin"],
            "correctAnswer": 2,
            "marks": 1,
            "negativeMarks": 0,
            "category": "Logical",
            "difficulty": "Easy",
            "explanation": "Y's son's son is Y's grandson. The brother of a grandson is also Y's Grandson."
        },
        {
            "id": "log-bd-19",
            "questionText": "A person walks 1 km North, 1 km East, 1 km South, and 1 km West. What is his net displacement from the origin?",
            "options": ["0 km", "1 km", "2 km", "4 km"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0,
            "category": "Logical",
            "difficulty": "Easy",
            "explanation": "The path traces a closed square perimeter, arriving back at the initial starting coordinates (0, 0)."
        },
        {
            "id": "log-bd-20",
            "questionText": "In a family, there are two fathers, two sons, and two brothers. What is the minimum number of male members needed in this family?",
            "options": ["3", "4", "5", "6"],
            "correctAnswer": 0,
            "marks": 1,
            "negativeMarks": 0,
            "category": "Logical",
            "difficulty": "Easy",
            "explanation": "Wait, grandfather, father, son gives 2 fathers and 2 sons. But with two brothers: two brothers and their father gives 1 father, 2 sons, 2 brothers. With 2 brothers who are both fathers to 2 sons = 4. The classic puzzle is: Grandfather, Father, Son = 2 fathers, 2 sons (3 people). If brothers: two sons of one father are brothers (3 people: Father, Son 1, Son 2 has 1 father, 2 sons, 2 brothers)."
        }
    ]
}

