import React, { useState, useMemo } from 'react';
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowLeft, ExternalLink, Github, Star, Users, Search, Code as CodeIcon } from "lucide-react";

// --- Data and Helper Functions (No changes here) ---

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner": return "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300";
    case "Intermediate": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300";
    case "Advanced": return "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300";
    default: return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
  }
};

const projects = [ /* ... Your full list of projects remains here ... */ 
    // Web Development
    { title: "React", author: "Facebook", description: "A JavaScript library for building user interfaces", technologies: ["JavaScript", "JSX", "Virtual DOM"], difficulty: "Advanced", duration: "Ongoing", stars: 227000, contributors: 1500, category: "Web Development", githubUrl: "https://github.com/facebook/react", demoUrl: "https://react.dev/" },
    { title: "Vue.js", author: "Evan You", description: "Progressive JavaScript framework for building user interfaces", technologies: ["JavaScript", "TypeScript", "HTML"], difficulty: "Intermediate", duration: "Ongoing", stars: 207000, contributors: 440, category: "Web Development", githubUrl: "https://github.com/vuejs/vue", demoUrl: "https://vuejs.org/" },
    { title: "Angular", author: "Google", description: "Platform for building mobile and desktop web applications", technologies: ["TypeScript", "RxJS", "HTML"], difficulty: "Advanced", duration: "Ongoing", stars: 95000, contributors: 1700, category: "Web Development", githubUrl: "https://github.com/angular/angular", demoUrl: "https://angular.io/" },
    { title: "Express.js", author: "TJ Holowaychuk", description: "Fast, unopinionated, minimalist web framework for Node.js", technologies: ["Node.js", "JavaScript"], difficulty: "Intermediate", duration: "Ongoing", stars: 65000, contributors: 285, category: "Web Development", githubUrl: "https://github.com/expressjs/express", demoUrl: "https://expressjs.com/" },
    { title: "Next.js", author: "Vercel", description: "The React framework for production", technologies: ["React", "TypeScript", "Node.js"], difficulty: "Advanced", duration: "Ongoing", stars: 125000, contributors: 2400, category: "Web Development", githubUrl: "https://github.com/vercel/next.js", demoUrl: "https://nextjs.org/" },
    { title: "Nuxt.js", author: "Nuxt Team", description: "The Intuitive Vue Framework", technologies: ["Vue.js", "Node.js", "TypeScript"], difficulty: "Intermediate", duration: "Ongoing", stars: 54000, contributors: 420, category: "Web Development", githubUrl: "https://github.com/nuxt/nuxt", demoUrl: "https://nuxt.com/" },
    { title: "Svelte", author: "Rich Harris", description: "Cybernetically enhanced web apps", technologies: ["JavaScript", "TypeScript", "CSS"], difficulty: "Intermediate", duration: "Ongoing", stars: 78000, contributors: 350, category: "Web Development", githubUrl: "https://github.com/sveltejs/svelte", demoUrl: "https://svelte.dev/" },
    { title: "Gatsby", author: "Gatsby Team", description: "Build blazing fast, modern apps and websites with React", technologies: ["React", "GraphQL", "Webpack"], difficulty: "Advanced", duration: "Ongoing", stars: 55000, contributors: 980, category: "Web Development", githubUrl: "https://github.com/gatsbyjs/gatsby", demoUrl: "https://www.gatsbyjs.com/" },
    { title: "Tailwind CSS", author: "Adam Wathan", description: "A utility-first CSS framework for rapidly building custom designs", technologies: ["CSS", "PostCSS", "JavaScript"], difficulty: "Beginner", duration: "Ongoing", stars: 82000, contributors: 260, category: "Web Development", githubUrl: "https://github.com/tailwindlabs/tailwindcss", demoUrl: "https://tailwindcss.com/" },
    { title: "Bootstrap", author: "Twitter", description: "The most popular HTML, CSS, and JavaScript framework", technologies: ["HTML", "CSS", "JavaScript"], difficulty: "Beginner", duration: "Ongoing", stars: 170000, contributors: 1200, category: "Web Development", githubUrl: "https://github.com/twbs/bootstrap", demoUrl: "https://getbootstrap.com/" },

    // Mobile Development
    { title: "React Native", author: "Facebook", description: "A framework for building native apps using React", technologies: ["React", "JavaScript", "Java", "Objective-C"], difficulty: "Advanced", duration: "Ongoing", stars: 118000, contributors: 2300, category: "Mobile Development", githubUrl: "https://github.com/facebook/react-native", demoUrl: "https://reactnative.dev/" },
    { title: "Flutter", author: "Google", description: "UI toolkit for building natively compiled applications", technologies: ["Dart", "C++", "Skia"], difficulty: "Advanced", duration: "Ongoing", stars: 165000, contributors: 1850, category: "Mobile Development", githubUrl: "https://github.com/flutter/flutter", demoUrl: "https://flutter.dev/" },
    { title: "Ionic", author: "Ionic Team", description: "Cross-platform app development with web technologies", technologies: ["TypeScript", "Angular", "React"], difficulty: "Intermediate", duration: "Ongoing", stars: 52000, contributors: 320, category: "Mobile Development", githubUrl: "https://github.com/ionic-team/ionic-framework", demoUrl: "https://ionicframework.com/" },
    { title: "Xamarin", author: "Microsoft", description: "Cross-platform app development with .NET", technologies: ["C#", ".NET", "Xamarin"], difficulty: "Advanced", duration: "Ongoing", stars: 5900, contributors: 180, category: "Mobile Development", githubUrl: "https://github.com/xamarin/Xamarin.Forms", demoUrl: "https://dotnet.microsoft.com/apps/xamarin" },
    { title: "Expo", author: "Expo Team", description: "Platform for universal React applications", technologies: ["React Native", "JavaScript", "TypeScript"], difficulty: "Intermediate", duration: "Ongoing", stars: 34000, contributors: 180, category: "Mobile Development", githubUrl: "https://github.com/expo/expo", demoUrl: "https://expo.dev/" },
    { title: "PhoneGap", author: "Adobe", description: "Mobile app development framework using web technologies", technologies: ["HTML", "CSS", "JavaScript"], difficulty: "Intermediate", duration: "Legacy", stars: 4000, contributors: 120, category: "Mobile Development", githubUrl: "https://github.com/phonegap/phonegap", demoUrl: "https://phonegap.com/" },
    { title: "NativeScript", author: "NativeScript Team", description: "Cross-platform native mobile apps with JavaScript", technologies: ["JavaScript", "TypeScript", "Angular"], difficulty: "Advanced", duration: "Ongoing", stars: 23000, contributors: 280, category: "Mobile Development", githubUrl: "https://github.com/NativeScript/NativeScript", demoUrl: "https://nativescript.org/" },
    { title: "Cordova", author: "Apache", description: "Mobile apps with HTML, CSS & JS", technologies: ["HTML", "CSS", "JavaScript"], difficulty: "Intermediate", duration: "Ongoing", stars: 9600, contributors: 250, category: "Mobile Development", githubUrl: "https://github.com/apache/cordova", demoUrl: "https://cordova.apache.org/" },
    { title: "Capacitor", author: "Ionic Team", description: "Cross-platform native runtime for web apps", technologies: ["TypeScript", "Swift", "Java"], difficulty: "Intermediate", duration: "Ongoing", stars: 12000, contributors: 150, category: "Mobile Development", githubUrl: "https://github.com/ionic-team/capacitor", demoUrl: "https://capacitorjs.com/" },
    { title: "Quasar", author: "Quasar Team", description: "Vue.js based framework for cross-platform apps", technologies: ["Vue.js", "JavaScript", "Cordova"], difficulty: "Intermediate", duration: "Ongoing", stars: 26000, contributors: 240, category: "Mobile Development", githubUrl: "https://github.com/quasarframework/quasar", demoUrl: "https://quasar.dev/" },

    // Machine Learning & AI
    { title: "TensorFlow", author: "Google", description: "Open source machine learning framework", technologies: ["Python", "C++", "CUDA"], difficulty: "Advanced", duration: "Ongoing", stars: 185000, contributors: 4800, category: "Machine Learning", githubUrl: "https://github.com/tensorflow/tensorflow", demoUrl: "https://tensorflow.org/" },
    { title: "PyTorch", author: "Facebook", description: "Tensors and dynamic neural networks in Python", technologies: ["Python", "C++", "CUDA"], difficulty: "Advanced", duration: "Ongoing", stars: 83000, contributors: 4600, category: "Machine Learning", githubUrl: "https://github.com/pytorch/pytorch", demoUrl: "https://pytorch.org/" },
    { title: "Scikit-learn", author: "Scikit-learn Team", description: "Machine learning library for Python", technologies: ["Python", "NumPy", "SciPy"], difficulty: "Intermediate", duration: "Ongoing", stars: 59000, contributors: 2900, category: "Machine Learning", githubUrl: "https://github.com/scikit-learn/scikit-learn", demoUrl: "https://scikit-learn.org/" },
    { title: "Keras", author: "François Chollet", description: "Deep learning API written in Python", technologies: ["Python", "TensorFlow", "Theano"], difficulty: "Intermediate", duration: "Ongoing", stars: 61000, contributors: 1200, category: "Machine Learning", githubUrl: "https://github.com/keras-team/keras", demoUrl: "https://keras.io/" },
    { title: "OpenCV", author: "OpenCV Team", description: "Computer vision and machine learning software library", technologies: ["C++", "Python", "Java"], difficulty: "Advanced", duration: "Ongoing", stars: 78000, contributors: 1850, category: "Machine Learning", githubUrl: "https://github.com/opencv/opencv", demoUrl: "https://opencv.org/" },
    { title: "Pandas", author: "Wes McKinney", description: "Data manipulation and analysis library", technologies: ["Python", "Cython", "NumPy"], difficulty: "Intermediate", duration: "Ongoing", stars: 43000, contributors: 3100, category: "Machine Learning", githubUrl: "https://github.com/pandas-dev/pandas", demoUrl: "https://pandas.pydata.org/" },
    { title: "NumPy", author: "NumPy Team", description: "Fundamental package for scientific computing with Python", technologies: ["Python", "C", "Fortran"], difficulty: "Intermediate", duration: "Ongoing", stars: 27000, contributors: 1500, category: "Machine Learning", githubUrl: "https://github.com/numpy/numpy", demoUrl: "https://numpy.org/" },
    { title: "Matplotlib", author: "Matplotlib Team", description: "Python plotting library", technologies: ["Python", "C++"], difficulty: "Intermediate", duration: "Ongoing", stars: 20000, contributors: 1800, category: "Machine Learning", githubUrl: "https://github.com/matplotlib/matplotlib", demoUrl: "https://matplotlib.org/" },
    { title: "Jupyter", author: "Project Jupyter", description: "Interactive computing across dozens of programming languages", technologies: ["Python", "JavaScript", "TypeScript"], difficulty: "Beginner", duration: "Ongoing", stars: 11500, contributors: 680, category: "Machine Learning", githubUrl: "https://github.com/jupyter/notebook", demoUrl: "https://jupyter.org/" },
    { title: "Hugging Face Transformers", author: "Hugging Face", description: "State-of-the-art Machine Learning for JAX, PyTorch and TensorFlow", technologies: ["Python", "PyTorch", "TensorFlow"], difficulty: "Advanced", duration: "Ongoing", stars: 133000, contributors: 2800, category: "Machine Learning", githubUrl: "https://github.com/huggingface/transformers", demoUrl: "https://huggingface.co/" },

    // DevOps & Cloud
    { title: "Docker", author: "Docker Inc", description: "Platform for developing, shipping, and running applications", technologies: ["Go", "Linux", "Containers"], difficulty: "Advanced", duration: "Ongoing", stars: 68000, contributors: 4200, category: "DevOps", githubUrl: "https://github.com/docker/docker-ce", demoUrl: "https://docker.com/" },
    { title: "Kubernetes", author: "Google", description: "Container orchestration system for automating deployment", technologies: ["Go", "Docker", "YAML"], difficulty: "Advanced", duration: "Ongoing", stars: 110000, contributors: 6800, category: "DevOps", githubUrl: "https://github.com/kubernetes/kubernetes", demoUrl: "https://kubernetes.io/" },
    { title: "Terraform", author: "HashiCorp", description: "Infrastructure as code software tool", technologies: ["Go", "HCL"], difficulty: "Advanced", duration: "Ongoing", stars: 42000, contributors: 1900, category: "DevOps", githubUrl: "https://github.com/hashicorp/terraform", demoUrl: "https://terraform.io/" },
    { title: "Jenkins", author: "Jenkins Community", description: "Automation server for building, testing, and deploying", technologies: ["Java", "Groovy"], difficulty: "Advanced", duration: "Ongoing", stars: 23000, contributors: 2300, category: "DevOps", githubUrl: "https://github.com/jenkinsci/jenkins", demoUrl: "https://jenkins.io/" },
    { title: "Ansible", author: "Red Hat", description: "IT automation platform that makes apps and systems easier to deploy", technologies: ["Python", "YAML"], difficulty: "Intermediate", duration: "Ongoing", stars: 62000, contributors: 5400, category: "DevOps", githubUrl: "https://github.com/ansible/ansible", demoUrl: "https://ansible.com/" },
    { title: "GitLab", author: "GitLab Inc", description: "DevOps platform for the entire software development lifecycle", technologies: ["Ruby", "Go", "Vue.js"], difficulty: "Advanced", duration: "Ongoing", stars: 24000, contributors: 3800, category: "DevOps", githubUrl: "https://github.com/gitlabhq/gitlabhq", demoUrl: "https://gitlab.com/" },
    { title: "Prometheus", author: "Prometheus Team", description: "Monitoring system and time series database", technologies: ["Go", "PromQL"], difficulty: "Advanced", duration: "Ongoing", stars: 55000, contributors: 1100, category: "DevOps", githubUrl: "https://github.com/prometheus/prometheus", demoUrl: "https://prometheus.io/" },
    { title: "Grafana", author: "Grafana Labs", description: "Open source analytics and monitoring solution", technologies: ["TypeScript", "Go", "React"], difficulty: "Intermediate", duration: "Ongoing", stars: 63000, contributors: 2100, category: "DevOps", githubUrl: "https://github.com/grafana/grafana", demoUrl: "https://grafana.com/" },
    { title: "Vagrant", author: "HashiCorp", description: "Tool for building and managing virtual machine environments", technologies: ["Ruby", "Shell"], difficulty: "Intermediate", duration: "Ongoing", stars: 26000, contributors: 890, category: "DevOps", githubUrl: "https://github.com/hashicorp/vagrant", demoUrl: "https://vagrantup.com/" },
    { title: "Helm", author: "Helm Community", description: "Package manager for Kubernetes", technologies: ["Go", "YAML"], difficulty: "Advanced", duration: "Ongoing", stars: 27000, contributors: 860, category: "DevOps", githubUrl: "https://github.com/helm/helm", demoUrl: "https://helm.sh/" },

    // Data Science
    { title: "Apache Spark", author: "Apache", description: "Unified analytics engine for large-scale data processing", technologies: ["Scala", "Python", "Java"], difficulty: "Advanced", duration: "Ongoing", stars: 39000, contributors: 3000, category: "Data Science", githubUrl: "https://github.com/apache/spark", demoUrl: "https://spark.apache.org/" },
    { title: "Apache Kafka", author: "Apache", description: "Distributed streaming platform", technologies: ["Java", "Scala"], difficulty: "Advanced", duration: "Ongoing", stars: 28000, contributors: 1800, category: "Data Science", githubUrl: "https://github.com/apache/kafka", demoUrl: "https://kafka.apache.org/" },
    { title: "Elasticsearch", author: "Elastic", description: "Distributed, RESTful search and analytics engine", technologies: ["Java", "Lucene"], difficulty: "Advanced", duration: "Ongoing", stars: 69000, contributors: 1900, category: "Data Science", githubUrl: "https://github.com/elastic/elasticsearch", demoUrl: "https://elastic.co/" },
    { title: "Apache Airflow", author: "Apache", description: "Platform to programmatically author, schedule and monitor workflows", technologies: ["Python", "SQL"], difficulty: "Advanced", duration: "Ongoing", stars: 36000, contributors: 3200, category: "Data Science", githubUrl: "https://github.com/apache/airflow", demoUrl: "https://airflow.apache.org/" },
    { title: "Plotly", author: "Plotly", description: "Interactive graphing library for Python", technologies: ["Python", "JavaScript", "R"], difficulty: "Intermediate", duration: "Ongoing", stars: 16000, contributors: 280, category: "Data Science", githubUrl: "https://github.com/plotly/plotly.py", demoUrl: "https://plotly.com/" },
    { title: "D3.js", author: "Mike Bostock", description: "Data-driven documents for dynamic, interactive data visualizations", technologies: ["JavaScript", "SVG", "CSS"], difficulty: "Advanced", duration: "Ongoing", stars: 108000, contributors: 180, category: "Data Science", githubUrl: "https://github.com/d3/d3", demoUrl: "https://d3js.org/" },
    { title: "R", author: "R Core Team", description: "Programming language for statistical computing and graphics", technologies: ["R", "C", "Fortran"], difficulty: "Intermediate", duration: "Ongoing", stars: 4200, contributors: 85, category: "Data Science", githubUrl: "https://github.com/wch/r-source", demoUrl: "https://r-project.org/" },
    { title: "Julia", author: "Julia Team", description: "High-performance programming language for technical computing", technologies: ["Julia", "C", "LLVM"], difficulty: "Advanced", duration: "Ongoing", stars: 45000, contributors: 1400, category: "Data Science", githubUrl: "https://github.com/JuliaLang/julia", demoUrl: "https://julialang.org/" },
    { title: "Apache Superset", author: "Apache", description: "Modern data exploration and visualization platform", technologies: ["Python", "React", "TypeScript"], difficulty: "Intermediate", duration: "Ongoing", stars: 62000, contributors: 2800, category: "Data Science", githubUrl: "https://github.com/apache/superset", demoUrl: "https://superset.apache.org/" },
    { title: "MLflow", author: "Databricks", description: "Platform for the machine learning lifecycle", technologies: ["Python", "Java", "R"], difficulty: "Intermediate", duration: "Ongoing", stars: 18000, contributors: 710, category: "Data Science", githubUrl: "https://github.com/mlflow/mlflow", demoUrl: "https://mlflow.org/" },

    // Game Development
    { title: "Unity", author: "Unity Technologies", description: "Cross-platform game engine", technologies: ["C#", "UnityScript", "Boo"], difficulty: "Advanced", duration: "Ongoing", stars: 0, contributors: 0, category: "Game Development", githubUrl: "https://github.com/Unity-Technologies", demoUrl: "https://unity.com/" },
    { title: "Unreal Engine", author: "Epic Games", description: "3D computer graphics game engine", technologies: ["C++", "Blueprints"], difficulty: "Advanced", duration: "Ongoing", stars: 12000, contributors: 850, category: "Game Development", githubUrl: "https://github.com/EpicGames/UnrealEngine", demoUrl: "https://unrealengine.com/" },
    { title: "Godot", author: "Godot Team", description: "Multi-platform 2D and 3D game engine", technologies: ["GDScript", "C#", "C++"], difficulty: "Intermediate", duration: "Ongoing", stars: 90000, contributors: 2400, category: "Game Development", githubUrl: "https://github.com/godotengine/godot", demoUrl: "https://godotengine.org/" },
    { title: "Phaser", author: "Photon Storm", description: "2D game framework for making HTML5 games", technologies: ["JavaScript", "TypeScript"], difficulty: "Intermediate", duration: "Ongoing", stars: 37000, contributors: 380, category: "Game Development", githubUrl: "https://github.com/photonstorm/phaser", demoUrl: "https://phaser.io/" },
    { title: "LibGDX", author: "LibGDX Team", description: "Cross-platform Java game development framework", technologies: ["Java", "C++"], difficulty: "Advanced", duration: "Ongoing", stars: 23000, contributors: 680, category: "Game Development", githubUrl: "https://github.com/libgdx/libgdx", demoUrl: "https://libgdx.com/" },
    { title: "Cocos2d", author: "Cocos2d Team", description: "Framework for building 2D games and interactive applications", technologies: ["C++", "JavaScript", "Lua"], difficulty: "Advanced", duration: "Ongoing", stars: 18000, contributors: 1200, category: "Game Development", githubUrl: "https://github.com/cocos2d/cocos2d-x", demoUrl: "https://cocos2d-x.org/" },
    { title: "Love2D", author: "Love2D Team", description: "2D game engine for Lua", technologies: ["Lua", "C++"], difficulty: "Intermediate", duration: "Ongoing", stars: 4800, contributors: 180, category: "Game Development", githubUrl: "https://github.com/love2d/love", demoUrl: "https://love2d.org/" },
    { title: "MonoGame", author: "MonoGame Team", description: "Cross platform .NET game framework", technologies: ["C#", ".NET"], difficulty: "Advanced", duration: "Ongoing", stars: 11000, contributors: 480, category: "Game Development", githubUrl: "https://github.com/MonoGame/MonoGame", demoUrl: "https://monogame.net/" },
    { title: "Pygame", author: "Pygame Team", description: "Cross-platform set of Python modules for writing video games", technologies: ["Python", "C"], difficulty: "Beginner", duration: "Ongoing", stars: 7200, contributors: 280, category: "Game Development", githubUrl: "https://github.com/pygame/pygame", demoUrl: "https://pygame.org/" },
    { title: "Three.js", author: "Mr.doob", description: "JavaScript 3D library", technologies: ["JavaScript", "WebGL"], difficulty: "Advanced", duration: "Ongoing", stars: 102000, contributors: 2100, category: "Game Development", githubUrl: "https://github.com/mrdoob/three.js", demoUrl: "https://threejs.org/" },

    // Blockchain & Crypto
    { title: "Bitcoin", author: "Satoshi Nakamoto", description: "Peer-to-peer electronic cash system", technologies: ["C++", "Cryptography"], difficulty: "Advanced", duration: "Ongoing", stars: 78000, contributors: 1100, category: "Blockchain", githubUrl: "https://github.com/bitcoin/bitcoin", demoUrl: "https://bitcoin.org/" },
    { title: "Ethereum", author: "Vitalik Buterin", description: "Decentralized platform for smart contracts", technologies: ["Go", "Solidity"], difficulty: "Advanced", duration: "Ongoing", stars: 47000, contributors: 800, category: "Blockchain", githubUrl: "https://github.com/ethereum/go-ethereum", demoUrl: "https://ethereum.org/" },
    { title: "Solidity", author: "Ethereum", description: "Programming language for writing smart contracts", technologies: ["Solidity", "C++"], difficulty: "Advanced", duration: "Ongoing", stars: 23000, contributors: 750, category: "Blockchain", githubUrl: "https://github.com/ethereum/solidity", demoUrl: "https://soliditylang.org/" },
    { title: "Web3.js", author: "Ethereum Foundation", description: "Ethereum JavaScript API", technologies: ["JavaScript", "TypeScript"], difficulty: "Intermediate", duration: "Ongoing", stars: 19000, contributors: 350, category: "Blockchain", githubUrl: "https://github.com/web3/web3.js", demoUrl: "https://web3js.org/" },
    { title: "Hardhat", author: "Nomic Foundation", description: "Ethereum development environment", technologies: ["TypeScript", "Solidity"], difficulty: "Intermediate", duration: "Ongoing", stars: 7100, contributors: 180, category: "Blockchain", githubUrl: "https://github.com/NomicFoundation/hardhat", demoUrl: "https://hardhat.org/" },
    { title: "OpenZeppelin", author: "OpenZeppelin", description: "Library for secure smart contract development", technologies: ["Solidity", "JavaScript"], difficulty: "Intermediate", duration: "Ongoing", stars: 25000, contributors: 450, category: "Blockchain", githubUrl: "https://github.com/OpenZeppelin/openzeppelin-contracts", demoUrl: "https://openzeppelin.com/" },
    { title: "Truffle", author: "Truffle Suite", description: "Development framework for Ethereum", technologies: ["JavaScript", "Solidity"], difficulty: "Intermediate", duration: "Ongoing", stars: 14000, contributors: 280, category: "Blockchain", githubUrl: "https://github.com/trufflesuite/truffle", demoUrl: "https://trufflesuite.com/" },
    { title: "Ganache", author: "Truffle Suite", description: "Personal blockchain for Ethereum development", technologies: ["JavaScript", "Ethereum"], difficulty: "Beginner", duration: "Ongoing", stars: 4700, contributors: 95, category: "Blockchain", githubUrl: "https://github.com/trufflesuite/ganache", demoUrl: "https://trufflesuite.com/ganache/" },
    { title: "MetaMask", author: "ConsenSys", description: "Ethereum wallet browser extension", technologies: ["JavaScript", "React"], difficulty: "Advanced", duration: "Ongoing", stars: 12000, contributors: 280, category: "Blockchain", githubUrl: "https://github.com/MetaMask/metamask-extension", demoUrl: "https://metamask.io/" },
    { title: "IPFS", author: "Protocol Labs", description: "Distributed system for storing and accessing files", technologies: ["Go", "JavaScript"], difficulty: "Advanced", duration: "Ongoing", stars: 23000, contributors: 390, category: "Blockchain", githubUrl: "https://github.com/ipfs/kubo", demoUrl: "https://ipfs.tech/" },

    // IoT & Hardware
    { title: "Arduino", author: "Arduino Team", description: "Open-source electronics platform", technologies: ["C++", "Arduino"], difficulty: "Beginner", duration: "Ongoing", stars: 6800, contributors: 280, category: "IoT", githubUrl: "https://github.com/arduino/Arduino", demoUrl: "https://arduino.cc/" },
    { title: "Raspberry Pi OS", author: "Raspberry Pi Foundation", description: "Operating system for Raspberry Pi", technologies: ["Linux", "Python", "C"], difficulty: "Intermediate", duration: "Ongoing", stars: 2600, contributors: 45, category: "IoT", githubUrl: "https://github.com/RPi-Distro/pi-gen", demoUrl: "https://raspberrypi.org/" },
    { title: "ESP-IDF", author: "Espressif", description: "Development framework for ESP32", technologies: ["C", "C++", "FreeRTOS"], difficulty: "Advanced", duration: "Ongoing", stars: 13000, contributors: 850, category: "IoT", githubUrl: "https://github.com/espressif/esp-idf", demoUrl: "https://docs.espressif.com/" },
    { title: "PlatformIO", author: "PlatformIO", description: "Professional collaborative platform for embedded development", technologies: ["Python", "C++"], difficulty: "Intermediate", duration: "Ongoing", stars: 7800, contributors: 180, category: "IoT", githubUrl: "https://github.com/platformio/platformio-core", demoUrl: "https://platformio.org/" },
    { title: "Node-RED", author: "Node-RED Team", description: "Flow-based development tool for visual programming", technologies: ["Node.js", "JavaScript"], difficulty: "Beginner", duration: "Ongoing", stars: 19000, contributors: 380, category: "IoT", githubUrl: "https://github.com/node-red/node-red", demoUrl: "https://nodered.org/" },
    { title: "Home Assistant", author: "Home Assistant", description: "Open source home automation platform", technologies: ["Python", "JavaScript"], difficulty: "Advanced", duration: "Ongoing", stars: 72000, contributors: 3200, category: "IoT", githubUrl: "https://github.com/home-assistant/core", demoUrl: "https://home-assistant.io/" },
    { title: "OpenHAB", author: "openHAB", description: "Vendor and technology agnostic open source automation software", technologies: ["Java", "JavaScript"], difficulty: "Advanced", duration: "Ongoing", stars: 4300, contributors: 680, category: "IoT", githubUrl: "https://github.com/openhab/openhab-core", demoUrl: "https://openhab.org/" },
    { title: "Tasmota", author: "Tasmota", description: "Alternative firmware for ESP8266/ESP32 based devices", technologies: ["C++", "Arduino"], difficulty: "Intermediate", duration: "Ongoing", stars: 22000, contributors: 520, category: "IoT", githubUrl: "https://github.com/arendst/Tasmota", demoUrl: "https://tasmota.github.io/" },
    { title: "ESPHome", author: "ESPHome", description: "System to control your ESP8266/ESP32 by simple configuration files", technologies: ["C++", "Python", "YAML"], difficulty: "Intermediate", duration: "Ongoing", stars: 8300, contributors: 680, category: "IoT", githubUrl: "https://github.com/esphome/esphome", demoUrl: "https://esphome.io/" },
    { title: "Blynk", author: "Blynk", description: "Platform for IoT projects", technologies: ["C++", "Java", "JavaScript"], difficulty: "Beginner", duration: "Ongoing", stars: 3700, contributors: 85, category: "IoT", githubUrl: "https://github.com/blynkkk/blynk-library", demoUrl: "https://blynk.io/" },
];

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get all unique categories for the quick links, memoized for performance
  const allCategories = useMemo(() => {
    return ["All", ...Array.from(new Set(projects.map(p => p.category)))];
  }, []);

  // Combined filtering logic
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesCategory = !selectedCategory || selectedCategory === "All" || project.category === selectedCategory;
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800/50 border-b-2 border-orange-500 shadow-sm sticky top-0 z-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <CodeIcon className="w-10 h-10 text-orange-500" />
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">Open Source Projects</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">Explore and contribute to real-world projects.</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" asChild className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
            <Link to="/"><ArrowLeft className="w-4 h-4 mr-2" />Back to Home</Link>
          </Button>
        </div>
      </header>
      
      {/* Main Content */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* --- Category Filters (Quick Links) --- */}
          <aside className="md:col-span-1 h-fit md:sticky top-28">
            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Categories</h3>
                <div className="space-y-2">
                    {allCategories.map(category => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`w-full text-left px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                                selectedCategory === category
                                ? 'bg-orange-500 text-white'
                                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
          </aside>

          {/* --- Projects Grid --- */}
          <main className="md:col-span-3">
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search projects by title, author, or technology..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-full text-base focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Showing {filteredProjects.length} of {projects.length} projects in <span className='font-semibold text-orange-500'>{selectedCategory || 'All'}</span>.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <Card key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <div className="mb-3">
                      <h2 className="font-bold text-lg text-gray-900 dark:text-gray-100 leading-tight">{project.title}</h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400">by {project.author}</p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow line-clamp-3">{project.description}</p>
                    
                    <div className="mb-4">
                        <Badge className={getDifficultyColor(project.difficulty)}>{project.difficulty}</Badge>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.slice(0, 3).map((tech, i) => <Badge key={i} variant="outline" className="text-xs">{tech}</Badge>)}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 py-3 border-y border-gray-100 dark:border-gray-700">
                        <div className="flex items-center gap-1.5"><Star className="w-4 h-4 text-yellow-500" /> {project.stars.toLocaleString()}</div>
                        <div className="flex items-center gap-1.5"><Users className="w-4 h-4" /> {project.contributors.toLocaleString()}</div>
                    </div>

                    <div className="mt-4 flex items-center gap-2">
                        <Button asChild size="sm" className="w-full bg-gray-800 dark:bg-gray-200 text-white dark:text-black hover:bg-gray-700 dark:hover:bg-gray-300 rounded-full font-semibold">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"><Github className="w-4 h-4 mr-2" /> GitHub</a>
                        </Button>
                        <Button asChild size="sm" className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold">
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"><ExternalLink className="w-4 h-4 mr-2" /> Live Demo</a>
                        </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Projects;