import React, { useRef, useState } from 'react';
import {
  Text,
  Icon,
  Card,
  Tabs,
  Tab,
  InputGroup,
  NonIdealState,
} from '@blueprintjs/core';
import { useRecoilState } from 'recoil';
import { NoSkillsInfo } from '../empty/NoSkillsInfo';
import SectionWrapper from './SectionWrapper';

interface SkillsSectionContentProps {
  sectionRef: React.RefObject<HTMLDivElement>;
  theme: boolean;
}

const languages = [
  {
    name: 'C',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg',
  },
  {
    name: 'C++',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg',
  },
  {
    name: 'C#',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg',
  },
  {
    name: 'Python',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
  },
  {
    name: 'Java',
    icon: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg',
  },
  {
    name: 'SQL',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png',
  },
  {
    name: 'JavaScript',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
  },
  {
    name: 'TypeScript',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
  },
  {
    name: 'HTML',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
  },
  {
    name: 'CSS',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
  },
  {
    name: 'ARM Assembly',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Arm_logo_2017.svg',
  },
  {
    name: 'MIPS Assembly',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/9/95/MIPS_Logo_v2.0_Final_Primary.svg',
  },
  {
    name: 'MATLAB',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png',
  },
  {
    name: 'Bash Scripting',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Bash_Logo_Colored.svg',
  },
  {
    name: 'PowerShell Scripting',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/a/af/PowerShell_Core_6.0_icon.png',
  },
  {
    name: 'Jakarta Server Pages',
    icon: 'https://projects.eclipse.org/sites/default/files/36201228_10.png',
  },
];
const libraries = [
  {
    name: 'React.js',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  },
  {
    name: 'Boost C++ Libraries',
    icon: 'https://www.boost.org/doc/libs/1_84_0/boost.png',
  },
  {
    name: 'OpenSSL',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/OpenSSL_logo.png',
  },
  {
    name: 'NLTK',
    icon: 'https://miro.medium.com/v2/resize:fit:1184/0*zKRz1UgqpOZ4bvuA',
  },
  {
    name: 'pandas',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Pandas_mark.svg',
  },
  {
    name: 'PyTorch',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg',
  },
  {
    name: 'Tensorflow',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg',
  },
  {
    name: 'NumPy',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/NumPy_logo.svg',
  },
  {
    name: 'sci-kit learn',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg',
  },
  {
    name: 'RecoilJS',
    icon: 'https://cdn.worldvectorlogo.com/logos/recoil-js.svg',
  },
];

const frameworks = [
  {
    name: 'Spring Framework',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Spring_Boot.svg',
  },
  {
    name: '.NET Framework',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg',
  },
  {
    name: 'MongoDB',
    icon: 'https://upload.wikimedia.org/wikipedia/en/5/5a/MongoDB_Fores-Green.svg',
  },
  {
    name: 'Node.js',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
  },
  {
    name: 'Django',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg',
  },
  {
    name: 'React Native',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  },
  {
    name: 'CMake',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/1/13/Cmake.svg',
  },
  {
    name: 'Vue.js',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1024px-Vue.js_Logo_2.svg.png?20170919082558',
  },
  {
    name: 'Angular',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
  },
  {
    name: 'CUDA',
    icon: 'https://upload.wikimedia.org/wikipedia/sco/2/21/Nvidia_logo.svg',
  },

  {
    name: 'Microsoft SQL Server',
    icon: 'https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg',
  },
];

export const SkillsSectionContent: React.FC<SkillsSectionContentProps> = (
  props: SkillsSectionContentProps,
) => {
  const [currentTab, setCurrentTab] = useState('Languages');
  const [searchQuery, setSearchQuery] = useState('');
  const handleTabChange = (newTabId: string) => {
    setCurrentTab(newTabId);
  };
  const getSkills = () => {
    switch (currentTab) {
      case 'Languages':
        return languages;
      case 'Libraries':
        return libraries;
      case 'Frameworks':
        return frameworks;
      default:
        return languages;
    }
  };

  const renderSkills = () => {
    const filteredSkills = getSkills().filter((skill) =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    if (filteredSkills.length === 0) {
      return <NoSkillsInfo />;
    }
    return filteredSkills.map((skill, index) => (
      <Card
        key={index}
        interactive={true}
        elevation={2}
        style={{
          margin: '10px',
          padding: '10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '200px',
          height: '200px',
        }}
      >
        <img
          src={skill.icon}
          alt={skill.name}
          style={{
            width: '100px',
            height: '100px',
            objectFit: 'contain',
            marginBottom: '15px',
            marginTop: '10px',
          }}
        />
        <Text>{skill.name}</Text>
      </Card>
    ));
  };
  return (
    <section id="Skills" ref={props.sectionRef} style={SectionWrapper}>
      <h2>Skills</h2>
      <Tabs onChange={handleTabChange}>
        <Tab id="Languages" title="Languages"></Tab>
        <Tab id="Libraries" title="Libraries"></Tab>
        <Tab id="Frameworks" title="Frameworks"></Tab>
        <InputGroup
          placeholder="Search..."
          value={searchQuery}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchQuery(e.target.value)
          }
          style={{ marginLeft: '50px' }}
        />
      </Tabs>
      <br />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '1000px',
        }}
      >
        {renderSkills()}
      </div>
    </section>
  );
};
