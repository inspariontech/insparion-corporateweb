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
  id: string
  icon: LucideIcon
}

export const serviceMeta: ServiceMeta[] = [
  { no: '01', id: 'product-discovery-strategy', icon: Compass },
  { no: '02', id: 'design-ux', icon: PenTool },
  { no: '03', id: 'software-engineering', icon: Code2 },
  { no: '04', id: 'infrastructure-devops-security', icon: ShieldCheck },
  { no: '05', id: 'data-ai', icon: BrainCircuit },
  { no: '06', id: 'operations-business-processes', icon: Workflow },
  { no: '07', id: 'marketplace-ecosystem-management', icon: Network },
  { no: '08', id: 'marketing-growth', icon: TrendingUp },
  { no: '09', id: 'creative-media-communication', icon: Sparkles },
  { no: '10', id: 'business-development-corporate-growth', icon: Handshake },
  { no: '11', id: 'intellectual-property-rights', icon: Scale },
  { no: '12', id: 'end-to-end-product-lifecycle', icon: InfinityIcon },
]
