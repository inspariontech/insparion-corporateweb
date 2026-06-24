import {
  Compass,
  PenTool,
  Code2,
  ShieldCheck,
  BrainCircuit,
  Workflow,
  Network,
  TrendingUp,
  Sparkles,
  Handshake,
  Scale,
  Infinity as InfinityIcon,
  type LucideIcon,
} from 'lucide-react'

/** Görsel meta — metinler i18n.tsx içindeki content.services.items ile aynı sırada eşleşir. */
export interface ServiceMeta {
  no: string
  icon: LucideIcon
}

export const serviceMeta: ServiceMeta[] = [
  { no: '01', icon: Compass },
  { no: '02', icon: PenTool },
  { no: '03', icon: Code2 },
  { no: '04', icon: ShieldCheck },
  { no: '05', icon: BrainCircuit },
  { no: '06', icon: Workflow },
  { no: '07', icon: Network },
  { no: '08', icon: TrendingUp },
  { no: '09', icon: Sparkles },
  { no: '10', icon: Handshake },
  { no: '11', icon: Scale },
  { no: '12', icon: InfinityIcon },
]
