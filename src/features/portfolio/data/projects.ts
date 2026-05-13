import type { Project } from '../model';
import { validatePortfolio } from '../validate';
import { educationalGameSoftware } from './projects/educational-game-software';
import { scitentKnowledgeAssessment } from './projects/scitent-knowledge-assessment';
import { manhattanStrategyGroup } from './projects/manhattan-strategy-group';

export const PORTFOLIO: Project[] = [
    educationalGameSoftware,
    scitentKnowledgeAssessment,
    manhattanStrategyGroup,
];

validatePortfolio(PORTFOLIO);
