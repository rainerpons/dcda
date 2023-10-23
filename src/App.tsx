import { Checkbox, Container, Heading, Stack, Text } from '@chakra-ui/react';
import { cloneDeep } from 'lodash';
import { useMemo, useState } from 'react';

import './App.css';
import { LIST_OF_PHRASES } from './assets/list';

const App = () => {
  const [isInputChecked, setIsInputChecked] = useState<boolean[]>(new Array(LIST_OF_PHRASES.length).fill(false));

  const handleChange = (index: number) => {
    const clonedIsInputChecked = cloneDeep(isInputChecked);
    clonedIsInputChecked[index] = !clonedIsInputChecked[index];
    setIsInputChecked(clonedIsInputChecked);
  };

  const joinedPhrases = useMemo(() => {
    return LIST_OF_PHRASES
      .filter((_, phraseIndex) => isInputChecked[phraseIndex])
      .map(phrase => phrase.text)
      .join(' + ');
  }, [isInputChecked]);

  return (
    <Container>
      {/* Heading */}
      <Heading as="h1" mb="4" textAlign="center">Don't Care + Didn't Ask</Heading>
      <Stack spacing={1} border="1px" borderColor="gray.200" p="6" boxShadow="lg">
        <Heading as="h2" size="md">Craft the perfect message in just a few clicks!</Heading>
        <Text mb="1" textColor="gray.500">
          Select the phrases that resonate with you, and we'll compile them into a personalized message.
        </Text>
        {/* Phrases */}
        {LIST_OF_PHRASES.map(({ id, text }, textIndex) => (
          <Checkbox
            key={`${id}`}
            checked={isInputChecked[textIndex]}
            onChange={() => handleChange(textIndex)}
          >
            {text}
          </Checkbox>
        ))}
        {/* Parsed text */}
        {joinedPhrases.length ? (
          <Stack direction="row" align="center">
            <Text>Result: {joinedPhrases}</Text>
            {/* TODO: Implement copy functionality */}
            {/* <Button size="sm">Copy</Button> */}
          </Stack>
        ) : null}
      </Stack>
    </Container>
  );
};

export default App;
