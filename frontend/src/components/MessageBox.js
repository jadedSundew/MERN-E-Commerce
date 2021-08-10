const MessageBox = (props) => {
	console.log('props children is' + props.children);
	return <div className={`alert show alert-${props.variant || 'info'}`}>{props.children}</div>;
};

export default MessageBox;
