import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    
    const chatProps = useMultiChatLogic(
        'c29e8e07-a0b9-4fb8-b798-277872379d62',
        props.user.username,
        props.user.secret
    )

    return (
        <div style={{ height :'100vh' }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
        </div>
    )
}

export default ChatsPage