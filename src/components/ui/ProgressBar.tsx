import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import LetterPullup from '@/components/ui/letter-pullup';

const ProgressBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1rem;
  width: 80%;
  max-width: 800px;
  margin: 0;
`;

const ProgressBarContainer = styled(motion.div)`
  width: 100%;
  height: 30px;
  background: linear-gradient(90deg, #b6b6b6, #231f20);
  border-radius: 15px;
  overflow: hidden;
  margin-top: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Progress = styled(motion.div)<{ progress: number }>`
  width: ${(props) => props.progress}%;
  height: 100%;
  background: linear-gradient(90deg, #70c7ba, #49eacb);
  transition: width 0.5s ease-in-out;
  border-radius: 15px 0 0 15px;
`;

const GoalText = styled(motion.div)`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.textPrimary};
  margin-top: 0.5rem;
  text-align: left;
  font-weight: bold;
`;

const ProgressBar = () => {
  const [progress, setProgress] = useState<number | null>(null);
  const [currentAmount, setCurrentAmount] = useState<number>(0);

  useEffect(() => {
    const fetchProgress = async () => {
      const data = { amount: 25000 };
      const progressPercentage = (data.amount / 50000) * 100;
      setProgress(progressPercentage);
      setCurrentAmount(data.amount);
    };

    fetchProgress();
  }, []);

  return (
    <ProgressBarWrapper>
      <LetterPullup
        words="Top 10 Exchange Listing Campaign"
        delay={0.05}
        className="text-4xl md:text-5xl"
      />
      <ProgressBarContainer>
        {progress !== null && (
          <Progress progress={progress} />
        )}
      </ProgressBarContainer>
      <GoalText>
        Raised: ${currentAmount.toLocaleString()} / Goal: $50,000
      </GoalText>
    </ProgressBarWrapper>
  );
};

export default ProgressBar;
