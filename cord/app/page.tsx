"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const getInitialNodes = () => [
  { id: `init-${Date.now()}-1`, name: "X" },
  { id: `init-${Date.now()}-2`, name: "Y" },
  { id: `init-${Date.now()}-3`, name: "Z" },
];

export default function Home() {
  const [nodes, setNodes] = useState(getInitialNodes());
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [newName, setNewName] = useState("");
  const [traversalDone, setTraversalDone] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false); 

  const startTraversal = () => { setCurrentIndex(0); setTraversalDone(false); };

  const nextStep = () => {
    if (currentIndex === null) return;
    if (currentIndex < nodes.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setTraversalDone(true);
    }
  };

  const resetTraversal = () => {
    setNodes(getInitialNodes());
    setCurrentIndex(null);
    setTraversalDone(false);
  };

  const insertAtHead = () => {
    if (!newName.trim()) return;
    setNodes([{ id: Date.now().toString(), name: newName }, ...nodes]);
    setNewName("");
    setCurrentIndex(null);
    setTraversalDone(false);
  };

  const deleteHead = () => {
    if (nodes.length === 0) return;
    setNodes(nodes.slice(1));
    setCurrentIndex(null);
    setTraversalDone(false);
  };

  const isTraversing = currentIndex !== null;

  const getNodeStyle = (index: number): React.CSSProperties => {
    const isActive = index === currentIndex;

    const base: React.CSSProperties = {
      boxSizing: "border-box",
      width: "90px",
      height: "90px",
      borderRadius: "50%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      position: "relative",
      transition: "all 0.3s ease",
      cursor: "default",
    };

    if (isActive) {
      return {
        ...base,
        border: "2px solid #facc15",
        background: "rgba(255,255,255,0.07)",
        boxShadow: "0 0 20px rgba(255,255,255,0.4)",
        transform: "scale(1.12)",
        color: "white",
      };
    }

    return {
      ...base,
      border: "2px solid #6b7280",
      background: "rgba(255,255,255,0.04)",
      color: isTraversing ? "#9ca3af" : "white",
      transform: isTraversing ? "scale(0.95)" : "scale(1)",
    };
  };

  const nullNodeStyle: React.CSSProperties = {
    boxSizing: "border-box",
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    border: "2px solid #374151",
    background: "transparent",
    color: "#4b5563",
    fontSize: "14px",
  };

  const btnStyle: React.CSSProperties = {
    padding: "8px 14px",
    background: "#1f2937",
    border: "1px solid #4b5563",
    borderRadius: "6px",
    cursor: "pointer",
    color: "white",
    fontSize: "14px",
  };

  const btnDangerStyle: React.CSSProperties = {
    padding: "8px 14px",
    background: "#7f1d1d",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    color: "white",
    fontSize: "14px",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "black",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "24px",
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: 600,
          color: "#d1d5db",
          textAlign: "center",
          marginTop: "24px",
        }}
      >
        The Gossip Chain — An Introduction to Linked Lists
      </h1>

      <p
        style={{
          color: "#6b7280",
          textAlign: "center",
          maxWidth: "600px",
          marginTop: "24px",
          lineHeight: 1.6,
        }}
      >
        X heard something. X told Y. Y told Z. The chain just goes on until
        finally someone kept it to themselves. Let that person be Z for now.
        Nobody knows the full chain — only who they told next.
      </p>

      {traversalDone && (
        <p style={{ marginTop: "16px", color: "#facc15", fontWeight: 600 }}>
          Traversal complete — reached the end of the list!
        </p>
      )}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          marginTop: "32px",
          justifyContent: "center",
        }}
      >
        <button onClick={startTraversal} style={btnStyle}>
          Start Traversal
        </button>
        <button
          onClick={nextStep}
          disabled={traversalDone || currentIndex === null}
          style={{
            ...btnStyle,
            opacity: traversalDone || currentIndex === null ? 0.4 : 1,
            cursor: traversalDone || currentIndex === null ? "not-allowed" : "pointer",
          }}
        >
          Next Step
        </button>
        <button onClick={resetTraversal} style={btnStyle}>
          Reset
        </button>
        <button onClick={deleteHead} style={btnDangerStyle}>
          Delete Head
        </button>
      </div>


      <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
        <input
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Add a New Person"
          style={{
            padding: "8px 12px",
            borderRadius: "6px",
            background: "#1f2937",
            border: "1px solid #4b5563",
            color: "white",
            fontSize: "14px",
          }}
        />
        <button onClick={insertAtHead} style={btnStyle}>
          Insert at Head
        </button>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginTop: "48px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {nodes.map((node, index) => {
          const isActive = index === currentIndex;
          const isDimmed = isTraversing && !isActive;

          return (
            <div
              key={node.id}
              style={{ display: "flex", alignItems: "center", gap: "16px" }}
            >
              <div style={getNodeStyle(index)}>
                <span style={{ fontSize: "15px" }}>{node.name}</span>
                {index === 0 && (
                  <span style={{ fontSize: "10px", color: "#4ade80", marginTop: "4px" }}>
                    HEAD
                  </span>
                )}
                {index === nodes.length - 1 && (
                  <span style={{ fontSize: "10px", color: "#f87171", marginTop: "4px" }}>
                    TAIL
                  </span>
                )}
              </div>


              <ArrowRight
                size={20}
                style={{
                  color: isDimmed ? "#374151" : "#9ca3af",
                  transition: "color 0.3s ease",
                }}
              />
            </div>
          );
        })}

        <div style={nullNodeStyle}>NULL</div>
      </div>

      <div
        style={{
          marginTop: "64px",
          maxWidth: "600px",
          color: "#9ca3af",
          textAlign: "center",
          lineHeight: 1.8,
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <p>Each person only knows who they told next — that's the <b>.next pointer</b>. Going back along the same chain would be impossible.</p>
        <p>Traversal is <b>O(n)</b> because you must go one by one — no shortcuts.</p>
        <p>Inserting at or deleting head is <b>O(1)</b> — just rewire the start.</p>
      </div>

      <Link href="https://github.com/Akanksha-Duvvuri/LL-illustration-CORD">
        <p
          onMouseEnter={() => setLinkHovered(true)}
          onMouseLeave={() => setLinkHovered(false)}
          style={{
            color: linkHovered ? "white" : "cadetblue",
            transition: "color 0.25s ease",
            marginTop: "100px",
          }}
        >
          View the code on Github — https://github.com/Akanksha-Duvvuri/LL-illustration-CORD
        </p>
      </Link>
    </div>
  );
}