 import React, { useState, useEffect, useRef, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams, Navigate } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';

// ------------------- 1. Role-Based Dashboard -------------------
const RoleDashboard = ({ role }) => {
  return (
    <div>
      <h2>Dashboard - Role: {role}</h2>
      {role === 'admin' && <p>Admin Controls</p>}
      {role === 'editor' ? <p>Editor Tools</p> : null}
      {role === 'viewer' && <p>Viewer Content</p>}
    </div>
  );
};

// ------------------- 2. To-Do App -------------------
const TodoItem = ({ item, onEdit, onDelete }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(item.text);

  const handleSave = () => {
    onEdit(item.id, text);
    setEditing(false);
  };

  return (
    <li key={item.id}>
      {editing ? (
        <>
          <input value={text} onChange={(e) => setText(e.target.value)} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          {item.text}
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={() => onDelete(item.id)}>Delete</button>
        </>
      )}
    </li>
  );
};

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    setTodos([...todos, { id: Date.now(), text: input }]);
    setInput("");
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, text: newText } : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(item => (
          <TodoItem key={item.id} item={item} onEdit={editTodo} onDelete={deleteTodo} />
        ))}
      </ul>
    </>
  );
};

// ------------------- 3. Dynamic Survey Form -------------------
const surveySchema = [
  { question: 'Your Name', type: 'text', id: 'q1' },
  { question: 'Your Gender', type: 'radio', id: 'q2', options: ['Male', 'Female'] },
  { question: 'Languages Known', type: 'checkbox', id: 'q3', options: ['English', 'Hindi', 'Tamil'] },
];

const SurveyForm = () => {
  const [answers, setAnswers] = useState({});

  const handleChange = (id, value) => {
    setAnswers({ ...answers, [id]: value });
  };

  const handleCheckbox = (id, option) => {
    const prev = answers[id] || [];
    if (prev.includes(option)) {
      setAnswers({ ...answers, [id]: prev.filter(o => o !== option) });
    } else {
      setAnswers({ ...answers, [id]: [...prev, option] });
    }
  };

  const handleSubmit = () => {
    alert(JSON.stringify(answers));
  };

  return (
    <>
      {surveySchema.map(q => (
        <div key={q.id}>
          <label>{q.question}</label><br />
          {q.type === 'text' && <input onChange={(e) => handleChange(q.id, e.target.value)} />}
          {q.type === 'radio' &&
            q.options.map(opt => (
              <label key={opt}>
                <input type="radio" name={q.id} value={opt} onChange={(e) => handleChange(q.id, e.target.value)} />
                {opt}
              </label>
            ))}
          {q.type === 'checkbox' &&
            q.options.map(opt => (
              <label key={opt}>
                <input type="checkbox" onChange={() => handleCheckbox(q.id, opt)} />
                {opt}
              </label>
            ))}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

// ------------------- 4. Registration Form with useRef -------------------
const RegistrationForm = () => {
  const fileRef = useRef();
  const nameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${nameRef.current.value}, File: ${fileRef.current.files[0]?.name}`);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={nameRef} placeholder="Name" />
      <input type="file" ref={fileRef} />
      <button type="submit">Submit</button>
    </form>
  );
};

// ------------------- 5. Profile Page with Fetch & Cleanup -------------------
const Profile = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch('https://jsonplaceholder.typicode.com/users/1', { signal: controller.signal })
      .then(res => res.json())
      .then(setData)
      .catch(err => console.log('Aborted', err));
    return () => controller.abort();
  }, []);

  return data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>;
};

// ------------------- 6. Chat UI -------------------
const ChatUI = () => {
  const [messages, setMessages] = useState(["Welcome!"]);
  const chatEnd = useRef(null);

  useEffect(() => {
    chatEnd.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = () => {
    setMessages([...messages, `Message ${messages.length + 1}`]);
  };

  return (
    <div style={{ height: 150, overflow: 'auto', border: '1px solid gray' }}>
      {messages.map((msg, i) => <div key={i}>{msg}</div>)}
      <div ref={chatEnd} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

// ------------------- 7. Multi-Step Registration -------------------
const Step1 = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  return (
    <>
      <input placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
      <button disabled={!name} onClick={() => navigate('/step2')}>Next</button>
    </>
  );
};

const Step2 = () => {
  return <p>Step 2: Additional Info</p>;
};

// ------------------- 8. Product Details with useParams -------------------
const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (productId === '1') {
      setProduct({ id: 1, name: 'Laptop' });
    } else {
      setProduct(null);
    }
  }, [productId]);

  return product ? <p>{product.name}</p> : <p>Product not found.</p>;
};

// ------------------- 9. Protected Route with AuthContext -------------------
const AuthContext = createContext();

const ProtectedRoute = ({ children }) => {
  const { isAuth } = useContext(AuthContext);
  return isAuth ? children : <Navigate to="/login" />;
};

const Dashboard = () => <h2>Private Dashboard</h2>;
const Login = () => {
  const { setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  return <button onClick={() => { setIsAuth(true); navigate('/dashboard'); }}>Login</button>;
};

// ------------------- 10. Error Boundary Component already imported -------------------

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <ErrorBoundary>
      <AuthContext.Provider value={{ isAuth, setIsAuth }}>
        <Router>
          <Routes>
            <Route path="/" element={
              <>
                <RoleDashboard role="admin" />
                <TodoApp />
                <SurveyForm />
                <RegistrationForm />
                <Profile />
                <ChatUI />
              </>
            } />
            <Route path="/step1" element={<Step1 />} />
            <Route path="/step2" element={<Step2 />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </AuthContext.Provider>
    </ErrorBoundary>
  );
}

export default App;
