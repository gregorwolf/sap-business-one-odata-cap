/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import { WebClientVariantSelectedColumn } from './WebClientVariantSelectedColumn';
import { WebClientVariantGroupBy } from './WebClientVariantGroupBy';
import { WebClientVariantSortBy } from './WebClientVariantSortBy';
import { WebClientVariantEmbeddedChart } from './WebClientVariantEmbeddedChart';
import { WebClientVariantMChart } from './WebClientVariantMChart';
import type { WebClientVariantsApi } from './WebClientVariantsApi';
import { BoYesNoEnum } from './BoYesNoEnum';

/**
 * This class represents the entity "WebClientVariants" of service "SAPB1".
 */
export class WebClientVariants<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WebClientVariantsType<T>
{
  /**
   * Technical entity name for WebClientVariants.
   */
  static _entityName = 'WebClientVariants';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the WebClientVariants entity
   */
  static _keys = ['Guid'];
  /**
   * Guid.
   */
  guid!: DeserializedType<T, 'Edm.String'>;
  /**
   * Order.
   * @nullable
   */
  order?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * User Id.
   * @nullable
   */
  userId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * View Type.
   * @nullable
   */
  viewType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub View Type.
   * @nullable
   */
  subViewType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * View Id.
   * @nullable
   */
  viewId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Object Name.
   * @nullable
   */
  objectName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Filter Bar Layout.
   * @nullable
   */
  filterBarLayout?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * System Filter.
   * @nullable
   */
  systemFilter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Filter.
   * @nullable
   */
  userFilter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Condition Filter.
   * @nullable
   */
  conditionFilter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Public.
   * @nullable
   */
  isPublic?: BoYesNoEnum | null;
  /**
   * Is System.
   * @nullable
   */
  isSystem?: BoYesNoEnum | null;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Version.
   * @nullable
   */
  version?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Overview Customization.
   * @nullable
   */
  overviewCustomization?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Chart Customization.
   * @nullable
   */
  chartCustomization?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Web Client Variant Selected Column Collection.
   * @nullable
   */
  webClientVariantSelectedColumnCollection?:
    | WebClientVariantSelectedColumn<T>[]
    | null;
  /**
   * Web Client Variant Group By Collection.
   * @nullable
   */
  webClientVariantGroupByCollection?: WebClientVariantGroupBy<T>[] | null;
  /**
   * Web Client Variant Sort By Collection.
   * @nullable
   */
  webClientVariantSortByCollection?: WebClientVariantSortBy<T>[] | null;
  /**
   * Web Client Variant Embedded Chart Collection.
   * @nullable
   */
  webClientVariantEmbeddedChartCollection?:
    | WebClientVariantEmbeddedChart<T>[]
    | null;
  /**
   * Web Client Variant M Chart Collection.
   * @nullable
   */
  webClientVariantMChartCollection?: WebClientVariantMChart<T>[] | null;

  constructor(readonly _entityApi: WebClientVariantsApi<T>) {
    super(_entityApi);
  }
}

export interface WebClientVariantsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  guid: DeserializedType<T, 'Edm.String'>;
  order?: DeserializedType<T, 'Edm.Int32'> | null;
  userId?: DeserializedType<T, 'Edm.Int32'> | null;
  viewType?: DeserializedType<T, 'Edm.String'> | null;
  subViewType?: DeserializedType<T, 'Edm.String'> | null;
  viewId?: DeserializedType<T, 'Edm.String'> | null;
  objectName?: DeserializedType<T, 'Edm.String'> | null;
  filterBarLayout?: DeserializedType<T, 'Edm.String'> | null;
  systemFilter?: DeserializedType<T, 'Edm.String'> | null;
  userFilter?: DeserializedType<T, 'Edm.String'> | null;
  conditionFilter?: DeserializedType<T, 'Edm.String'> | null;
  isPublic?: BoYesNoEnum | null;
  isSystem?: BoYesNoEnum | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  version?: DeserializedType<T, 'Edm.Int32'> | null;
  overviewCustomization?: DeserializedType<T, 'Edm.String'> | null;
  chartCustomization?: DeserializedType<T, 'Edm.String'> | null;
  webClientVariantSelectedColumnCollection?:
    | WebClientVariantSelectedColumn<T>[]
    | null;
  webClientVariantGroupByCollection?: WebClientVariantGroupBy<T>[] | null;
  webClientVariantSortByCollection?: WebClientVariantSortBy<T>[] | null;
  webClientVariantEmbeddedChartCollection?:
    | WebClientVariantEmbeddedChart<T>[]
    | null;
  webClientVariantMChartCollection?: WebClientVariantMChart<T>[] | null;
}
