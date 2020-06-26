import React from 'react';
import Button from 'shared/Button';
import Text from 'shared/Text';

class Student extends React.PureComponent {
  componentDidMount() {}
  render() {
    return (
      <>
        <Text text="Hello Student" color="primary" fontSize="xxLarge" />
        <Button value="submit" name="test" />
      </>
    );
  }
}

export default Student;
