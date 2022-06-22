import { AdvantagesProps } from './Advantages.props';
import styles from './Advantages.module.css';
import CheckIcon from './check.svg';
import { P } from '../P/P';

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
	return (
		<>
			<div className={styles.advantages}>
				{advantages.map(a => (
					<div className={styles.advantage} key={a._id}>
						<CheckIcon className={styles.icon} />
						<div className={styles.title}>{a.title}</div>
						<hr className={styles.vline}></hr>
						<P size='l' className={styles.description}>
							{a.description}
						</P>
					</div>
				))}
			</div>
		</>
	);
};