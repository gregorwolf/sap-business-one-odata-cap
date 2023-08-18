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
import type { TaxExemptReasonsApi } from './TaxExemptReasonsApi';
import { VatGroups, VatGroupsType } from './VatGroups';

/**
 * This class represents the entity "TaxExemptReasons" of service "SAPB1".
 */
export class TaxExemptReasons<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TaxExemptReasonsType<T>
{
  /**
   * Technical entity name for TaxExemptReasons.
   */
  static _entityName = 'TaxExemptReasons';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the TaxExemptReasons entity
   */
  static _keys = ['Code'];
  /**
   * Code.
   */
  code!: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link VatGroups} entity.
   */
  vatGroups!: VatGroups<T>[];

  constructor(readonly _entityApi: TaxExemptReasonsApi<T>) {
    super(_entityApi);
  }
}

export interface TaxExemptReasonsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  vatGroups: VatGroupsType<T>[];
}
