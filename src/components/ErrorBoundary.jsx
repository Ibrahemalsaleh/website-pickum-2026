import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="error-boundary">
                    <div className="error-content">
                        <div className="error-icon">
                            <i className="fas fa-exclamation-triangle"></i>
                        </div>
                        <h2>عذراً، حدث خطأ غير متوقع</h2>
                        <p>نعتذر عن هذا الإزعاج. يرجى تحديث الصفحة أو المحاولة مرة أخرى لاحقاً.</p>
                        <button 
                            onClick={() => window.location.reload()}
                            className="btn btn-primary"
                        >
                            <i className="fas fa-refresh"></i>
                            تحديث الصفحة
                        </button>
                    </div>

                    <style jsx>{`
                        .error-boundary {
                            min-height: 100vh;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            background: var(--surface-light);
                            padding: var(--space-xl);
                        }

                        .error-content {
                            text-align: center;
                            max-width: 500px;
                            background: var(--surface-white);
                            padding: var(--space-4xl);
                            border-radius: var(--radius-2xl);
                            box-shadow: var(--shadow-lg);
                        }

                        .error-icon {
                            width: 80px;
                            height: 80px;
                            background: var(--error-color);
                            border-radius: 50%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            margin: 0 auto var(--space-xl);
                            color: var(--text-inverse);
                            font-size: 2rem;
                        }

                        .error-content h2 {
                            font-size: 1.75rem;
                            font-weight: var(--font-weight-bold);
                            color: var(--text-primary);
                            margin-bottom: var(--space-lg);
                        }

                        .error-content p {
                            color: var(--text-secondary);
                            line-height: 1.7;
                            margin-bottom: var(--space-2xl);
                            font-size: 1.05rem;
                        }

                        .btn {
                            display: inline-flex;
                            align-items: center;
                            gap: var(--space-sm);
                        }
                    `}</style>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;