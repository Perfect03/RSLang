import { createFifthSection } from './sections/fifth-section';
import { createFirstSection } from './sections/first-section';
import { createFourthSection } from './sections/fourth-section';
import { createSecondSection } from './sections/second-section';
import { createThirdSection } from './sections/third-section';

export const createMain = () => {
    createFirstSection();
    createSecondSection();
    createThirdSection();
    createFourthSection();
    createFifthSection();
};
