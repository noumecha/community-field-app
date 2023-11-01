import styled from "styled-components";

const QuestionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 5%;
`;

function Question() {
    return (
        <QuestionsContainer>
            <h2>Questions</h2>
        </QuestionsContainer>
    );
}

export default Question;