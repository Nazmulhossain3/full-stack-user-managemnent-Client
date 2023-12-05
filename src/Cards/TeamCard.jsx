/* eslint-disable react/prop-types */
import { Card } from "keep-react";

// eslint-disable-next-line react/prop-types
const TeamCard = ({user}) => {
    return (
        <div>
            <Card
          className="max-w-xs overflow-hidden rounded-md"
          imgSrc={user.avatar}
          imgSize="md">
          <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-50/50">
          
          </Card.Container>
          <Card.Container className="space-y-4 p-6">
            <Card.Title className="flex items-center gap-2 text-body-5 font-medium text-metal-500 md:!text-body-4">
             
              <span>Name : {user.first_name} {user.last_name} </span>
            </Card.Title>
            <Card.Container className="flex items-center justify-between">
              <Card.Title className="flex items-center gap-2 !text-body-5 font-medium text-metal-500">
               
                <span>Domain : {user.domain}</span>
              </Card.Title>
              <Card.Title className="flex items-center gap-2 !text-body-5 font-medium text-metal-500">
                
              </Card.Title>
            </Card.Container>
            <Card.Container className="flex items-center justify-between">
              <Card.Title className="flex items-center gap-2 !text-body-5 font-medium text-metal-500">
              
                <span>Email : {user.email}</span>
              </Card.Title>
              
            </Card.Container>
            
          </Card.Container>
        </Card>
        </div>
    );
};

export default TeamCard;