import useContent from '@/hooks/useContent'
import { useEffect, useState } from 'react'
import { Skills } from '../../types'

const {
  Git,
  GitHub,
  ...initialTechnologiesToInclude
}: { [key in Skills]?: boolean } = Object.fromEntries(
  Object.values(Skills).map(skill => [skill, false])
)

const useProjects = () => {
  const { projects } = useContent()

  const [technologiesToInclude, setTechnologiesToInclude] = useState<{
    [key in Skills]?: boolean
  }>(initialTechnologiesToInclude)

  const [filteredProjects, setFilteredProjects] = useState(projects)

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setTechnologiesToInclude(currentFilter => ({
      ...currentFilter,
      [name]: checked
    }))
  }

  useEffect(() => {
    const filteredProjects = projects.filter(
      project =>
        Object.values(technologiesToInclude).every(val => val === false) ||
        project.skills.some(
          skill => technologiesToInclude[skill.type as Skills]
        )
    )
    setFilteredProjects(currentProjects => filteredProjects)
  }, [technologiesToInclude, projects])

  return {
    technologiesToInclude,
    projects: filteredProjects,
    handleFilter
  }
}

export default useProjects
