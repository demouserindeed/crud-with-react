import React from 'react';

type ErrorProps = {
  fallback: React.ReactNode;
  children: React.ReactNode;
};

type ErrorState = {
  hasError: boolean;
};

class ErrorBoundary extends React.Component<ErrorProps, ErrorState> {
  constructor(props: ErrorProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(_error: Error) {
    return { hasError: true };
  }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log('Error occcured...', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    } else {
      return this.props.children;
    }
  }
}
export default ErrorBoundary;
