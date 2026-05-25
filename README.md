# 🤖 AI-Based Pathfinding Visualizer

## Project Overview

An interactive educational tool for visualizing AI search algorithms in real-time. This project demonstrates how different pathfinding algorithms explore a grid and find the shortest path from a start point to an end point while avoiding obstacles.

### 👥 Team Members
- **24-cs-439** - Areeb Khan
- **24-cs-427** - Rooullah  
- **24-cs-442** - Hadi Hassan

---

## 🎯 Objectives

1. **Interactive Learning**: Help students understand AI pathfinding algorithms through visual representation
2. **Algorithm Implementation**: Implement BFS, DFS, Dijkstra, and A* algorithms
3. **Real-world Integration**: Include Leaflet.js for real-world map visualization
4. **User-Friendly Interface**: Create an intuitive UI for algorithm comparison

---

## 🛠️ Technologies Used

- **Frontend**: React.js 18
- **Styling**: Tailwind CSS
- **Maps**: Leaflet.js
- **Language**: JavaScript (ES6+)
- **Build Tool**: Create React App

---

## 📋 Implemented Algorithms

### 1. **Breadth-First Search (BFS)**
- Explores level by level
- Guarantees shortest path in unweighted graphs
- Time Complexity: O(V + E)
- Space Complexity: O(V)

### 2. **Depth-First Search (DFS)**
- Explores as far as possible along each branch
- Useful for topological sorting
- Time Complexity: O(V + E)
- Space Complexity: O(V)

### 3. **Dijkstra's Algorithm**
- Finds shortest path with weighted edges
- Cannot handle negative weights
- Time Complexity: O(V²) or O((V+E)logV)
- Space Complexity: O(V)

### 4. **A* Algorithm**
- Uses heuristics for efficient pathfinding
- Combines actual cost with estimated cost
- Time Complexity: Depends on heuristic
- Space Complexity: O(V)

---

## 🚀 Features

✅ Interactive grid-based visualization
✅ Real-time algorithm animation
✅ Multiple algorithm comparison
✅ Adjustable grid size (10x10 to 50x50)
✅ Custom obstacle placement
✅ Step-by-step visualization
✅ Algorithm information panel
✅ Real-world map integration (Leaflet.js)
✅ Responsive design for all devices

---

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup Instructions

```bash
# Clone the repository
git clone https://github.com/areebkh5618-boop/pathfinding-visualizer.git

# Navigate to the project directory
cd pathfinding-visualizer

# Install dependencies
npm install

# Start the development server
npm start
```

The application will open in your browser at `http://localhost:3000`

---

## 💻 How to Use

1. **Select Algorithm**: Choose from BFS, DFS, Dijkstra, or A*
2. **Adjust Grid Size**: Use the slider to change grid dimensions
3. **Place Elements**:
   - **Left Click**: Place start point (🟢)
   - **Right Click**: Place end point (🔴)
   - **Middle Click**: Place obstacles (⬛)
4. **Visualize**: Click the "▶️ Visualize" button to run the algorithm
5. **Reset**: Click "🔄 Reset" to clear and start over
6. **Compare**: Switch algorithms to see different approaches

---

## 📊 Project Structure

```
pathfinding-visualizer/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Grid.jsx              # Main grid visualization
│   │   ├── Controls.jsx          # Algorithm & grid controls
│   │   ├── MapView.jsx           # Real-world map integration
│   │   └── Legend.jsx            # Color legend
│   ├── algorithms/
│   │   ├── bfs.js                # BFS implementation
│   │   ├── dfs.js                # DFS implementation
│   │   ├── dijkstra.js           # Dijkstra implementation
│   │   └── astar.js              # A* implementation
│   ├── utils/
│   │   ├── gridUtils.js          # Grid helper functions
│   │   └── constants.js          # Project constants
│   ├── styles/
│   │   └── tailwind.css          # Tailwind configuration
│   ├── App.jsx                   # Main app component
│   ├── App.css                   # App styles
│   └── index.js                  # Entry point
├── .gitignore
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## 🎓 Learning Outcomes

- Understanding of fundamental AI search algorithms
- Practical knowledge of algorithm complexity analysis
- Web development with React.js
- Interactive data visualization
- Problem-solving and algorithm implementation
- Teamwork and collaborative development

---

## 🚧 Future Enhancements

- [ ] Add Bidirectional Search
- [ ] Implement Jump Point Search
- [ ] Add maze generation algorithms
- [ ] Support for weighted graphs
- [ ] Algorithm complexity comparison
- [ ] Save and load grid configurations
- [ ] Dark mode toggle
- [ ] Mobile app version

---

## 📝 License

This project is open-source and available under the MIT License.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📧 Contact

For questions or feedback, please contact:
- Areeb Khan: areebkh5618@gmail.com

---

**Happy Pathfinding! 🎉**
