import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface ITabProps {
  description: string | undefined
}

export default function Tab({ description }: ITabProps) {
  return (
    <Tabs defaultValue="description">
      <TabsList className="w-full">
        <TabsTrigger value="description" className="w-full">
          Sobre o carro
        </TabsTrigger>
        <TabsTrigger value="booking" className="w-full" disabled>
          Período
        </TabsTrigger>
      </TabsList>
      <TabsContent value="description">
        <p className="mt-4 text-sm leading-6 text-light-gray">{description}</p>
      </TabsContent>
      <TabsContent value="booking">
        <p className="mt-4 text-sm leading-6 text-light-gray">{description}</p>
      </TabsContent>
    </Tabs>
  )
}
