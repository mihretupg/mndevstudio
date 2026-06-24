import React from 'react'
import SkillBadge from './SkillBadge'

const iconBase = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

const skills = [
  {label: 'JavaScript', icons: [`${iconBase}/javascript/javascript-original.svg`]},
  {label: 'React', icons: [`${iconBase}/react/react-original.svg`]},
  {label: 'Tailwind CSS', icons: [`${iconBase}/tailwindcss/tailwindcss-original.svg`]},
  {label: 'Node.js', icons: [`${iconBase}/nodejs/nodejs-original.svg`]},
  {label: 'PHP', icons: [`${iconBase}/php/php-original.svg`]},
  {label: 'Python', icons: [`${iconBase}/python/python-original.svg`]},
  {label: 'PostgreSQL', icons: [`${iconBase}/postgresql/postgresql-original.svg`]},
  {label: 'Git', icons: [`${iconBase}/git/git-original.svg`]},
  {label: 'GitHub', icons: [`${iconBase}/github/github-original.svg`]},
  {label: 'Jira', icons: [`${iconBase}/jira/jira-original.svg`]},
  {label: 'Confluence', icons: [`${iconBase}/confluence/confluence-original.svg`]},
  {label: 'Notion', icons: [`${iconBase}/notion/notion-original.svg`]},
  {label: 'Slack', icons: [`${iconBase}/slack/slack-original.svg`]},
  {label: 'Trello', icons: [`${iconBase}/trello/trello-original.svg`]}
]

export default function Skills(){
  return (
    <section>
      <h2 className="section-title text-3xl font-semibold text-white">Tech Stack</h2>
      <p className="mt-3 text-gray-300">Core technologies and project management tools Mihretu uses across frontend development, backend support, databases, version control, and team coordination.</p>
      <div className="skills-icon-cloud mt-8">
        <div className="skills-icon-grid">
          {skills.map((skill, index)=> <SkillBadge key={skill.label} skill={skill} index={index} />)}
        </div>
      </div>
    </section>
  )
}
