import { setLocale, useIntl, useModel } from 'umi';
import { Select, Button } from 'antd';

import styles from './index.less';

const { Option } = Select;

const HomePage = () => {
  const intl = useIntl();
  const { signout } = useModel('useAuthModel');

  const handleChange = (value: string) => {
    setLocale(value, false);
  };

  return (
    <div>
      <h1 className={styles.title}>
        {intl.formatMessage({ id: 'WELCOME_TO_UMI_WORLD' }, { name: 'wang' })}
      </h1>
      <Select
        defaultValue="ja-JP"
        style={{ width: 120 }}
        onChange={handleChange}
      >
        <Option value="ja-JP">Japeness</Option>
        <Option value="en-US">English</Option>
      </Select>
      <Button onClick={signout}>Logout</Button>
    </div>
  );
};

HomePage.wrappers = ['@/wrappers/auth'];
HomePage.title = 'HOME_PAGE_TITLE';

export default HomePage;
