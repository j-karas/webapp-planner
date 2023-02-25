export interface TaskProps {
    id: number
    name: string
    desc: string
    refetch: () => void
}

export interface TaskPost {
    name: string
    desc: string
}

export interface ContainerProps {
    title: string
    taskArray : TaskProps[]
  }

