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
    icon: 'data:image/jpeg;base64,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',
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
