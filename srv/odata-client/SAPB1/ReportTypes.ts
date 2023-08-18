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
import type { ReportTypesApi } from './ReportTypesApi';

/**
 * This class represents the entity "ReportTypes" of service "SAPB1".
 */
export class ReportTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ReportTypesType<T>
{
  /**
   * Technical entity name for ReportTypes.
   */
  static _entityName = 'ReportTypes';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the ReportTypes entity
   */
  static _keys = ['TypeCode'];
  /**
   * Type Code.
   */
  typeCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * Type Name.
   * @nullable
   */
  typeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Report Layout.
   * @nullable
   */
  defaultReportLayout?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Addon Name.
   * @nullable
   */
  addonName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Addon Form Type.
   * @nullable
   */
  addonFormType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Menu Id.
   * @nullable
   */
  menuId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: ReportTypesApi<T>) {
    super(_entityApi);
  }
}

export interface ReportTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  typeCode: DeserializedType<T, 'Edm.String'>;
  typeName?: DeserializedType<T, 'Edm.String'> | null;
  defaultReportLayout?: DeserializedType<T, 'Edm.String'> | null;
  addonName?: DeserializedType<T, 'Edm.String'> | null;
  addonFormType?: DeserializedType<T, 'Edm.String'> | null;
  menuId?: DeserializedType<T, 'Edm.String'> | null;
}
