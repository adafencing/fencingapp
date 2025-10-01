import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) { super(props); this.state = { hasError: false, error: null }; }
  static getDerivedStateFromError(error) { return { hasError: true, error }; }
  componentDidCatch(error, info) { console.error("App error:", error, info); }
  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 text-sm">
          <h2 className="text-lg font-semibold mb-2">Something went wrong.</h2>
          <pre className="bg-gray-100 p-3 rounded">{String(this.state.error)}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}
