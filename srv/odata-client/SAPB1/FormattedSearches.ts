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
import { UserValidValue } from './UserValidValue';
import { FieldId } from './FieldId';
import type { FormattedSearchesApi } from './FormattedSearchesApi';
import { BoFormattedSearchActionEnum } from './BoFormattedSearchActionEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { FormattedSearchByFieldEnum } from './FormattedSearchByFieldEnum';

/**
 * This class represents the entity "FormattedSearches" of service "SAPB1".
 */
export class FormattedSearches<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements FormattedSearchesType<T>
{
  /**
   * Technical entity name for FormattedSearches.
   */
  static _entityName = 'FormattedSearches';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the FormattedSearches entity
   */
  static _keys = ['Index'];
  /**
   * Form Id.
   * @nullable
   */
  formId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Id.
   * @nullable
   */
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Column Id.
   * @nullable
   */
  columnId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Action.
   * @nullable
   */
  action?: BoFormattedSearchActionEnum | null;
  /**
   * Query Id.
   * @nullable
   */
  queryId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Index.
   */
  index!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Refresh.
   * @nullable
   */
  refresh?: BoYesNoEnum | null;
  /**
   * Field Id.
   * @nullable
   */
  fieldId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Force Refresh.
   * @nullable
   */
  forceRefresh?: BoYesNoEnum | null;
  /**
   * By Field.
   * @nullable
   */
  byField?: BoYesNoEnum | null;
  /**
   * By Field Ex.
   * @nullable
   */
  byFieldEx?: FormattedSearchByFieldEnum | null;
  /**
   * User Valid Values.
   * @nullable
   */
  userValidValues?: UserValidValue<T>[] | null;
  /**
   * Field I Ds.
   * @nullable
   */
  fieldIDs?: FieldId<T>[] | null;

  constructor(readonly _entityApi: FormattedSearchesApi<T>) {
    super(_entityApi);
  }
}

export interface FormattedSearchesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  formId?: DeserializedType<T, 'Edm.String'> | null;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  columnId?: DeserializedType<T, 'Edm.String'> | null;
  action?: BoFormattedSearchActionEnum | null;
  queryId?: DeserializedType<T, 'Edm.Int32'> | null;
  index: DeserializedType<T, 'Edm.Int32'>;
  refresh?: BoYesNoEnum | null;
  fieldId?: DeserializedType<T, 'Edm.String'> | null;
  forceRefresh?: BoYesNoEnum | null;
  byField?: BoYesNoEnum | null;
  byFieldEx?: FormattedSearchByFieldEnum | null;
  userValidValues?: UserValidValue<T>[] | null;
  fieldIDs?: FieldId<T>[] | null;
}
