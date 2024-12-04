import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import LetterPullup from '@/components/ui/letter-pullup';
import fetchBalances from '../../utils/fetchBalances';

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
  const [nachoUSDValue, setNachoUSDValue] = useState<number | null>(null);
  const [kasUSDValue, setKasUSDValue] = useState<number | null>(null);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const fetchAndSetBalances = async () => {
      try {
        const { nachoUSDValue, kasUSDValue } = await fetchBalances();
        setNachoUSDValue(nachoUSDValue);
        setKasUSDValue(kasUSDValue);

        const totalUSDValue = (nachoUSDValue ?? 0) + (kasUSDValue ?? 0);
        const adjustedValue = totalUSDValue - 40000; // Subtract $40,000
        const progressPercentage = Math.max((adjustedValue / 50000) * 100, 0); // Ensure non-negative progress
        setProgress(progressPercentage);
      } catch (error) {
        console.error('Error fetching balances:', error);
      }
    };

    fetchAndSetBalances();
  }, []);

  return (
    <ProgressBarWrapper>
      <LetterPullup
        words="Top 10 Exchange Listing Campaign"
        delay={0.05}
        className="text-4xl md:text-5xl"
      />
      <ProgressBarContainer>
        <Progress progress={progress} />
      </ProgressBarContainer>
      <GoalText>
        Raised: ${(nachoUSDValue ?? 0).toLocaleString()} NACHO / ${(kasUSDValue ?? 0).toLocaleString()} KAS
      </GoalText>
    </ProgressBarWrapper>
  );
};

export default ProgressBar;
