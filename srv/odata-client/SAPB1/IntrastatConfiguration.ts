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
import type { IntrastatConfigurationApi } from './IntrastatConfigurationApi';
import { IntrastatConfigurationEnum } from './IntrastatConfigurationEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { IntrastatConfigurationTriangDealEnum } from './IntrastatConfigurationTriangDealEnum';

/**
 * This class represents the entity "IntrastatConfiguration" of service "SAPB1".
 */
export class IntrastatConfiguration<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements IntrastatConfigurationType<T>
{
  /**
   * Technical entity name for IntrastatConfiguration.
   */
  static _entityName = 'IntrastatConfiguration';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the IntrastatConfiguration entity
   */
  static _keys = ['AbsEntry'];
  /**
   * Abs Entry.
   */
  absEntry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Conf Type.
   * @nullable
   */
  confType?: IntrastatConfigurationEnum | null;
  /**
   * Code.
   * @nullable
   */
  code?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Descr.
   * @nullable
   */
  descr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Prcst Val.
   * @nullable
   */
  prcstVal?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Supp Unit.
   * @nullable
   */
  suppUnit?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Export.
   * @nullable
   */
  export?: BoYesNoEnum | null;
  /**
   * Import.
   * @nullable
   */
  import?: BoYesNoEnum | null;
  /**
   * Stat Code.
   * @nullable
   */
  statCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date From.
   * @nullable
   */
  dateFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Date To.
   * @nullable
   */
  dateTo?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Country.
   * @nullable
   */
  country?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Conf Id.
   * @nullable
   */
  confId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Triang Deal.
   * @nullable
   */
  triangDeal?: IntrastatConfigurationTriangDealEnum | null;

  constructor(readonly _entityApi: IntrastatConfigurationApi<T>) {
    super(_entityApi);
  }
}

export interface IntrastatConfigurationType<
  T extends DeSerializers = DefaultDeSerializers
> {
  absEntry: DeserializedType<T, 'Edm.Int32'>;
  confType?: IntrastatConfigurationEnum | null;
  code?: DeserializedType<T, 'Edm.String'> | null;
  descr?: DeserializedType<T, 'Edm.String'> | null;
  prcstVal?: DeserializedType<T, 'Edm.Double'> | null;
  suppUnit?: DeserializedType<T, 'Edm.Int32'> | null;
  export?: BoYesNoEnum | null;
  import?: BoYesNoEnum | null;
  statCode?: DeserializedType<T, 'Edm.String'> | null;
  dateFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  dateTo?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  country?: DeserializedType<T, 'Edm.String'> | null;
  confId?: DeserializedType<T, 'Edm.String'> | null;
  triangDeal?: IntrastatConfigurationTriangDealEnum | null;
}
