import config from '../../../../../apps/backoffice/backend/config/config';
import ElasticConfig from '../../../../Shared/infrastructure/persistence/elasticsearch/ElasticConfig';

export class BackofficeElasticConfigFactory {
  static createConfig(): ElasticConfig {
    return {
      url: config.get('elastic.url')
    };
  }
}
