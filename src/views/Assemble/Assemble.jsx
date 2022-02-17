import classNames from 'classnames';
import { memo } from 'react';
import CheckBox from '../../components/CheckBox/CheckBox';
import Input from '../../components/Input/Input';
import Radio from '../../components/Radio/Radio';
import styles from './Assemble.module.css';
import Button from '../../components/Button/Button';
import DropDown from '../../components/DropDown/DropDown';

const Assemble = () => (
  <section>
    <h2 className={styles.title}>Собери свой тур</h2>
    <p className="description pnormal">
      Идейные соображения высшего порядка, а также рамки и место обучения кадров
    </p>
    <article>
      <form className={styles.form}>
        <ul className={styles.list}>
          <Input
            fieldId="name"
            labelText="Имя"
            placeholder="Введите Ваше имя"
          />
          <DropDown
            fieldId="direction"
            labelText="Направление"
            placeholder="Куда хотите ехать"
          />
          <Input
            fieldId="email"
            labelText="Email"
            placeholder="example@mail.com"
          />
          <Input
            fieldId="phone"
            labelText="Телефон"
            placeholder="+7 (___)___-__-__"
          />
          <Input
            fieldId="date_from"
            labelText="Дата от"
            placeholder="ДД.ММ.ГГГГ"
          />
          <Input
            fieldId="date_before"
            labelText="Дата до"
            placeholder="ДД.ММ.ГГГГ"
          />
          <Input
            fieldId="comment"
            labelText="Комментарий"
            classes={{ input: styles.commentInput }}
          />
        </ul>
        <p className={classNames('pnormal', styles.checks)}>Вам есть 18 лет?</p>
        <div className={styles.ageCheck}>
          <Radio
            name="age"
            id="yes"
            text="Да"
            classes={{
              container: styles.radio,
              label: classNames('pnormal', styles.labels),
            }}
          />
          <Radio
            name="age"
            id="no"
            text="Нет"
            classes={{
              container: styles.radio,
              label: classNames('pnormal', styles.labels),
            }}
          />
        </div>
        <CheckBox
          id="yes_license"
          name="license"
          classes={{
            container: styles.checks,
            label: classNames(styles.labels, styles.checkBoxLabel),
          }}
          text={
            <span className="psmall">
              <span className={styles.greyText}>
                {'Нажимая на кнопку, я принимаю условия '}
              </span>
              Лицензионного договора
            </span>
          }
        />
        <div className={styles.checks}>
          <Button
            classes={{ button: classNames(styles.button, styles.findButton) }}
            text={
              <span className={classNames('pnormal', styles.buttonText)}>
                Найти тур
              </span>
            }
          />
          <Button
            classes={{ button: classNames(styles.button, styles.resetButton) }}
            text={
              <span className={classNames('pnormal', styles.buttonText)}>
                Сбросить
              </span>
            }
          />
        </div>
      </form>
    </article>
  </section>
);

export default memo(Assemble);
