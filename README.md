# AI-Powered Resume Profiler & Career Pathing Engine

A semantic-driven resume analysis tool that replaces legacy keyword matching with deep-learning-based vector embeddings. Built with a high-concurrency **FastAPI** backend and a responsive, interactive **Cyber-Terminal UI**, this engine evaluates candidate profiles against distinct enterprise domain matrices, quantifies skills gap metrics, and charts structural career roadmaps.

---

## 🛠️ System Architecture & Core Stack

[Resume PDF] ──> (PyMuPDF Ingestion) ──> (Regex Skill Isolation)
│
[Matching Engine] <── (Cosine Similarity) <── (Transformer Embedding 384-Dim)

- **Backend Runtime:** Python 3.10+ / FastAPI (Asynchronous structural handling)
- **NLP Pipeline:** HuggingFace `sentence-transformers` (`all-MiniLM-L6-v2`)
- **Data Processing:** `PyMuPDF` (optimized document text extraction)
- **Frontend Interface:** Vanilla JavaScript, TailwindCSS (Dark/Cyberpunk Matrix Theme), Chart.js (Real-time analytics visualization)

---

## 🚀 Strategic Architecture

### 1. Vector Ingestion Pipeline

Instead of relying on fragile keyword matching, the engine parses raw unstructured texts from uploaded PDFs and runs them through a pre-trained Transformer model. This converts the resume into a **384-dimensional dense vector space**, preserving semantic context.

- _Example:_ The engine recognizes that a profile containing `"Bare-metal firmware architecture"` maps directly to the **Embedded Systems Matrix**, even if the literal word `"Embedded"` is absent.

### 2. Tailored Domain Matrices

Profiles are matched against three rigorous, internal baseline target matrices:

- **Embedded Systems:** Focused on low-level interactions (`RTOS`, `I2C`, `SPI`, `PCB Design`, `ESP32`).
- **Linux Systems & Infrastructure:** Evaluated on enterprise architecture tools (`Arch Linux`, `Docker`, `Go`, `Kernel config`).
- **Web Systems Architecture:** Focused on distributed modern stacks (`React`, `Node.js`, `API engineering`).

### 3. Analytics & Gap Quantifier

- **Cosine Similarity Score:** Calculates exact angular alignment between candidate vectors and domain parameters.
- **Dynamic Deficit Matrix:** Isolates vital technical frameworks missing from the candidate's profile relative to the closest matching sector baseline.

---

## 💻 Microservices Setup

### Prerequisites

- Python 3.10 or higher installed on your runtime framework.
- Pip environment manager.

### Installation & Initialization

1. Clone the repository framework:
    ```bash
    git clone [https://github.com/your-repository/ai-resume-profiler.git](https://github.com/your-repository/ai-resume-profiler.git)
    cd ai-resume-profiler
    ```
2. Standardize dependencies:
    ```bash
    pip install -r requirements.txt
    ```
3. Spin up the asynchronous Uvicorn cluster:
    ```bash
    uvicorn main:app --reload --host 127.0.0.1 --port 8000
    ```
4. Launch:
    Open `http://127.0.0.1:8000` inside your browser to access the interface.

---

## 📡 API Layer Specification

### `POST /api/analyze`

Accepts multipart binary form data containing candidate profile specifications.

#### Payload Layout

| Parameter | Type         | Required | Target                        |
| --------- | ------------ | -------- | ----------------------------- |
| `file`    | Binary (PDF) | Yes      | Targeted resume document data |

#### Response Layout (JSON)

```json
{
  "status": "success",
  "identity_matrix": {
    "email": "candidate@domain.com",
    "phone": "+91-XXXXXXXXXX"
  },
  "alignment_metrics": {
    "primary_sector": "Linux Systems & Infrastructure",
    "similarity_index": 0.842,
    "structural_breakdown": {
      "Embedded Systems": 0.412,
      "Linux Systems & Infrastructure": 0.842,
      "Web Systems Architecture": 0.551
    }
  },
  "gap_analysis": {
    "acquired_skills": ["Arch Linux", "Docker", "Git"],
    "deficit_matrix": ["Go", "Kubernetes", "eBPF"]
  }
}
```

---

## 🔒 System Design Considerations

- **Zero-Storage Execution:** Uploaded files are evaluated entirely in volatile memory arrays; no candidate files are stored to persistent disk configurations, matching modern privacy protocols.
- **Thread Isolation:** Large vector operations scale safely without blockages via asynchronous background threads managed directly by the FastAPI loop worker matrix.
