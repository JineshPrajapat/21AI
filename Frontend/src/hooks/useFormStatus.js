import { useState } from 'react';

const useFormStatus = () => {
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState(null);

    const startSubmitting = () => {
        setStatus('submitting');
        setError(null);
    };

    const submitSuccess = () => {
        setStatus('success');
        setError(null);
    };

    const submitError = (errorMessage) => {
        setStatus('error');
        setError(errorMessage);
    };

    const resetFormStatus = () => {
        setStatus('idle');
        setError(null);
    };

    return { status, error, startSubmitting, submitSuccess, submitError, resetFormStatus };
};

export default useFormStatus;
