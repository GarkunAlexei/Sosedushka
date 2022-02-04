import React from 'react';
import {Image, Typography, Space, Button} from 'antd'

export const UserDetail = () => {
  const{Title, Text} = Typography;
  return (
    <>
    <div>
     <Title level={3}>Валерия Константинова</Title>
     <Image
        width={200}
        src="https://n1s1.starhit.ru/21/83/fb/2183fb3ae57e643d49ba3513112b174f/441x460_0_8514432512988b10187644fd455572ed@478x499_0x0a330c9a_15273442111534066021.jpeg"
      />
    </div>
    <div>
    <Title level={5}>
      О себе
    </Title>
    <Text>
      «Валерия Константинова. Бизнесвумен. Люблю путешествовать по новым странам. Развивают параллельно несколько бизнес-проектов. Имею свою собственную школу по обучению бизнесу».   
    </Text>
      <Button type="danger">Откликнуться</Button>
    </div>
    </>
  );
};
