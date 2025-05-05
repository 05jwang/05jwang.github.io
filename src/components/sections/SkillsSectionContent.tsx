import React, { useState } from 'react';
import {
  Text,
  Icon,
  Card,
  Tabs,
  Tab,
  InputGroup,
  NonIdealState,
} from '@blueprintjs/core';
import { NoSkillsInfo } from '../empty/NoSkillsInfo';
import SectionWrapper from './SectionWrapper';

interface SkillsSectionContentProps {
  theme: boolean;
  isMobile: boolean;
}

const languages = [
  {
    name: 'C',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg',
    link: 'https://www.open-std.org/jtc1/sc22/wg14/',
  },
  {
    name: 'C++',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg',
    link: 'https://isocpp.org/',
  },
  {
    name: 'C#',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg',
    link: 'https://dotnet.microsoft.com/en-us/languages/csharp',
  },
  {
    name: 'Python',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
    link: 'https://www.python.org/',
  },
  {
    name: 'Java',
    icon: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg',
    link: 'https://www.java.com/',
  },
  {
    name: 'SQL',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png',
    link: 'https://www.iso.org/standard/76583.html',
  },
  {
    name: 'JavaScript',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    link: 'https://www.ecma-international.org/publications-and-standards/standards/ecma-262/',
  },
  {
    name: 'TypeScript',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
    link: 'https://www.typescriptlang.org/',
  },
  {
    name: 'HTML',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
    link: 'https://html.spec.whatwg.org/',
  },
  {
    name: 'CSS',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
    link: 'https://www.w3.org/TR/CSS/#css',
  },
  {
    name: 'ARM Assembly',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Arm_logo_2017.svg',
    link: 'https://www.arm.com/architecture',
  },
  {
    name: 'MIPS Assembly',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/9/95/MIPS_Logo_v2.0_Final_Primary.svg',
    link: 'https://www.mips.com/',
  },
  {
    name: 'MATLAB',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png',
    link: 'https://www.mathworks.com/products/matlab.html',
  },
  {
    name: 'Bash Scripting',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Bash_Logo_Colored.svg',
    link: 'https://www.gnu.org/software/bash/',
  },
  {
    name: 'PowerShell Scripting',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/a/af/PowerShell_Core_6.0_icon.png',
    link: 'https://docs.microsoft.com/en-us/powershell/',
  },
];
const libraries = [
  {
    name: 'React.js',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    link: 'https://react.dev/',
  },
  {
    name: 'Boost C++ Libraries',
    icon: 'https://www.boost.org/doc/libs/1_84_0/boost.png',
    link: 'https://www.boost.org/',
  },
  {
    name: 'OpenSSL',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/OpenSSL_logo.png',
    link: 'https://www.openssl.org/',
  },
  {
    name: 'NLTK',
    icon: 'https://miro.medium.com/v2/resize:fit:1184/0*zKRz1UgqpOZ4bvuA',
    link: 'https://www.nltk.org/',
  },
  {
    name: 'pandas',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Pandas_mark.svg',
    link: 'https://pandas.pydata.org/',
  },
  {
    name: 'PyTorch',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg',
    link: 'https://pytorch.org/',
  },
  {
    name: 'Tensorflow',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg',
    link: 'https://www.tensorflow.org/',
  },
  {
    name: 'NumPy',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/NumPy_logo.svg',
    link: 'https://numpy.org/',
  },
  {
    name: 'scikit-learn',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg',
    link: 'https://scikit-learn.org/stable/',
  },
  {
    name: 'Recoil.js',
    icon: 'https://cdn.worldvectorlogo.com/logos/recoil-js.svg',
    link: 'https://recoiljs.org/',
  },
];

const frameworks = [
  {
    name: 'Spring Framework',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Spring_Boot.svg',
    link: 'https://spring.io/projects/spring-framework',
  },
  {
    name: '.NET Framework',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg',
    link: 'https://dotnet.microsoft.com/',
  },
  {
    name: 'MongoDB',
    icon: 'https://upload.wikimedia.org/wikipedia/en/5/5a/MongoDB_Fores-Green.svg',
    link: 'https://www.mongodb.com/',
  },
  {
    name: 'Node.js',
    icon: 'https://nodejs.org/static/logos/jsIconGreen.svg',
    link: 'https://nodejs.org/',
  },
  {
    name: 'Django',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg',
    link: 'https://www.djangoproject.com/',
  },
  {
    name: 'React Native',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    link: 'https://reactnative.dev/',
  },
  {
    name: 'Vue.js',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1024px-Vue.js_Logo_2.svg.png?20170919082558',
    link: 'https://vuejs.org/',
  },
  {
    name: 'Angular',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
    link: 'https://angular.io/',
  },
  {
    name: 'CUDA',
    icon: 'https://upload.wikimedia.org/wikipedia/sco/2/21/Nvidia_logo.svg',
    link: 'https://developer.nvidia.com/cuda-zone',
  },
  {
    name: 'Microsoft SQL Server',
    icon: 'https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg',
    link: 'https://www.microsoft.com/en-us/sql-server',
  },
  {
    name: 'Jakarta Server Pages',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Jakarta_ee_logo_schooner_color_stacked_default.svg/1200px-Jakarta_ee_logo_schooner_color_stacked_default.svg.png',
    link: 'https://projects.eclipse.org/projects/ee4j.jsp',
  },
];

const tools = [
  {
    name: 'Git',
    icon: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg',
    link: 'https://git-scm.com/',
  },
  {
    name: 'Perforce',
    icon: '',
    link: 'https://www.perforce.com/',
  },
  {
    name: 'Docker',
    icon: 'https://www.docker.com/wp-content/uploads/2023/05/symbol_blue-docker-logo.png',
    link: 'https://www.docker.com/',
  },
  {
    name: 'Jenkins',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Jenkins_logo.svg',
    link: 'https://www.jenkins.io/',
  },
  {
    name: 'CMake',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/1/13/Cmake.svg',
    link: 'https://cmake.org/',
  },
  {
    name: 'Jira',
    icon: 'https://www.cdnlogo.com/logos/j/28/jira.svg',
    link: 'https://www.atlassian.com/software/jira',
  },
  {
    name: 'Jupyter Notebook',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg',
    link: 'https://jupyter.org/',
  },
  {
    name: 'RabbitMQ',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/7/71/RabbitMQ_logo.svg',
    link: 'https://www.rabbitmq.com/',
  },
  {
    name: 'mosquitto',
    icon: 'https://mosquitto.org/images/mosquitto-text-side-28.png',
    link: 'https://mosquitto.org/',
  },
  {
    name: 'Apache Tomcat',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Apache_Tomcat_logo.svg',
    link: 'http://tomcat.apache.org/',
  },
  {
    name: 'Gradle',
    icon: 'https://gradle.org/images/gradle-knowledge-graph-logo.png?20170228',
    link: 'https://gradle.org/',
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
      case 'Tools':
        return tools;
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
          width: props.isMobile ? '40%' : '20%',
          aspectRatio: '1/1',
        }}
        onClick={() => window.open(skill.link)}
      >
        <img
          src={skill.icon}
          alt={skill.name}
          style={{
            width: '60%',
            aspectRatio: '1/1',
            objectFit: 'contain',
            marginBottom: '15px',
            marginTop: '10px',
          }}
        />
        <Text
          style={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxWidth: '100%',
          }}
        >
          {skill.name}
        </Text>
      </Card>
    ));
  };
  return (
    <section id="Skills" style={SectionWrapper}>
      <h2>Skills</h2>
      <Tabs onChange={handleTabChange}>
        <Tab id="Languages" title="Languages"></Tab>
        <Tab id="Libraries" title="Libraries"></Tab>
        <Tab id="Frameworks" title="Frameworks"></Tab>
        <Tab id="Tools" title="Tools"></Tab>
        {!props.isMobile && (
          <InputGroup
            placeholder="Search..."
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchQuery(e.target.value)
            }
            style={{ marginLeft: '30px' }}
          />
        )}
      </Tabs>
      {props.isMobile && (
        <div
          style={{
            marginTop: '10px',
            width: 'min(90%, 300px)',
          }}
        >
          <InputGroup
            placeholder="Search..."
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchQuery(e.target.value)
            }
            fill
          />
        </div>
      )}
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
