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
import type { DunningLettersApi } from './DunningLettersApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';

/**
 * This class represents the entity "DunningLetters" of service "SAPB1".
 */
export class DunningLetters<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DunningLettersType<T>
{
  /**
   * Technical entity name for DunningLetters.
   */
  static _entityName = 'DunningLetters';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the DunningLetters entity
   */
  static _keys = ['RowNumber'];
  /**
   * Fee Currency.
   * @nullable
   */
  feeCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Row Number.
   */
  rowNumber!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Letter Format.
   * @nullable
   */
  letterFormat?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Effectiveafter.
   * @nullable
   */
  effectiveafter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Minimum Balance Currency.
   * @nullable
   */
  minimumBalanceCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Feeperletter.
   * @nullable
   */
  feeperletter?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Calc Interest.
   * @nullable
   */
  calcInterest?: BoYesNoEnum | null;
  /**
   * Minimum Balance.
   * @nullable
   */
  minimumBalance?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * One-to-many navigation property to the {@link BusinessPartners} entity.
   */
  businessPartners!: BusinessPartners<T>[];

  constructor(readonly _entityApi: DunningLettersApi<T>) {
    super(_entityApi);
  }
}

export interface DunningLettersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  feeCurrency?: DeserializedType<T, 'Edm.String'> | null;
  rowNumber: DeserializedType<T, 'Edm.Int32'>;
  letterFormat?: DeserializedType<T, 'Edm.String'> | null;
  effectiveafter?: DeserializedType<T, 'Edm.String'> | null;
  minimumBalanceCurrency?: DeserializedType<T, 'Edm.String'> | null;
  feeperletter?: DeserializedType<T, 'Edm.Double'> | null;
  calcInterest?: BoYesNoEnum | null;
  minimumBalance?: DeserializedType<T, 'Edm.Double'> | null;
  businessPartners: BusinessPartnersType<T>[];
}
