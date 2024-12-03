import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 20px;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 1rem;
`;

const Progress = styled.div<{ progress: number }>`
  width: ${(props) => props.progress}%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  transition: width 0.5s ease-in-out;
`;

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Placeholder for API call
    const fetchProgress = async () => {
      // Simulate API call
      const data = { amount: 25000 }; // Placeholder data
      const progressPercentage = (data.amount / 50000) * 100;
      setProgress(progressPercentage);
    };

    fetchProgress();
  }, []);

  return (
    <ProgressBarContainer>
      <Progress progress={progress} />
    </ProgressBarContainer>
  );
};

export default ProgressBar;
