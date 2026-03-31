"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const getInitialNodes = () => [
  { id: 'initial-1', name: "X" },
  { id: 'initial-2', name: "Y" },
  { id: 'initial-3', name: "Z" },
];

export default function Home() {
  const [nodes, setNodes] = useState(getInitialNodes());
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [newName, setNewName] = useState("");
  const [traversalDone, setTraversalDone] = useState(false);

  const startTraversal = () => {
    setCurrentIndex(0);
    setTraversalDone(false);
  };

  const nextStep = () => {
    if (currentIndex === null) return;
    if (currentIndex < nodes.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // ✅ FIX: signal traversal is complete
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
    setCurrentIndex(null); // ✅ FIX: reset traversal on structural change
    setTraversalDone(false);
  };

  const deleteHead = () => {
    if (nodes.length === 0) return;
    setNodes(nodes.slice(1));
    setCurrentIndex(null); // ✅ FIX: reset traversal on structural change
    setTraversalDone(false);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-6">
      <h1 className="text-4xl font-semibold text-gray-300 text-center mt-6">
        The Gossip Chain — An Introduction to Linked Lists
      </h1>

      <p className="text-gray-500 text-center max-w-2xl mt-6">
        X heard something. X told Y. Y told Z. The chain just goes on until
        finally someone finally kept it to themselves. Let that person be Z for
        now. Nobody knows the full chain — only who they told next.
      </p>

      {/* ✅ FIX: traversal done banner */}
      {traversalDone && (
        <p className="mt-4 text-yellow-400 font-semibold">
          ✅ Traversal complete — reached the end of the list!
        </p>
      )}

      <div className="flex flex-wrap gap-4 mt-8 items-center justify-center">
        <button onClick={startTraversal} className="btn">
          Start Traversal
        </button>
        <button
          onClick={nextStep}
          disabled={traversalDone || currentIndex === null}  // ✅ FIX: disable when done
          className="btn disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Next Step
        </button>
        <button onClick={resetTraversal} className="btn">
          Reset
        </button>
        <button onClick={deleteHead} className="btn-danger">
          Delete Head
        </button>
      </div>

      <div className="flex gap-3 mt-6">
        <input
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Add a New Person"
          className="px-3 py-2 rounded bg-gray-800 border border-gray-600"
        />
        <button onClick={insertAtHead} className="btn">
          Insert at Head
        </button>
      </div>

      <div className="flex items-center gap-6 mt-12 flex-wrap justify-center">
        {nodes.map((node, index) => (
          <div key={node.id} className="flex items-center gap-4">
            <div className={`node ${index === currentIndex ? "active" : ""}`}>
              <p>{node.name}</p>
              {index === 0 && (
                <span className="label text-green-400">HEAD</span>
              )}
              {index === nodes.length - 1 && (
                <span className="label text-red-400">TAIL</span>
              )}
            </div>
            {index !== nodes.length - 1 && (
              <ArrowRight className="text-gray-400" />
            )}
          </div>
        ))}
        <div className="node opacity-50">NULL</div>
      </div>

      <div className="mt-16 max-w-2xl text-gray-400 text-center space-y-3">
        <p>
          Each person only knows who they told next — that's the{" "}
          <b>.next pointer</b>.
        </p>
        <p>
          Traversal is <b>O(n)</b> because you must go one by one — no
          shortcuts.
        </p>
        <p>
          Inserting or deleting at head is <b>O(1)</b> — just rewire the start.
        </p>
      </div>

      <div>
        <Link href="https://github.com/Akanksha-Duvvuri/LL-illustration-CORD">
          <p className="footerp">
            View the code on Github —
            https://github.com/Akanksha-Duvvuri/LL-illustration-CORD
          </p>
        </Link>
      </div>

      <style jsx>{`
        .node {
            box-sizing: border-box; /* Ensures border doesn't mess with sizing */
            border: 2px solid white; 
            width: 90px;            /* Fixed width and height make a perfect circle */
            height: 90px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-radius: 50%;     /* Use 50% for circles */
            text-align: center;
            position: relative;
            transition: all 0.3s ease;
            background: rgba(255, 255, 255, 0.05);
          }

        .node:hover { transform: scale(1.05); }

        .active { 
            border-color: #facc15 !important; /* Tailwind yellow-400 */
            box-shadow: 0 0 15px rgba(250, 204, 21, 0.5);
            transform: scale(1.1); 
          }

        .label { display: block; font-size: 10px; margin-top: 6px; }

        .btn {
          padding: 8px 14px;
          background: #1f2937;
          border: 1px solid #4b5563;
          border-radius: 6px;
          cursor: pointer;
        }
        .btn:hover { background: #374151; }
        .btn-danger {
          padding: 8px 14px;
          background: #7f1d1d;
          border-radius: 6px;
          cursor: pointer;
        }
        .btn-danger:hover { background: #991b1b; }
        .footerp { color: cadetblue; transition: color 0.25s ease; }
        .footerp:hover { color: white; text-decoration: underline; }
      `}</style>
    </div>
  );
}