import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"

const GameCardSkeleton = () => {
    return (
        <Card width='339px' height='311px' borderRadius={8} overflow="hidden">
            <Skeleton height='200px' />
            <CardBody>
                <SkeletonText/>
            </CardBody>
        </Card>
    )
}

export default GameCardSkeleton