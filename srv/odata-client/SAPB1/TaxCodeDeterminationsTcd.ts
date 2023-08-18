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
import { TaxCodeDeterminationTcdDefaultWt } from './TaxCodeDeterminationTcdDefaultWt';
import { TaxCodeDeterminationTcdByUsage } from './TaxCodeDeterminationTcdByUsage';
import { TaxCodeDeterminationTcdKeyField } from './TaxCodeDeterminationTcdKeyField';
import type { TaxCodeDeterminationsTcdApi } from './TaxCodeDeterminationsTcdApi';
import { TaxCodeDeterminationTcdTypeEnum } from './TaxCodeDeterminationTcdTypeEnum';

/**
 * This class represents the entity "TaxCodeDeterminationsTCD" of service "SAPB1".
 */
export class TaxCodeDeterminationsTcd<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TaxCodeDeterminationsTcdType<T>
{
  /**
   * Technical entity name for TaxCodeDeterminationsTcd.
   */
  static _entityName = 'TaxCodeDeterminationsTCD';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the TaxCodeDeterminationsTcd entity
   */
  static _keys = ['AbsId'];
  /**
   * Abs Id.
   */
  absId!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Tcd Type.
   * @nullable
   */
  tcdType?: TaxCodeDeterminationTcdTypeEnum | null;
  /**
   * Dft Ar Code.
   * @nullable
   */
  dftArCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dft Ap Code.
   * @nullable
   */
  dftApCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Code Determination Tcd Default W Ts.
   * @nullable
   */
  taxCodeDeterminationTcdDefaultWTs?:
    | TaxCodeDeterminationTcdDefaultWt<T>[]
    | null;
  /**
   * Tax Code Determination Tcd By Usages.
   * @nullable
   */
  taxCodeDeterminationTcdByUsages?: TaxCodeDeterminationTcdByUsage<T>[] | null;
  /**
   * Tax Code Determination Tcd Key Fields.
   * @nullable
   */
  taxCodeDeterminationTcdKeyFields?:
    | TaxCodeDeterminationTcdKeyField<T>[]
    | null;

  constructor(readonly _entityApi: TaxCodeDeterminationsTcdApi<T>) {
    super(_entityApi);
  }
}

export interface TaxCodeDeterminationsTcdType<
  T extends DeSerializers = DefaultDeSerializers
> {
  absId: DeserializedType<T, 'Edm.Int32'>;
  tcdType?: TaxCodeDeterminationTcdTypeEnum | null;
  dftArCode?: DeserializedType<T, 'Edm.String'> | null;
  dftApCode?: DeserializedType<T, 'Edm.String'> | null;
  taxCodeDeterminationTcdDefaultWTs?:
    | TaxCodeDeterminationTcdDefaultWt<T>[]
    | null;
  taxCodeDeterminationTcdByUsages?: TaxCodeDeterminationTcdByUsage<T>[] | null;
  taxCodeDeterminationTcdKeyFields?:
    | TaxCodeDeterminationTcdKeyField<T>[]
    | null;
}
