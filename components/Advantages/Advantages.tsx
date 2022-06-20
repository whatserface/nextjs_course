import { AdvantagesProps } from './Advantages.props';
import styles from './Advantages.module.css';
import cn from 'classnames';
import AdvantageIcon from './advantage.svg';
import { P } from '../P/P';
import { Htag } from '../Htag/Htag';
import { Tag } from '../Tag/Tag';

export const Advantages = ({ advantages, metaDescription, tags }: AdvantagesProps): JSX.Element => {
	return (
		<>
			<Htag tag='h2'>Преимущества</Htag>
			<div className={styles.advantages}>
				{advantages.map(a => (
					<div className={styles.advantage} key={a._id}>
						<AdvantageIcon className={styles.icon} />
						<div className={styles.title}>
							{a.title}
						</div>
						<P size='l' className={styles.description}>
							{a.description}
						</P>
					</div>
				))}
				<P size='l'>
					{metaDescription}
				</P>
				<div className={styles.skills}>
					<Htag tag='h2'>Получаемые навыки</Htag>
					<div>
						{tags.map(tag => (
							<Tag color='primary' key={tag}>{tag}</Tag>
						))}
					</div>
				</div>
			</div>
		</>
	);
};