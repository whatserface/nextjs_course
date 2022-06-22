import styles from './Textarea.module.css';
import cn from 'classnames';
import { TextareaProps } from './Textarea.props';

export const Textarea = ({ className, ...props }: TextareaProps): JSX.Element => {
	return (
		<textarea className={cn(className, styles.textarea)} {...props} />
	);
};